import React, { Fragment, useEffect } from "react";
import TimeLineNotes from "./TimeLineNotes";
import FormNoteHistory from "./FormNoteHistory";
import { Divider } from "antd";
import { Typography } from "@mui/material";
// import axios from "axios";
// import Constants from "../../../../../contants/contants";

function NoteHistory({ detailUserVoucher }) {
  useEffect(() => {
    // const fetchNoteList = async () => {
    //   try {
    //     const response = await axios({
    //       url: `${Constants.BASE_URL}${Constants.FETCH_ALL_NOTE_USER_VOUCHER}/getAll?id=${idUser}`,
    //       method: "GET",
    //     });
    //     console.log(response.data.data);
    //   } catch (error) {
    //     console.log("Failed to fetch note list: ", error);
    //   }
    // };
    // fetchNoteList();
  }, []);
  const { _id } = detailUserVoucher;

  return (
    <Fragment>
      <FormNoteHistory />

      <Divider style={{ marginTop: 0 }} />

      <Typography
        align="left"
        sx={{ color: "#870000", margin: "0 1.3rem 1rem" }}
        variant="h5"
      >
        Thông tin lịch sử đặt hẹn
      </Typography>
      <TimeLineNotes idUser={_id} />
    </Fragment>
  );
}

export default NoteHistory;
