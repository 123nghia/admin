import React, { Fragment, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";
import TimeLineNotes from "./TimeLineNotes";
import axios from "axios";
import Constants from "./../../../../contants/contants";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};
const tailLayout = {
  wrapperCol: { offset: 11, span: 5 },
};

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
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="note"
          label="Ghi chú"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }
        >
          {({ getFieldValue }) =>
            getFieldValue("gender") === "other" ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Lưu ghi chú
          </Button>
        </Form.Item>
      </Form>

      <TimeLineNotes idUser={_id} />
    </Fragment>
  );
}

export default NoteHistory;
