import { Component } from "react";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { Button } from "reactstrap";

export default class Voucher extends Component {
  SaveAllConfigWeb(value) {
    this.props.SaveAllConfigWeb(value);
  }
  setStateByName = (name, value) => {
    this.props.setStateByName(name, value);
  };
  onChangeImage=(e, name, name_link, name_show) =>{
    this.props.onChangeImage(e, name, name_link, name_show);
  }
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
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/form-voucher.png"
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
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/receive-voucher.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="receiveVoucher"
              label="Tiêu đề: Thông báo nhận voucher"
              value={this.props?.receiveVoucher}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("receiveVoucher", e.target.value);
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/text-sales.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="textSales"
              label="Tiêu đề: Khuyến mãi"
              value={this.props?.textSales}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("textSales", e.target.value);
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
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
              src="/assets/image/dang-nhap-xem-voucher.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="loginWatchVoucher"
              label="Tiêu đề: Đăng nhập xem voucher"
              value={this.props?.loginWatchVoucher}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("loginWatchVoucher", e.target.value);
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/dang-ky-nhan-voucher.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="registerGetVoucher"
              label="Tiêu đề: Đăng ký nhận voucher"
              value={this.props?.registerGetVoucher}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("registerGetVoucher", e.target.value);
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
        </div>
      </>
    );
  }
}
