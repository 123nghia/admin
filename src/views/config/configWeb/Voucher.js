import { Component } from "react";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { Button } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  CButton,
  CLabel,
  CTextarea,
  CSelect,
  CRow,
  CCol,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";

export default class Voucher extends Component {
  SaveAllConfigWeb(value) {
    this.props.SaveAllConfigWeb(value);
  }
  setStateByName = (name, value) => {
    this.props.setStateByName(name, value);
  };
  onChangeImage = (e, name, name_link, name_show) => {
    this.props.onChangeImage(e, name, name_link, name_show);
  };
  render() {
    return (
      <>
        <div class="text-center">
          <Button
            variant="contained"
            color="success"
            onClick={() => this.SaveAllConfigWeb("voucher")}
          >
            Lưu thay đổi
          </Button>
        </div>
        <div class="config-web__border-img">
          <div className="">
            <h1>Popup Thông Tin Voucher</h1>
          </div>
          <div className="relative">
            <img
              className="config-web__img-homepage"
              style={{ width: "100%", height: "auto" }}
              src="/assets/image/popup-thong-tin-voucher.png"
              alt="voucher"
            />
          <div className="field__editor field__editor-voucher--endow">
            <TextFieldGroup
                field="voucherEndow"
                label=""
                value={this.props?.voucherEndow}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("voucherEndow", e.target.value);
                }}
              />
              <CButton
                shape="rounded-pill" color="info" size="md">
              <FiEdit3 style={styles.icon} className="icon" name="cilPencil" />
            </CButton>
          </div>
          <div className="field__editor field__editor-voucher--expiry">
            <TextFieldGroup
                field="voucherExpiry"
                label=""
                value={this.props?.voucherExpiry}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("voucherExpiry", e.target.value);
                }}
              />
              <CButton
                shape="rounded-pill" color="info" size="md">
              <FiEdit3 style={styles.icon} className="icon" name="cilPencil" />
            </CButton>
          </div>
          <div className="field__editor field__editor-voucher--supplier">
            <TextFieldGroup
                field="voucherSupplier"
                label=""
                value={this.props?.voucherSupplier}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("voucherSupplier", e.target.value);
                }}
              />
              <CButton
                shape="rounded-pill" color="info" size="md">
              <FiEdit3 style={styles.icon} className="icon" name="cilPencil" />
            </CButton>
          </div>
          <div className="field__editor field__editor-voucher--condition">
            <TextFieldGroup
                field="voucherCondition"
                label=""
                value={this.props?.voucherCondition}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("voucherCondition", e.target.value);
                }}
              />
              <CButton
                shape="rounded-pill" color="info" size="md">
              <FiEdit3 style={styles.icon} className="icon" name="cilPencil" />
            </CButton>
          </div>
          <div className="field__editor field__editor-voucher--sendSMS">
            <TextFieldGroup
                field="sendSMS"
                label=""
                value={this.props?.sendSMS}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("sendSMS", e.target.value);
                }}
              />
              <CButton
                shape="rounded-pill" color="info" size="md">
              <FiEdit3 style={styles.icon} className="icon" name="cilPencil" />
            </CButton>
          </div>
          </div>         
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/hinh-anh-voucher.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="image1"
              label="Hình ảnh voucher (***px * ***px):"
              type={"file"}
              className="mt-5"
              onChange={(e) => {
                this.onChangeImage(
                  e,
                  "imageFormVoucher",
                  "imageFormVoucher_link",
                  "imageFormVoucher_show"
                );
              }}
              onClick={(e) => {
                e.target.value = null;
                this.setStateByName("imageFormVoucher_show", "");
              }}
            />
            <div class="text-center mb-5">
              <img
                alt=""
                style={{ width: "300px", marginBottom: 20 }}
                height="auto"
                src={this.props?.imageFormVoucher}
              />
            </div>
          </div>
        </div>
        {/* <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/get-voucher-success.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="receiveVoucherSuccess"
              label="Tiêu đề: Nhận voucher thành công"
              value={this.props?.receiveVoucherSuccess}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("receiveVoucherSuccess", e.target.value);
              }}
            />
          </div>
        </div>
 
     
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/gui-sms.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="sendSMS"
              label="Tiêu đề: Gửi SMS"
              value={this.props?.sendSMS}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("sendSMS", e.target.value);
              }}
            />
          </div>
        </div> */}
      </>
    );
  }
}

const styles = {
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
};
