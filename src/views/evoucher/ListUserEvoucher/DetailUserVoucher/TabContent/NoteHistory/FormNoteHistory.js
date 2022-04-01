import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  TimePicker,
} from "antd";
import React, { Fragment, useState } from "react";
import "./FormNoteHistory.css";
import moment from "moment";

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};
const tailLayout = {
  wrapperCol: { offset: 11, span: 5 },
};

function FormNoteHistory() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning

  const onGenderChange = (value) => {
    console.log(value);
  };
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "dd-MM-YYYY HH:mm:ss"
      ),
    };
    console.log("Received values of form: ", values);
  };

  return (
    <Fragment>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Row>
          {/* select date-time */}
          <Col span={16} offset={1}>
            <Form.Item
              name="date-time-picker"
              className="itemform__label"
              {...config}
            >
              <span
                style={{
                  color: "#ff4d4f",
                  fontFamily: "SimSun, sans-serif",
                  marginRight: "4px",
                }}
              >
                *
              </span>
              <span style={{ lineHeight: "2.2rem", display: "inline-block" }}>
                Ngày giờ khách đặt hẹn
              </span>
              <DatePicker
                placeholder="mm- dd- yyyy, --:--:--"
                showTime
                format="DD-MM-YYYY HH:mm:ss"
              />
            </Form.Item>
          </Col>
          {/* end select date-time */}

          {/* selector status book appointment */}
          <Col span={6}>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <span
                style={{
                  color: "#ff4d4f",
                  fontFamily: "SimSun, sans-serif",
                  marginRight: "4px",
                }}
              >
                *
              </span>
              <span style={{ lineHeight: "2.2rem", display: "inline-block" }}>
                Trạng thái:
              </span>
              <Select
                placeholder="Lên lịch"
                onChange={onGenderChange}
                allowClear
              >
                <Option value="booked">Lên lịch</Option>
                <Option value="checked">Đã check-in</Option>
                <Option value="delay">Hoãn lại</Option>
                <Option value="cancel">Huỷ bỏ</Option>
              </Select>
            </Form.Item>
          </Col>
          {/* end selector status book appointment */}

          {/* note input */}
          <Col span={22} offset={1}>
            <Form.Item
              name="note"
              rules={[
                {
                  required: true,
                  message: "Please input Intro",
                },
              ]}
            >
              <span
                style={{
                  color: "#ff4d4f",
                  fontFamily: "SimSun, sans-serif",
                  marginRight: "4px",
                }}
              >
                *
              </span>
              <span style={{ lineHeight: "2.2rem", display: "inline-block" }}>
                Ghi chú
              </span>
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
          </Col>
          {/* end note input */}

          <Col span={24}>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Lưu ghi chú
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
}

export default FormNoteHistory;
