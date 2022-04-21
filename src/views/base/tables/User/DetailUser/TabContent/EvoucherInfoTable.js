import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { Card, Col, Row, Tag } from "antd";
import "antd/dist/antd.css";
import "moment-timezone";
import React, { useState } from "react";
import formatDate from "src/utils/formatDate";
import Constants from "../../../../../../contants/contants";
import IframeModal from "../../../../../components/Iframe";

function EvoucherInfoTable({ detailUserVoucher }) {
  const { voucherCode, voucher, branch, historyId, create_at } =
    detailUserVoucher;
  const [idHistory, setIdHistory] = useState("");
  const [toggleHistory, setToggleHistory] = useState(false);

  const headingList = [
    "STT.",
    "Mã",
    "Nhà cung cấp",
    "Nội dung",
    "Ngày soi da",
    "Ngày checkin",
    "Trạng thái",
    "Lịch sử soi da",
  ];

  const checkStatusUserVoucherColor = (status) => {
    const statusColorMap = {
      A: "#2eb85c",
      1: "#2db7f5",
      2: "#87d068",
      3: "#dc0e04",
    };

    return statusColorMap[status] || "#FF0004";
  };
  const checkStatusUserVoucherContent = (status) => {
    const statusContentMap = {
      A: "Đã giao KH",
      1: "Đã xác nhận KH",
      2: "Hoàn thành",
      3: "Hủy bỏ",
    };

    return statusContentMap[status] || "Chưa xác nhận";
  };
  function closeModal() {
    setToggleHistory(!toggleHistory);
  }

  const renderUserVoucherList = () => (
    <table
      ble
      className="table mt-3 table-hover table-outline mb-0 d-none d-sm-table table_dash"
    >
      <thead className="thead-light">
        <tr>
          {headingList.map((title, idx) => (
            <th key={idx} className="text-center">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">1</td>
          <td className="text-center">{voucherCode}</td>
          <td className="text-center">
            {branch.length !== 0 ? (
              branch
            ) : (
              <img
                src="https://seoulspa.vn/wp-content/uploads/2020/12/logo-spa-1.png"
                alt="https://seoulspa.vn/wp-content/uploads/2020/12/logo-spa-1.png"
                style={{ width: "50%" }}
              />
            )}
          </td>
          <td className="text-center">{voucher[0]?.content}</td>
          <td className="text-center">
            <Tag
              className="ant-tag"
              color={checkStatusUserVoucherColor(voucher[0]?.status)}
            >
              {checkStatusUserVoucherContent(voucher[0]?.status)}
            </Tag>
          </td>

          <td className="text-center">
            {historyId ? (
              <CButton
                shape="rounded-pill"
                variant="outline"
                color="info"
                size="md"
                className="flex-a-center "
                onClick={(e) => {
                  setIdHistory(historyId);
                  setToggleHistory(!toggleHistory);
                }}
              >
                {formatDate(create_at)}
                <CIcon
                  style={{ marginLeft: "0.5rem" }}
                  name="cil-magnifying-glass"
                />
              </CButton>
            ) : null}
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>{renderUserVoucherList()}</Card>
          <IframeModal
            toggleView={toggleHistory}
            link={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory}
            closeModal={closeModal}
          />
        </Col>
      </Row>
    </div>
  );
}

export default EvoucherInfoTable;
