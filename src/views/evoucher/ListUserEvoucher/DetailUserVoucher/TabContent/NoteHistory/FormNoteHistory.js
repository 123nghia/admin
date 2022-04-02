import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React, { Fragment, useState } from "react";
import "./FormNoteHistory.css";

const { Option } = Select;

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 17 },
};
const tailLayout = {
  wrapperCol: { offset: 11, span: 5 },
};

function FormNoteHistory({ company_id, onSumitAddNote }) {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning
  const [open, setOpen] = useState(true);

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Vui lòng chọn thời gian đặt hẹn!",
      },
    ],
  };
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      bussinessTime: fieldsValue["bussinessTime"].format("YYYY-MM-DD HH:mm:ss"),
    };
    console.log("Received values of form: ", values);

    onSumitAddNote(values);

    form.resetFields();

    setOpen(!open);
  };

  return (
    <Fragment>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        {!open && (
          <>
            {/* select date-time */}
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  label="Chọn lịch hẹn"
                  name="bussinessTime"
                  className="itemform__label"
                  {...config}
                  hasFeedback
                >
                  <DatePicker
                    placeholder="mm- dd- yyyy, --:--:--"
                    showTime
                    format="DD-MM-YYYY HH:mm:ss"
                  />
                </Form.Item>
              </Col>
              {/* end select date-time */}
              <Col span={12}>
                {/* selector status book appointment */}
                <Form.Item
                  name="status"
                  label="Trạng thái"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn trạng thái!",
                    },
                  ]}
                  hasFeedback
                >
                  <Select placeholder="Lên lịch" allowClear>
                    <Option value="Lên lịch">Lên lịch</Option>
                    <Option value="Đã check-in">Đã check-in</Option>
                    <Option value="Hoãn lại">Hoãn lại</Option>
                    <Option value="Huỷ bỏ">Huỷ bỏ</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            {/* end selector status book appointment */}

            {/* note input */}
            <Row gutter={8}>
              <Col span={24}>
                <Form.Item
                  name="noted"
                  label="Ghi chú:"
                  rules={[
                    {
                      required: true,
                      message: "Ghi chú không được để trống!",
                    },
                  ]}
                  hasFeedback
                >
                  <Input.TextArea showCount maxLength={100} />
                </Form.Item>{" "}
              </Col>
            </Row>
            {/* end note input */}
          </>
        )}
        <Form.Item {...tailLayout}>
          {!open ? (
            <Button type="primary" htmlType="submit">
              Lưu ghi chú
            </Button>
          ) : (
            <Button onClick={() => setOpen(!open)} type="primary">
              Viết ghi chú
            </Button>
          )}
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default FormNoteHistory;
