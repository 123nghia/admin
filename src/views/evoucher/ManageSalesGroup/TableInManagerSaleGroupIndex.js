import React from "react";

import { Link } from "react-router-dom";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { CButton } from "@coreui/react";

import ModalAddUpdateSaleGroup from "./ModalAddUpdateSaleGroup";

function TableInManagerSaleGroup(props) {
  console.log(props.propsSaleGroup);
  const [statusModal, setStatusModal] = React.useState(false);
  const [actionModal, setActionModal] = React.useState("new");

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

  const viewUpdateGroupSale = () => {
    setActionModal("update");
    setStatusModal(true);
  };

  const closeModalViewAdd = () => {
    setStatusModal(false);
  };

  return (
    <>
      {statusModal ? (
        <ModalAddUpdateSaleGroup
          actionModal={actionModal}
          closeModal={closeModalViewAdd}
        />
      ) : null}
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
          {props.propsSaleGroup
            ? props.propsSaleGroup.map((item, i) => {
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
                      <div class="flex">
                        <Link to={"/detail-manager-sale-group/" + item._id}>
                          <CButton
                            shape="rounded-pill"
                            variant="outline"
                            color="info"
                            style={styles.mgl5}
                            size="sm"
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
                          onClick={(e) => viewUpdateGroupSale()}
                        >
                          <FiEdit3 style={styles.icon} name="cilPencil" />
                        </CButton>{" "}
                        <CButton
                          shape="rounded-pill"
                          variant="ghost"
                          color="danger"
                          style={styles.mgl5}
                          onClick={(e) => {
                            // this.openDelete(item);
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
