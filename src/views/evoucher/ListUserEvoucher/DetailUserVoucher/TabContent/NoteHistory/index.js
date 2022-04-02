import React, { Fragment, useEffect, useState } from "react";
import TimeLineNotes from "./TimeLineNotes";
import FormNoteHistory from "./FormNoteHistory";
import { Divider } from "antd";
import { Snackbar, Typography } from "@mui/material";
import axios from "axios";
// import axios from "axios";
// import Constants from "../../../../../contants/contants";

function NoteHistory({ detailUserVoucher }) {
  const { voucher, company_id } = detailUserVoucher;

  const [noteList, setNoteList] = useState([]);
  const [newNote, setNewNote] = useState({});
  const [openAlert, setOpenAlert] = useState(false);

  const onFetchNoteList = async () => {
    try {
      const response = await axios({
        url: `https://evoucher-api.applamdep.com/api/evoucherNote/noted/getAll?company_id=${company_id}&transactionId=${voucher[0]._id}`,
        method: "GET",
      });
      setNoteList(response.data.data);
      console.log(response);
    } catch (error) {
      console.log("Failed to fetch note list: ", error);
    }
  };

  const onAddNoteBookAppointment = (note) => {
    console.log(note);
    axios({
      url: "https://evoucher-api.applamdep.com/api/evoucherNote/noted/add",
      method: "POST",
      data: note,
    })
      .then((res) => {
        onFetchNoteList();
        setTimeout(() => {
          setOpenAlert(false);
        }, 3000);
        setOpenAlert(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    onFetchNoteList();
  }, [newNote]);

  const handleSubmitAddNote = (noteValue) => {
    const data = {
      ...newNote,
      transactionId: `${voucher[0]._id}`,
      company_id: `${company_id}`,
      ...noteValue,
    };
    onAddNoteBookAppointment(data);

    setNewNote({
      ...data,
    });
  };

  return (
    <Fragment>
      <FormNoteHistory
        companyId={company_id}
        onSumitAddNote={handleSubmitAddNote}
      />

      <Divider style={{ marginTop: 0 }} />

      <Typography
        align="left"
        sx={{ color: "#870000", margin: "0 1.3rem 1rem" }}
        variant="h5"
      >
        Thông tin lịch sử đặt hẹn
      </Typography>
      <TimeLineNotes noteList={noteList} />

      <Snackbar
        sx={{ backgroundColor: "green" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openAlert}
        message="Thêm ghi chú thành công! 😄"
        key="top right"
      />
    </Fragment>
  );
}

export default NoteHistory;
