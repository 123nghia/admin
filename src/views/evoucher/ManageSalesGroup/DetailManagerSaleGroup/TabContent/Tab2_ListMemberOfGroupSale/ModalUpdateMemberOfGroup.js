import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";
import { TextField, Typography } from "@mui/material";

function ModalUpdateMemberOfGroup(props) {
  const closeModalUpdate = () => {
    props.closeModalUpdate();
  };
  return (
    <Modal isOpen={true} size="l">
      <ModalHeader>Cập nhật thông tin thành viên</ModalHeader>
      <ModalBody>
        <Typography
          variant="subtitle1"
          component="h2"
          style={{ margin: "0.6rem 0 0.6rem 0" }}
        >
          Họ và tên: <span style={{ color: "red" }}>(*)</span>
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nhập họ và tên"
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
            Số điện thoại: <span style={{ color: "red" }}>(*)</span>
          </Typography>
          <TextField
            id="outlined-basic"
            label="Nhập số điện thoại"
            variant="outlined"
            fullWidth
            size="small"
            name="name"
            //   onChange={(e) => {
            //     this.handleOnChangeValue(e, "name");
            //   }}
            //   value={}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <div>
          <CButton color="primary">Lưu</CButton>{" "}
          <CButton color="secondary" onClick={closeModalUpdate}>
            Đóng
          </CButton>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default ModalUpdateMemberOfGroup;
