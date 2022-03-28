import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import vi from "date-fns/locale/vi";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import IframeModal from "../../../views/components/Iframe";
import Constants from "../../../contants/contants";
registerLocale("vi", vi);

function CalendarSkinHistory({ detailUserVoucher }) {
  const [idHistory, setIdHistory] = useState("");
  const [toggleHistory, setToggleHistory] = useState(false);

  const { skinHistory, create_at } = detailUserVoucher;
  const [startDate, setStartDate] = useState(new Date(create_at));

  function closeModal() {
    setToggleHistory(!toggleHistory);
  }
  return (
    <>
      <h1>Ngày soi da</h1>
      <div class="text-center">
        <ReactDatePicker
          locale="vi"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
        />
      </div>
      <div>
        <h1>Lịch sử soi da</h1>
        <td className="text-center">
          <CButton
            outline
            color="primary"
            onClick={(e) => {
              setIdHistory(skinHistory);
              setToggleHistory(!toggleHistory);
            }}
          >
            <CIcon name="cil-magnifying-glass" /> Xem chi tiết
          </CButton>
        </td>
      </div>
      <IframeModal
        toggleView={toggleHistory}
        link={Constants.BASE_URL_HISTORY_SKIN + idHistory}
        closeModal={closeModal}
      />
    </>
  );
}

export default CalendarSkinHistory;
