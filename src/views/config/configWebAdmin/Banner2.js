import { Component } from "react";
import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import axios from "axios";
import TextFieldGroup from "../../../views/Common/TextFieldGroup";
import { CButton } from "@coreui/react";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import Swal from "sweetalert2";
import Constants from "../../../contants/contants";
import API_CONNECT from "../../../functions/callAPI";
import { CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";

export default class Banner1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalBanner : false,
      company_id: JSON.parse(localStorage.getItem("user")).company_id
      ? JSON.parse(localStorage.getItem("user")).company_id
      : "-1",
 
     }
  }
  onChangeImage = (e, value, valueLink, valueShow) => {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
  };
  SaveAllConfigWeb(value) {
    this.props.SaveAllConfigWeb(value);
  }
  getDataConfigWeb() {
    this.props.getDataConfigWeb();
  }
  setStateByName = (name, value) => {
    this.props.setStateByName(name, value);
  };
  openFormAddCategories = (value) => {
    this.props.openFormAddCategories(value);
  };
  openFormEditCategories = (value, item, i) => {
    this.props.openFormEditCategories(value, item, i);
  };
  deleteCategories = (value, i) => {
    this.props.deleteCategories(value, i);
  };
  saveAddCategories = (value, i) => {
    this.props.saveAddCategories(value, i);
  };
  saveEditCategories = (value, i) => {
    this.props.saveEditCategories(value, i);
  };
  async postImage(link) {
    var newImage = "";
    if (link && link !== "") {
      const form = new FormData();

      form.append("image", link);

      await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
        (res) => {}
      );

      newImage = link.name;
      return newImage;
    } else {
      return newImage;
    }
  }
  async onUpdate() {
    const { dataConfigWeb } = this.state;

    const newComany_id = this.state.company_id;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + "api/config/update";
    await axios.post(url, {
      value: JSON.stringify(dataConfigWeb),
      dataType: "1",
      type: "system",
      company_id: newComany_id,
      id: this.state.idUpdate,
    });
  }
 
  render() {
    return (
      <>
      <div class="text-center">
          <CButton
            onClick={() => this.SaveAllConfigWeb("contentCategoryBanner")}
            style={styles.mgl5}
            outline
            color="success"
            size="md"
          >
            {/* <CIcon name="cilPencil" /> */}
            Lưu thay đổi
          </CButton>
        </div>
        <CRow className="mt-3">
          <CCol xs="6" sm="6" md="6">
          <TextFieldGroup
                field="titleSectionBannerBrand"
                label="Tiêu đề"
                value={this.props.titleSectionBannerBrand}
                placeholder={"DỊCH VỤ CỦA TIKICARE"}
                onChange={(e) => {
                  this.setStateByName("titleSectionBannerBrand", e.target.value );
              
                }}
              />
          </CCol>
          <CCol xs="6" sm="6" md="6">
          <TextFieldGroup
                field="contentSectionBannerBrand"
                label="Mô tả"
                value={this.props.contentSectionBannerBrand}
                placeholder={"lorem ipsum dolor sit amet consectetur adipisicing elit."}
                onChange={(e) => {
                  this.setStateByName("contentSectionBannerBrand", e.target.value );
                }}
              />
          </CCol>

        </CRow>
        
             
        <div class="flex-end">
          <CButton
            color="info"
            style={{ marginBottom: "10px" }}
            size="md"
            className="btn-main"
            onClick={() => this.openFormAddCategories("2")}
          >
            <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
            <p style={{ margin: "auto 0" }}>Thêm mới</p>
          </CButton>
        </div>
        <div className="table__overflow">
          <table
            ble
            className="table table-hover mt-3 table-outline mb-0 d-none d-sm-table"
          >
            <thead className="thead-light">
              <tr>
                <th className="text-center">STT.</th>
                <th className="text-center">Tiêu đề</th>
                <th className="text-center">Hình ảnh</th>

                <th className="text-center">Nội dung</th>
                <th className="text-center">Link tham chiếu</th>
                <th className="text-center">#</th>
              </tr>
            </thead>
            <tbody>
              {this.props.bannerCategories
                ? this.props.bannerCategories.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td className="text-center">{i + 1}</td>
                        <td className="text-center">{item.title}</td>

                        <td className="text-center">
                          <img
                            style={{ maxWidth: "300px" }}
                            src={item.image}
                            alt=""
                          />
                        </td>
                        <td className="text-center">{item.content}</td>

                        <td className="text-center">{item.href}</td>
                        <td className="text-center">
                          <div className="flex">
                            <CButton
                              shape="rounded-pill"
                              variant="ghost"
                              color="info"
                              style={styles.mgl5}
                              size="md"
                              onClick={() =>
                                this.openFormEditCategories("2", item, i)
                              }
                            >
                              <FiEdit3
                                style={styles.icon}
                                className="icon"
                                name="cilPencil"
                              />
                            </CButton>{" "}
                            <CButton
                              shape="rounded-pill"
                              variant="ghost"
                              color="danger"
                              style={styles.mgl5}
                              onClick={() => this.deleteCategories("2", i)}
                            >
                              <BsTrash
                                style={styles.icon}
                                className="icon"
                                name="cilTrash"
                              />
                            </CButton>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
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
