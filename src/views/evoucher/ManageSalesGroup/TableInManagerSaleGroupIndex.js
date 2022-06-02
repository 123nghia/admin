import React from "react";

import { Link } from "react-router-dom";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { CButton } from "@coreui/react";

function TableInManagerSaleGroup(props) {
  console.log(props.dataPagination);
  const titles = [
    "STT.",
    "Mã nhóm",
    "Tên nhóm",
    "Người quản lý",
    "Số điện thoại",
    "Email",
    "Ngày tạo",
    "#",
  ];

  const viewUpdateGroupSale = (item) => {
    props.showModalUpdateGroup();
    props.setUpdateInput({
      title: item.title,
      isManager: "1",
      description: item.description,
      saleIds: "",
      leadId: "",
    });
    props.setIdOfFormUpdate(item._id);
  };

  const openFormDelete = (item) => {
    props.showModalDeleteGroup();
    props.setIdOfFormUpdate(item._id);
  };

  return (
    <>
      <h5>Tổng số: {props.total ? props.total : ""}</h5>
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
          {props.dataPagination
            ? props.dataPagination.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{i + 1}</td>
                    <td className="text-center">{item._id}</td>
                    <td className="text-center">{item.title}</td>
                    <td className="text-center">Đang cập nhật</td>
                    <td className="text-center">Đang cập nhật</td>
                    <td className="text-center">Đang cập nhật</td>
                    <td className="text-center">Đang cập nhật</td>
                    <td className="text-center">
                      <div class="flex" style={{minWidth: '180px'}}>
                        <Link to={"/detail-manager-sale-group/" + item._id}>
                          <CButton
                            shape="rounded-pill"
                            variant="outline"
                            color="info"
                            style={styles.mgl5}
                            size="md"
                            className="flex-a-center "
                          >
                            <BsSearch className="mr-1" />
                            Chi tiết
                          </CButton>
                        </Link>
                        <CButton
                          shape="rounded-pill"
                          variant="ghost"
                          color="info"
                          style={styles.mgl5}
                          size="md"
                          onClick={(e) => viewUpdateGroupSale(item)}
                        >
                          <FiEdit3 style={styles.icon} name="cilPencil" />
                        </CButton>{" "}
                        <CButton
                          shape="rounded-pill"
                          variant="ghost"
                          color="danger"
                          style={styles.mgl5}
                          onClick={(e) => {
                            openFormDelete(item);
                          }}
                        >
                          <BsTrash
                            style={styles.icon}
                            className="icon"
                            name="cilTrash"
                          />
                        </CButton>
                      </div>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}

export default TableInManagerSaleGroup;

const styles = {
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  mgl5: {
    marginLeft: "5px",
  },
};
