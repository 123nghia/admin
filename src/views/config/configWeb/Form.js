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
  render() {
    return (
      <>
        <div class="text-center">
          <Button
            variant="contained"
            color="success"
            onClick={() => this.SaveAllConfigWeb("form")}
          >
            Lưu thay đổi
          </Button>
        </div>
        <div class="config-web__border-img">
          <div className="">
            <h1>Form - Nhận voucher</h1>
          </div>
          <div className="relative">
            <img
              className="config-web__img-homepage"
              style={{ width: "100%", height: "auto" }}
              src="/assets/image/form-nhan-voucher.png"
              alt="voucher"
            />
            <div className="field__editor field__editor-button--get-voucher">
              <TextFieldGroup
                field="btn_get_voucher"
                value={this.props?.btn_get_voucher}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("btn_get_voucher", e.target.value);
                }}
              />
            </div>

            <div className="field__editor field__editor-form--title-get-voucher">
              <TextFieldGroup
                field="title_get_voucher"
                label=""
                value={this.props?.title_get_voucher}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("title_get_voucher", e.target.value);
                }}
              />
            </div>
            <div className="field__editor field__editor-form--text-sales">
              <TextFieldGroup
                field="textSales"
                label=""
                value={this.props?.textSales}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("textSales", e.target.value);
                }}
              />
            </div>
            <div className="field__editor field__editor-form--title-login-view-voucher">
              <TextFieldGroup
                field="loginWatchVoucher"
                label=""
                value={this.props?.loginWatchVoucher}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName("loginWatchVoucher", e.target.value);
                }}
              />
            </div>

          </div>
        </div>
        <div class="config-web__border-img">
          <div className="">
            <h1>Form - Đăng ký nhận voucher</h1>
          </div>
          <div className="relative">
            <img
              className="config-web__img-homepage"
              style={{ width: "100%", height: "auto" }}
              src="/assets/image/form-dang-ky-nhan-voucher.png"
              alt="voucher"
            />
            <div className="field__editor field__editor-button--register-get-voucher">
              <TextFieldGroup
                field="btn_register_get_voucher"
                label=""
                value={this.props?.btn_register_get_voucher}
                placeholder={""}
                onChange={(e) => {
                  this.setStateByName(
                    "btn_register_get_voucher",
                    e.target.value
                  );
                }}
              />
            </div>
            <div className="field__editor field__editor-button--title-register-get-voucher">

            <TextFieldGroup
              field="registerGetVoucher"
              label=""
              value={this.props?.registerGetVoucher}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("registerGetVoucher", e.target.value);
              }}
            />
            </div>

          </div>
        </div>
        {/* <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/tieu-de-dang-nhap.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleLogin"
              label="Tiêu đề: Form đăng nhập"
              value={this.props?.titleLogin}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleLogin", e.target.value );
              }}
            />
          </div>
        </div> */}
        {/* <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/nut-dang-nhap.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="btn_login"
              label="Tiêu đề: Nút đăng nhập"
              value={this.props?.btn_login}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "btn_login", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/tieu-de-cap-nhap.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleUpdate"
              label="Tiêu đề: Form cập nhập"
              value={this.props?.titleUpdate}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleUpdate", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/nut-cap-nhap.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="btn_update"
              label="Tiêu đề: Nút cập nhập"
              value={this.props?.btn_update}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "btn_update", e.target.value );
              }}
            />
          </div>
        </div> */}
      </>
    );
  }
}
