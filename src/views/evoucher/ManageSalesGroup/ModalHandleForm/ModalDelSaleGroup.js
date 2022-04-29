import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";

function ModalDelSaleGroup(props) {
  return (
    <Modal isOpen={true}>
      <ModalHeader>{`Xoá`}</ModalHeader>
      <ModalBody>
        <label htmlFor="tag">{`Bạn có chắc chắn xóa ?`}</label>
      </ModalBody>
      <ModalFooter>
        <CButton color="primary" onClick={props.handleDelGroupSale}>
          Xoá
        </CButton>{" "}
        <CButton color="secondary" onClick={props.closeModal}>
          Đóng
        </CButton>
      </ModalFooter>
    </Modal>
  );
}

export default ModalDelSaleGroup;
