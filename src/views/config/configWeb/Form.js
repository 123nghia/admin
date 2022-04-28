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
        <div class="flex-a-center config-box-border">
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
        </div>
        <div class="flex-a-center config-box-border">
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
        </div>
      </>
    );
  }
}
