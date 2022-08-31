import { Component } from "react";
import { CButton } from "@coreui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";

export default class GuideVoucher extends Component {
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
        <div class="mb-3 text-center">
          <CButton
            onClick={() => this.SaveAllConfigWeb("sologan")}
            style={styles.mgl5}
            outline
            color="success"
            size="md"
          >
            {/* <CIcon name="cilPencil" /> */}
            Lưu thay đổi
          </CButton>
        </div>
        <div style={{ width: "100%" }}>
          <div class="config-box-border">
            <img
              style={{ width: "100%", height: "auto" }}
              src="/assets/images/sologan.png"
              alt=""
            />
            <div style={{ width: "100%" }}>
              <TextFieldGroup
                field="sologan_1"
                label="Chữ 1"
                value={this.props?.sologan_1}
                placeholder={"Chào mừng bạn"}
                onChange={(e) => {
                  this.setStateByName("sologan_1", e.target.value);
                }}
              />
              <TextFieldGroup
                field="sologan_2"
                label="Chữ 2"
                value={this.props?.sologan_2}
                placeholder={"đến với"}
                onChange={(e) => {
                  this.setStateByName("sologan_2", e.target.value);
                }}
              />
              <TextFieldGroup
                field="sologan_3"
                label="Chữ 3"
                value={this.props?.sologan_3}
                placeholder={"shop !"}
                onChange={(e) => {
                  this.setStateByName("sologan_3", e.target.value);
                }}
              />
               <TextFieldGroup
                field="sologan_4"
                label="Chữ 4"
                value={this.props?.sologan_4}
                placeholder={"Mua như đại gia không cần nhìn giá."}
                onChange={(e) => {
                  this.setStateByName("sologan_4", e.target.value);
                }}
              />
              <div style={{ width: "100%" }}>
              <TextFieldGroup
                field="sologan_button"
                label="Nút"
                value={this.props?.sologan_button}
                placeholder={"Xem ngay"}
                onChange={(e) => {
                  this.setStateByName("sologan_button", e.target.value);
                }}
              />
            </div>
               <TextFieldGroup
                field="sologan_5"
                label="Chữ 5"
                value={this.props?.sologan_5}
                placeholder={"lorem ipsum dolor sit amet consectetur adipisicing elit."}
                onChange={(e) => {
                  this.setStateByName("sologan_5", e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
const styles = {
  mgl5: {
    marginLeft: "5px",
  },
};
