import React from "react";
import Pagination from "@mui/material/Pagination";

function ProviderUserSystem(props) {
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

  const titles = ["STT.", "Tên NCC", "Ngày đăng ký", "Lượt soi da gần nhất"];

  return (
    <>
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
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.vendor && item.vendor && item.vendor[0] ? item.vendor[0].Name : ""}</td>
                  <td className="text-center">
                    {new Date(item?.create_date).toLocaleDateString()}
                  </td>
                  <td className="text-center">Đang cập nhật</td>
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
    </>
  );
}

export default ProviderUserSystem;
