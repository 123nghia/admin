import FaceIcon from "@mui/icons-material/Face";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Chip, IconButton, Tooltip } from "@mui/material";
import React, { Fragment } from "react";
import formatDate from "src/utils/formatDate";
import formatTime from "src/utils/formatTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";

const renderStatus = (status) => {
  const statusMap = {
    "Lên lịch": <EventAvailableIcon />,
    "Đã check-in": <CheckCircleOutlineIcon />,
    "Hoãn lại": <AutoDeleteIcon />,
  };
  return statusMap[status] || <DoDisturbIcon />;
};

const renderStatusColor = (status) => {
  const statusMap = {
    "Lên lịch": "info",
    "Đã check-in": "success",
    "Hoãn lại": "warning",
  };
  return statusMap[status] || "error";
};

function TimeLineNotes({ noteList }) {
  const renderTimeLineItem = (itemList) => {
    return itemList.map((item) => (
      <TimelineItem>
        <TimelineOppositeContent
          color="text.secondary"
          sx={{ flex: "0 0 auto", minWidth: "15rem" }}
        >
          {formatTime(item?.create_at)}, {formatDate(item?.create_at)}
          {/* <Tooltip title="Xem chi tiết">
            <IconButton size="small">
              <InfoOutlinedIcon sx={{ color: "#3C93E3" }} />
            </IconButton>
          </Tooltip> */}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Chip
            icon={renderStatus(item?.status)}
            label={item?.status}
            variant="outlined"
            color={renderStatusColor(item?.status)}
          />
          {" - "}
          {item?.noted}
        </TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <Fragment>
      {noteList.length !== 0 ? (
        <Fragment>
          <Timeline position="right">{renderTimeLineItem(noteList)}</Timeline>
        </Fragment>
      ) : (
        <p
          style={{ textAlign: "center", backgroundColor: "rgb(222, 222, 222)" }}
        >
          Không có thông tin lịch hẹn!!
        </p>
      )}
    </Fragment>
  );
}

export default TimeLineNotes;
