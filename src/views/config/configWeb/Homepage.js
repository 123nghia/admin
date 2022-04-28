import { Component } from "react";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { Button } from "reactstrap";

export default class HomePage extends Component {
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
            onClick={() => this.SaveAllConfigWeb("homepage")}
          >
            Lưu thay đổi
          </Button>
        </div>
        <TextFieldGroup
          field="titlePen1"
          label="Heading 1:"
          value={this.props.titlePen1}
          onChange={(e) => {
            this.setStateByName("titlePen1", e.target.value );
          }}
        />
        <TextFieldGroup
          field="titlePen2"
          label="Heading 2: "
          value={this.props.titlePen2}
          onChange={(e) => {
            this.setStateByName( "titlePen2", e.target.value );
          }}
        />

        <TextFieldGroup
          field="sologan"
          label="Sologan:"
          value={this.props.sologan}
          placeholder={""}
          onChange={(e) => {
            this.setStateByName( "sologan", e.target.value );
          }}
        />

        <TextFieldGroup
          field="introduce"
          label="Giới thiệu:"
          value={this.props.introduce}
          placeholder={""}
          onChange={(e) => {
            this.setStateByName( "introduce", e.target.value );
          }}
        />

        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/huong-dan-chup-anh.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="image1"
              label="Hình ảnh hướng dẫn chụp ảnh (400px * 400px):"
              type={"file"}
              className="mt-5"
              onChange={(e) => {
                this.onChangeImage(
                  e,
                  "imagePhoto",
                  "imagePhoto_link",
                  "imagePhoto_show"
                );
              }}
              onClick={(e) => {
                e.target.value = null;
                this.setStateByName( "imagePhoto_show", "" );
              }}
            />
            <div class="text-center mb-5">
              <img
                alt=""
                style={{ width: "200px", marginBottom: 20 }}
                height="auto"
                src={this.props.imagePhoto}
              />
            </div>
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "300px", marginRight: "10px" }}
              src="/assets/image/tieu-de-huong-dan-chup-anh.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titlePhoto"
              label="Tiêu đề hình ảnh hướng dẫn chụp ảnh:"
              value={this.props.titlePhoto}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titlePhoto", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/tieu-de-nut-chup-anh.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleButtonPhoto"
              label="Tiêu đề nút chụp ảnh:"
              value={this.props.titleButtonPhoto}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleButtonPhoto", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/tieu-de-huong-dan-chon-anh.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleButtonChoose"
              label="Tiêu đề nút chọn ảnh:"
              value={this.props.titleButtonChoose}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleButtonChoose", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/tieu-de-goi-y-dang-nhap-1.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="buttonSuggestLogin1"
              label="Tiêu đề nút gợi ý đăng nhập - 1:"
              value={this.props.buttonSuggestLogin1}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "buttonSuggestLogin1", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/tieu-de-goi-y-dang-nhap-2.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="buttonSuggestLogin2"
              label="Tiêu đề nút gợi ý đăng nhập - 2:"
              value={this.props.buttonSuggestLogin2}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "buttonSuggestLogin2", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/chup-anh-buoc-1.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleStep1"
              label="Tiều đề : Bước 1 - Chụp ảnh:"
              value={this.props.titleStep1}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleStep1", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/chup-anh-buoc-2.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleStep2"
              label="Tiều đề : Bước 2 - Đã chụp - tải ảnh:"
              value={this.props.titleStep2}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleStep2", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/chup-anh-buoc-3.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleStep3"
              label="Tiều đề : Bước 3 - Kết quả:"
              value={this.props.titleStep3}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleStep3",e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/ket-qua-tong-quan.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleResultSkin"
              label="Tiều đề : Kết quả soi da:"
              value={this.props.titleResultSkin}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleResultSkin", e.target.value);
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/ket-qua-tong-quan-2.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="textResultSkin"
              label="Tiêu đề phụ : Kết quả soi da:"
              value={this.props.textResultSkin}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName("textResultSkin", e.target.value);
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/ket-qua-chuyen-sau.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="titleResultDepthSkin"
              label="Tiều đề : Kết quả chuyên sâu:"
              value={this.props.titleResultDepthSkin}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "titleResultDepthSkin", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/ket-qua-chuyen-sau2.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="textResultDepthSkin"
              label="Tiêu đề phụ : Kết quả chuyên sâu:"
              value={this.props.textResultDepthSkin}
              placeholder={""}
              onChange={(e) => {
                this.setStateByName( "textResultDepthSkin", e.target.value );
              }}
            />
          </div>
        </div>
        <div class="flex-a-center config-box-border">
          <div>
            <img
              style={{ maxWidth: "150px", marginRight: "10px" }}
              src="/assets/image/dang-nhap-xem-ket-qua.png"
              alt="img"
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="loginViewResult1"
              label="Gợi ý đăng nhập: Vị trí 1:"
              value={this.props.loginViewResult1}
              placeholder={"Vui lòng"}
              onChange={(e) => {
                this.setStateByName( "loginViewResult1", e.target.value );
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="loginViewResult2"
              label="Gợi ý đăng nhập: Vị trí 2:"
              value={this.props.loginViewResult2}
              placeholder={"Để nhận ngay"}
              onChange={(e) => {
                this.setStateByName( "loginViewResult2", e.target.value );
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="loginViewResult3"
              label="Gợi ý đăng nhập: Vị trí 3:"
              value={this.props.loginViewResult3}
              placeholder={"E-voucher"}
              onChange={(e) => {
                this.setStateByName( "loginViewResult3", e.target.value );
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <TextFieldGroup
              field="loginViewResult4"
              label="Gợi ý đăng nhập: Vị trí 4:"
              value={this.props.loginViewResult4}
              placeholder={"giảm giá 1.000.000 VND"}
              onChange={(e) => {
                this.setStateByName("loginViewResult4",e.target.value );
              }}
            />
          </div>
        </div>
      </>
    );
  }
}
