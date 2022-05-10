import React from "react";

function TableInManageKeyIndex(props) {
  console.log(props.dataPagination);

  const titles = ["STT.", "Key soi da", "Key makeup"];

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
            <td className="text-center">1</td>
            <td className="text-center">Đang cập nhật</td>
            <td className="text-center">Đang cập nhật</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableInManageKeyIndex;
