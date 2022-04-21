import { Tag } from "antd";
import Chip from "@mui/material/Chip";

function TabInfoVoucherUser(propsVoucher) {
  console.log(propsVoucher);
  const titles = [
    "STT.",
    "Mã voucher",
    "Tên khách hàng",
    "Tên NCC",
    "Tỉnh/Thành",
    "Checkin",
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
          {propsVoucher.propsVoucher
            ? propsVoucher.propsVoucher.map((item, i) => (
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
                  <td className="text-center">Chưa có thông tin</td>
                  <td className="text-center">Chưa có thông tin</td>
                  <td className="text-center">Chưa có thông tin</td>
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
    </>
  );
}

export default TabInfoVoucherUser;
