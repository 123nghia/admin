function ProviderUserSystem(props) {
  console.log("propsProvider", props.data[0]);
  console.log("propsProvider", props.data);

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
          {props.data[0]
            ? props.data[0].map((item, i) => (
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{item.Name}</td>
                  <td className="text-center">
                    {new Date(item?.Create_Date).toLocaleDateString()}
                  </td>
                  <td className="text-center">Đang cập nhật</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </>
  );
}

export default ProviderUserSystem;
