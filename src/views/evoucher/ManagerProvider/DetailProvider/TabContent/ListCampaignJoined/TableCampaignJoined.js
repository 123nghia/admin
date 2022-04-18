import React from "react";
import ModalDetailProvider from "../../../Modal/Modal_DetailProvider";
import { CButton } from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { Tag } from "antd";
import { Link } from "react-router-dom";

function TableCampaignJoined({ tableListCampaignJoined }) {
  console.log("tableListCampaignJoined", tableListCampaignJoined);
  const titles = [
    "STT.",
    "Tên chiến dịch",
    "Trạng thái",
    "Số lượng voucher",
    "",
  ];

  const [statusModal, setStatusModal] = React.useState(false);

  const GetDetailCampaignOfProvider = () => {};

  const closeModalDetailProvider = () => {
    setStatusModal(false);
  };
  return (
    <>
      {statusModal ? (
        <ModalDetailProvider closeModal={closeModalDetailProvider} />
      ) : null}

      <table
        ble
        className="table table-hover mb-0 d-none d-sm-table table_dash table-bordered"
      >
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
          {tableListCampaignJoined.map((item, i) => (
            <tr key={i}>
              <td className="text-center">{i + 1}</td>
              <td className="text-center">{item.name}</td>
              <td className="text-center">
                {
                  <Tag
                    className="ant-tag"
                    color={item.status === "1" ? "#87d068" : "#f50"}
                  >
                    {item.status === "1" ? "Hoạt động" : "Không hoạt động"}
                  </Tag>
                }
              </td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center" style={{ minWidth: "230px" }}>
                <div className="flex">
                  <Link
                    onClick={GetDetailCampaignOfProvider}
                    to={"/modal-detail-provider/" + item._id}
                  >
                    <CButton
                      shape="rounded-pill"
                      variant="outline"
                      color="info"
                      style={{ marginLeft: "5px" }}
                      size="md"
                      className="flex-a-center"
                      onClick={() => setStatusModal(true)}
                    >
                      <BsSearch className="mr-1" />
                      Chi tiết
                    </CButton>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableCampaignJoined;
