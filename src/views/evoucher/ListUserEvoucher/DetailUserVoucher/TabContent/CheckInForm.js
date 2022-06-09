import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import { Box, Chip, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { Avatar, Divider, Form, Input, Tag } from "antd";
import React, { Fragment, useState } from "react";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const labels = {
  1: "1 điểm",
  2: "2 điểm",
  3: "3 điểm",
  4: "4 điểm",
  5: "5 điểm",
  6: " 6 điểm",
  7: " 7 điểm",
  8: " 8 điểm",
  9: " 9 điểm",
  10: "10 điểm",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

function CheckInForm({ detailUserVoucher }) {
  const { noted, create_at, status, voucher, fullName, phoneNumber } =
    detailUserVoucher;

  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const renderStatusContent = (statusCode) => {
    const statusCodeMap = {
      0: "Đã nhận evoucher - có soi da",
      1: "Đã nhận evoucher - có soi da",
      2: "Đã check-in",
    };
    return statusCodeMap[statusCode] || "Không xác định";
  };
  const renderStatusColorTag = (statusCode) => {
    const statusCodeMap = {
      0: "green",
      1: "green",
      2: "cyan",
    };
    return statusCodeMap[statusCode] || "lime";
  };

  return (
    <Fragment>
      <Box>
        <Typography
          style={{ marginTop: "1.5rem" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Họ tên khách hàng:
          <span style={{ marginLeft: "1.5rem", fontWeight: "bold" }}>
            {fullName}
          </span>
        </Typography>
        <Typography
          style={{ marginTop: "1.5rem" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Số điện thoại:
          <span style={{ marginLeft: "1.5rem", fontWeight: "bold" }}>
            {phoneNumber}
          </span>
        </Typography>
        <Typography
          style={{ marginTop: "1.5rem" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Trạng thái:
          <Tag
            style={{ marginLeft: "1.85rem" }}
            color={renderStatusColorTag(voucher[0]?.status)}
          >
            <Typography
              style={{ paddingTop: "0.3rem" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              {renderStatusContent(voucher[0]?.status)}
            </Typography>
          </Tag>
        </Typography>
        {noted && (
          <Fragment>
            <Typography
              style={{ marginTop: "1.5rem" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              Ghi chú
            </Typography>
            <Form.Item label="Ghi chú">
              <Input.TextArea defaultValue={noted} />
            </Form.Item>
          </Fragment>
        )}
        <Typography
          style={{ marginTop: "1.5rem" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Số lần soi da:
          <Avatar
            style={{ backgroundColor: "#87d068", marginLeft: "0.85rem" }}
            icon={1}
          />
        </Typography>
        <Typography
          style={{
            marginTop: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          {/* Điểm dịch vụ:
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "1.5rem" }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              defaultValue={8}
              max={10}
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box> */}
        </Typography>
        <Typography
          style={{ marginTop: "0rem" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Thời gian soi da:
          <span style={{ marginLeft: "1.5rem", fontWeight: "bold" }}>
          {new Date(create_at).toLocaleTimeString()} {" "}
            ngày {new Date(create_at).toLocaleDateString()}
          </span>
        </Typography>
      </Box>
      <Divider />

      {/* thông tin tham gia nhận voucher */}
      <Box>
        <Typography
          style={{ marginTop: "1.5rem", fontWeight: "bold" }}
          variant="h5"
          gutterBottom
          component="div"
        >
          Thông tin tham gia nhận Evoucher 
        </Typography>
        <Typography
          style={{ marginTop: "1.5rem" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Thời gian Tham Gia:
          <span style={{ marginLeft: "1.5rem", fontWeight: "bold" }}>
            {new Date(create_at).toLocaleTimeString()} {" "}
            ngày {new Date(create_at).toLocaleDateString()}
          </span>
        </Typography>
        {/* <Typography
          style={{ marginTop: "1.3rem", display: "flex", alignItems: "center" }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Thời gian phản hồi:
          <Chip
            sx={{ marginLeft: "1.3rem" }}
            icon={<AccessTimeIcon />}
            label="3 giờ trước"
          />
        </Typography> */}
      </Box>
      {/* End - thông tin tham gia nhận voucher */}
    </Fragment>
  );
}

export default CheckInForm;
