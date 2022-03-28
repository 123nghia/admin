import { Avatar, Form, Input, Switch, Tag } from "antd";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function CheckInForm({ detailUserVoucher }) {
  const { noted, create_at, status, voucher } = detailUserVoucher;
  const [componentSize, setComponentSize] = useState("default");

  console.log(status);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const renderStatusContent = (statusCode) => {
    const statusCodeMap = {
      0: "Đã nhận evoucher - có soi da",
      1: "Đã nhận evoucher - không soi da",
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

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Trạng thái">
        <Tag color={renderStatusColorTag(voucher[0].status)}>
          {renderStatusContent(voucher[0].status)}
        </Tag>
      </Form.Item>
      {noted && (
        <Form.Item label="Ghi chú">
          <Input.TextArea defaultValue={noted} />
        </Form.Item>
      )}

      <Form.Item label="Số lần soi da">
        <Avatar style={{ backgroundColor: "#87d068" }} icon={1} />
      </Form.Item>
      <Form.Item label="Thời gian check-in">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={create_at}
          />
        </LocalizationProvider>
      </Form.Item>
    </Form>
  );
}

export default CheckInForm;
