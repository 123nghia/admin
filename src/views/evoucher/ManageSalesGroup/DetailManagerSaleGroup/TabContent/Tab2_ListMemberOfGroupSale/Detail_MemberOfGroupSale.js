import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";

function ModalViewGroupSale(props) {
  const closeModal = () => {
    props.closeModal();
  };
  return (
    <div>
      <Modal isOpen={true} size="l">
        <ModalHeader>Xem thống kê</ModalHeader>
        <ModalBody>
          <div class="container">
            <div class="row g-1">
              <div class="col-4">
                <div class="statistical statistical--total-voucher">
                  <div className="statistical__header statistical__header--total-voucher">
                    Tổng voucher đã phát
                  </div>
                  <div className="statistical__body statistical__body--total-voucher">
                    10.000
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="statistical statistical--total-customer">
                  <div className="statistical__header statistical__header--total-customer">
                    Số khách hàng check in
                  </div>
                  <div className="statistical__body statistical__body--total-customer">
                    3.000
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="statistical statistical--percent-customer">
                  <div className="statistical__header statistical__header--percent-customer">
                    Tỉ lệ check in
                  </div>
                  <div className="statistical__body statistical__body--percent-customer">
                    30%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div>
            <CButton color="secondary" onClick={closeModal}>
              Đóng
            </CButton>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalViewGroupSale;
