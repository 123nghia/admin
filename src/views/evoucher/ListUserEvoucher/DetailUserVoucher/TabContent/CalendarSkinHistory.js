import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { Form, Space } from "antd";
import React, { useState } from "react";
import Constants from "../../../../../contants/contants";
import IframeModal from "../../../../components/Iframe";

function CalendarSkinHistory({ detailUserVoucher }) {
  const [idHistory, setIdHistory] = useState("");
  const [toggleHistory, setToggleHistory] = useState(false);

  const { skinHistory, create_at } = detailUserVoucher;

  function closeModal() {
    setToggleHistory(!toggleHistory);
  }
  return (
    <Space>
      <Form.Item label="Ngày soi da: ">
        {new Date(create_at).toLocaleDateString()}
      </Form.Item>
      
      <CButton
        outline
        color="primary"
        onClick={(e) => {
          setIdHistory(skinHistory);
          setToggleHistory(!toggleHistory);
        }}
      >
        <CIcon name="cil-magnifying-glass" /> Xem lịch sử soi da
      </CButton>
      <IframeModal
        toggleView={toggleHistory}
        link={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory}
        closeModal={closeModal}
      />
    </Space>
  );
}

export default CalendarSkinHistory;
