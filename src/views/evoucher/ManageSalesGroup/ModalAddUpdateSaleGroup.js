import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";
import { TextField, Typography } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

function ModalAddUpdateSaleGroup(props) {
  const closeModal = () => {
    props.closeModal();
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
          style={{ margin: "0.6rem 0 0.6rem 0" }}
        >
          Tên nhóm: <span style={{ color: "red" }}>(*)</span>
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nhập tên nhóm"
          variant="outlined"
          fullWidth
          size="small"
          name="name"
          //   onChange={(e) => {
          //     this.handleOnChangeValue(e, "name");
          //   }}
          //   value={}
        />
        <div className="mt-3">
          <Typography
            variant="subtitle1"
            component="h2"
            style={{ margin: "0.6rem 0 0.6rem 0" }}
          >
            Nội dung: <span style={{ color: "red" }}>(*)</span>
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
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <div>
          <CButton color="primary">Lưu</CButton>{" "}
          <CButton color="secondary" onClick={closeModal}>
            Đóng
          </CButton>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default ModalAddUpdateSaleGroup;
