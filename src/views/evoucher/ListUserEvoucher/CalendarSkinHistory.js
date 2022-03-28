import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import IframeModal from "../../../views/components/Iframe";
import Constants from "../../../contants/contants";
import { Form, Space } from "antd";
import { DateTimePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";

function CalendarSkinHistory({ detailUserVoucher }) {
  const [idHistory, setIdHistory] = useState("");
  const [toggleHistory, setToggleHistory] = useState(false);

  const { skinHistory, create_at } = detailUserVoucher;

  const dateFormat = "DD/MM/YYYY";
  const [startDate, setStartDate] = useState(new Date(create_at));

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
        link={Constants.BASE_URL_HISTORY_SKIN + idHistory}
        closeModal={closeModal}
      />
    </Space>
  );
}

export default CalendarSkinHistory;
