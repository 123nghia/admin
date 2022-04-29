import React from "react";
import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";
import { TextField, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function ModalAddUpdateSaleGroup(props) {
  console.log("123", props.inputChange);
  console.log("123", props);
  const { inputChange } = props;

  const closeModal = () => {
    props.closeModal();
  };

  const setInput = (name, value) => {
    props.setInput(name, value);
  };

  return (
    <Modal isOpen={true} size="l">
      <ModalHeader>
        {props.actionModal === "new" ? "Tạo mới" : "Cập nhật"}
      </ModalHeader>
      <ModalBody>
        <Typography
          variant="subtitle1"
          component="h2"
          style={{ margin: "0.6rem 0 0.3rem 0" }}
        >
          Tên nhóm
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nhập tên nhóm"
          variant="outlined"
          fullWidth
          size="small"
          name="title"
          value={inputChange?.title}
          onChange={(e) => {
            setInput("title", e.target.value);
          }}
        />
        <div className="mt-3">
          <Typography
            variant="subtitle1"
            component="h2"
            style={{ margin: "0.6rem 0 0.3rem 0" }}
          >
            Nội dung
          </Typography>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Nhập nội dung nhóm sale"
            style={{
              width: 465,
              fontSize: 16,
              padding: "5px 15px",
              borderColor: "#ccc",
              borderRadius: "3px",
            }}
            onChange={(e) => {
              setInput("description", e.target.value);
            }}
            name="description"
            value={inputChange?.description}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <div>
          <CButton
            color="primary"
            onClick={
              props.actionModal === "new"
                ? props.handleAddGroupSale
                : props.handleUpdateGroupSale
            }
          >
            Lưu
          </CButton>{" "}
          <CButton color="secondary" onClick={closeModal}>
            Đóng
          </CButton>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default ModalAddUpdateSaleGroup;
