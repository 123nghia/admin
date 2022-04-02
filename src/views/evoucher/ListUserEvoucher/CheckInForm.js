import { Avatar, Form, Input, Switch, Tag } from "antd";
import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import { ImCalendar } from "react-icons/im";
import { Box, Typography } from "@mui/material";

function CheckInForm({ detailUserVoucher }) {
  const { noted, create_at, status, voucher, fullName, phoneNumber } =
    detailUserVoucher;

    const renderStatusContent = (statusCode) => {
    const statusCodeMap = {
      0: "Đã nhận evoucher",
      1: "Đã nhận evoucher",
      2: "Đã check-in",
    };
    
    return statusCodeMap[statusCode] || "Không xác định";
  };
  const renderStatusColorTag = (statusCode) => {
    const statusCodeMap = {
      0: "green",
      1: "magenta",
      2: "cyan",
    };
    return statusCodeMap[statusCode] || "lime";
  };
  console.log(voucher[0]);
  return (
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
          color={renderStatusColorTag(voucher[0].status)}
        >
          <Typography
            style={{ paddingTop: "0.3rem" }}
            variant="subtitle1"
            gutterBottom
            component="div"
          >

            {renderStatusContent(voucher[0].status)} {" "}
            {
              voucher[0].status && voucher[0].status !=="2" && voucher[0].historyId && voucher[0].historyId !== null ? "- Có soi da" : "- Không soi da"
            }
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
        style={{ marginTop: "1.5rem" }}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        Ghi chú nhắc hẹn:
      </Typography>
      <Typography
        style={{ marginTop: "1.5rem" }}
        variant="subtitle1"
        gutterBottom
        component="div"
      >
        Thời gian check-in:
        <span style={{ marginLeft: "1.5rem", fontWeight: "bold" }}>
          {new Date(create_at).toLocaleDateString()}
        </span>
      </Typography>
    </Box>
    // <Form
    //   labelCol={{
    //     span: 4,
    //   }}
    //   wrapperCol={{
    //     span: 14,
    //   }}
    //   layout="horizontal"
    // >
    //   <Form.Item label="Trạng thái">
    //     <Tag color={renderStatusColorTag(voucher[0].status)}>
    //       {renderStatusContent(voucher[0].status)}
    //     </Tag>
    //   </Form.Item>
    //   {noted && (
    //     <Form.Item label="Ghi chú">
    //       <Input.TextArea defaultValue={noted} />
    //     </Form.Item>
    //   )}

    //   <Form.Item label="Số lần soi da">
    //     <Avatar style={{ backgroundColor: "#87d068" }} icon={1} />
    //   </Form.Item>
    //   <Form.Item label="Thời gian check-in">
    //
    //   </Form.Item>
    // </Form>
  );
}

export default CheckInForm;
