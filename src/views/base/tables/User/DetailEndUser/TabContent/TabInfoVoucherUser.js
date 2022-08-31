import React from "react";
import { Tag } from "antd";
import Chip from "@mui/material/Chip";
import Pagination from "@mui/material/Pagination";

function TabInfoVoucherUser(props) {
  const [arrPagination, setArrPagination] = React.useState([]);
  const [hidden, setHidden] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [indexPage, setIndexPage] = React.useState(0);
  const { dataApi } = props;

  console.log(dataApi);
  React.useEffect(() => {
    pagination(dataApi);
  }, [dataApi]);

  const pagination = (dataApi) => {
    var i,
      j,
      temparray,
      chunk = 50;
    var arrTotal = [];
    if (dataApi && dataApi.length > 0) {
      for (i = 0, j = dataApi.length; i < j; i += chunk) {
        temparray = dataApi.slice(i, i + chunk);
        arrTotal.push(temparray);
      }

      if (arrTotal.length == 0) {
        setHidden(hidden);
      } else {
        setHidden(!hidden);
      }

      setArrPagination([...arrTotal]);
      setData([...arrTotal[indexPage]]);
    }
  };

  const titles = [
    "STT.",
    "Mã voucher",
    "Tên khách hàng",
    "Tên NCC",
    "Tỉnh/Thành",
    // "Ghi chú",
    "Trạng thái",
  ];

  const checkStatusUserVoucherColor = (status) => {
    const statusColorMap = {
      2: "#2eb85c",
      A: "#2db7f5",
      1: "#87d068",
      0: "#dc0e04",
    };

    return statusColorMap[status] || "#FF0004";
  };
  const checkStatusUserVoucherContent = (status) => {
    const statusContentMap = {
      A: "Đã nhận voucher",
      0: "Đã check-in",
      1: "Hoàn thành",
      2: "Hủy bỏ",
    };

    return statusContentMap[status] || "Chưa xác nhận";
  };
  return (
    <div className="table__overflow">
      <table ble className="table table-hover mb-0 d-none d-sm-table">
        <thead className="thead-light">
          <tr>
            {titles.map((title, i) => (
              <th key={i} className="text-center">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length !== 0
            ? data.map((item, i) => (
                <tr key={i}>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">
                    <Chip
                      label={item.voucherCode}
                      variant="outlined"
                      sx={{ backgroundColor: "#9fcfde", border: "none" }}
                    />
                  </td>
                  <td className="text-center">{item.fullName}</td>
                  <td className="text-center">{item.slug ? item.slug : null}</td>
                  <td className="text-center">{item.voucher && item.voucher[0] && item.voucher[0]?.region ? item.voucher[0]?.region : null}</td>
                  {/* <td className="text-center">{item.note ? item.note : "Chưa có ghi chú"}</td> */}
                  <td className="text-center">
                    <Tag
                      className="ant-tag"
                      color={checkStatusUserVoucherColor(item.status)}
                    >
                      {checkStatusUserVoucherContent(item.status)}
                    </Tag>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
      <div style={{ float: "right" }}>
        <Pagination
          count={arrPagination.length}
          color="primary"
          onChange={(e, v) => {
            setData([...arrPagination[v - 1]]);
            setIndexPage(v - 1);
          }}
        />
      </div>
    </div>
  );
}

export default TabInfoVoucherUser;
