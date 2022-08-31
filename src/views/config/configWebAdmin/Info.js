import { Component } from "react";
import { CButton } from "@coreui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";

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
            onClick={() => this.SaveAllConfigWeb("info")}
            style={styles.mgl5}
            outline
            color="success"
            size="md"
          >
            {/* <CIcon name="cilPencil" /> */}
            Lưu thay đổi
          </CButton>
        </div>
        <CRow>
                <CCol xs="6" sm="6" md="6" lg="6">
                <TextFieldGroup
          field="hotlineCompany"
          label="Số điện thoại công ty"
          value={this.props?.hotlineCompany}
        
          onChange={(e) => {
            this.setStateByName("hotlineCompany", e.target.value);
          }}
        />
                </CCol>
                <CCol xs="6" sm="6" md="6" lg="6">
                <TextFieldGroup
          field="emailCompany"
          label="Email công ty"
          value={this.props?.emailCompany}
        
          onChange={(e) => {
            this.setStateByName("emailCompany", e.target.value);
          }}
        />
                </CCol>

            </CRow>
        
        
        
      </>
    );
  }
}
const styles = {
  mgl5: {
    marginLeft: "5px",
  },
};
