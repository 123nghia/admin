import { Tag } from "antd";

function TableCampaignJoinedUser() {
  const titles = [
    "STT.",
    "Tên chiến dịch",
    "NCC",
    "Ngày bắt đầu",
    "Ngày kết thúc",
    "Trạng thái",
  ];
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
          <tr>
            <td className="text-center">{}</td>
            <td className="text-center">{}</td>
            <td className="text-center">{}</td>
            <td className="text-center">{}</td>
            <td className="text-center">{}</td>
            <td className="text-center">
              {
                // <Tag
                //   className="ant-tag"
                //   color={Status == "Actived" ? "#87d068" : "#f50"}
                // >
                //   {Status == "Actived" ? "Hoạt động" : "Không hoạt động"}
                // </Tag>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableCampaignJoinedUser;
