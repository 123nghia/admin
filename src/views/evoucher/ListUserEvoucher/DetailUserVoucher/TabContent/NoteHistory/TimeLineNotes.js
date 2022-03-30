import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { IconButton, Tooltip } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
// import Constants from "../../../../../contants/contants";

function TimeLineNotes({ idUser }) {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    // const fetchNoteList = async () => {
    //   try {
    //     const response = await axios({
    //       url: `${Constants.BASE_URL}${Constants.FETCH_ALL_NOTE_USER_VOUCHER}/getAll?id=${idUser}`,
    //       method: "GET",
    //     });
    //     setNoteList(response.data.data);
    //   } catch (error) {
    //     console.log("Failed to fetch note list: ", error);
    //   }
    // };
    // fetchNoteList();
  }, [noteList]);

  return (
    <Fragment>
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ flex: "0 0 auto" }}
          >
            09:30 am
            <Tooltip title="Xem chi tiết">
              <IconButton size="small">
                <InfoOutlinedIcon sx={{ color: "#3C93E3" }} />
              </IconButton>
            </Tooltip>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Đã lên lịch hẹn vào lúc 10:30</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            color="text.secondary"
            sx={{ flex: "0 1 auto" }}
          >
            09:30 am
            <IconButton size="small">
              <InfoOutlinedIcon sx={{ color: "#3C93E3" }} />
            </IconButton>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Đã lên lịch hẹn vào lúc 10:30</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Fragment>
  );
}

export default TimeLineNotes;
