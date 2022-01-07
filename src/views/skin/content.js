import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";

import {
  CLabel,
  CTooltip,
  CSelect,
  CButton,
  CTextarea,
  CRow,
  CCol,
} from "@coreui/react";
import CreatableSelect from "react-select/creatable";
import TextFieldGroup from "../../views/Common/TextFieldGroup";
import CIcon from "@coreui/icons-react";
import "moment-timezone";
import "react-datepicker/dist/react-datepicker.css";
import Constants from "./../../contants/contants";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as actionProductSuggest from "../../redux/actionsForder/productSuggest";

let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      modalCom: false,
      updated: "",
      dataApi: [],
      delete: null,
      hidden: true,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      role: localStorage.getItem("role"),
      type: localStorage.getItem("type"),
      company_id: localStorage.getItem("user"),
      current_slug: "",
      companyID: "",
      arrTotalPackage: [],
      isChange: true,
      isChangeSlug: true,
      currentPassword: "",
      isLoading: false,
      isDisable: true,
      Email: "",
      Name: "",
      Phone: "",
      Address: "",
      UserName: "",
      Message_Code: "",
      productsSuggest: ["k5", "k6", "k7", "k8", "k9"],
      listK5: [],
      listK6: [],
      listK7: [],
      listK8: [],
      listK9: [],
      modalEdit : null,
      modal: null,
      statusModal : true,
      // titleModal : "",
      nameProductsSuggest : null,
      titleProductsSuggest : null,
      valueModal : {
        title : "",
        content : "",
        level : "",
        priorites : "",
        type : "",
        groupProduct : "",
        icon :"",
        status: ""
      },
      // image :"",
      link  :"",
      // image_show : "",
      // image_link : "",

    };
  }
  async componentDidMount() {
    this.getProductsSuggestRequest("0");
    this.getData();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to == window.location.hash) {
        if (arr[i].hidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }
  getProductsSuggestRequest = async (number) => {
    let list5 = null;
    let list6 = null;
    let list7 = null;
    let list8 = null;
    let list9 = null;
    list5 = await axios.get(
      "https://api-pensilia.applamdep.com/api/paramenterRecomed/getAll",
      {
        params: {
          typeFilter: number,
          groupProduct: "K5",
        },
      }
    );
    list6 = await axios.get(
      "https://api-pensilia.applamdep.com/api/paramenterRecomed/getAll",
      {
        params: {
          typeFilter: number,
          groupProduct: "K6",
        },
      }
    );
    list7 = await axios.get(
      "https://api-pensilia.applamdep.com/api/paramenterRecomed/getAll",
      {
        params: {
          typeFilter: number,
          groupProduct: "K7",
        },
      }
    );
    list8 = await axios.get(
      "https://api-pensilia.applamdep.com/api/paramenterRecomed/getAll",
      {
        params: {
          typeFilter: number,
          groupProduct: "K8",
        },
      }
    );
    list9 = await axios.get(
      "https://api-pensilia.applamdep.com/api/paramenterRecomed/getAll",
      {
        params: {
          typeFilter: number,
          groupProduct: "K9",
        },
      }
    );
    this.setState({
      listK5: list5.data.data,
      listK6: list6.data.data,
      listK7: list7.data.data,
      listK8: list8.data.data,
      listK9: list9.data.data,
    });
  };
  getData = async () => {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_GET_USER_BYID,
      method: "POST",
      headers: this.state.token,
    });
    let val = res.data.data;

    this.setState({
      dataApi: val,
      data: val,
      currentPassword: val.Password,
      isLoading: false,
      current_slug:
        val.Company_Id == null || val.Company_Id == undefined
          ? null
          : val.Company_Id.Slug,
      companyID:
        val.Company_Id == null || val.Company_Id == undefined
          ? null
          : val.Company_Id._id,
      Email: val.Email,
      Name: val.Name,
      Phone: val.Phone,
      Address: val.Address,
      UserName: val.UserName,
      Message_Code: val.Message_Code,
      isDisable: true,
    });
  };

  onChange(key, val) {
    this.setState({ [key]: val });
    
  }
  onChangeModal = (e) => {
  
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value,
    });
  
    
  };
  openUpdate(name_link) {
    this.setState({
      [name_link]: !this.state[name_link],
    });
  }

  getPackageName = async (package_id) => {
    const resPackage = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_DATA_PACKAGE,
      method: "POST",
      data: {
        package_id: package_id,
      },
    });
    return resPackage.data.data;
  };

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async updatePassword(id, password) {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_UPDATE_PASSWORD,
      method: "POST",
      data: {
        id: id,
        new_password: password,
      },
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChange: true });
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }

  async updateSlug() {
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_SLUG,
      method: "POST",
      data: {
        id: this.state.companyID,
        Slug: this.state.current_slug,
      },
    });

    if (res.data.is_success == true) {
      this.getData();
      this.setState({ isChangeSlug: true });
    } else {
      alert(res.data.message);
      this.setState({ isChangeSlug: false });
    }
  }

  async updateCompany() {
    const { Email, Name, Phone, Address, UserName, data, Message_Code } =
      this.state;

    if (
      Name == null ||
      Name == "" ||
      Phone == null ||
      Phone == "" ||
      UserName == null ||
      UserName == ""
    ) {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return;
    }

    const body = {
      isHash: false,
      Name: Name == "" ? data.Name : Name,
      Email: Email == "" ? data.Email : Email,
      Phone: Phone == "" ? data.Phone : Phone,
      Address: Address == "" ? data.Address : Address,
      UserName: UserName == "" ? data.UserName : UserName,
      Message_Code:
        Message_Code == "" || Message_Code == null
          ? data.Message_Code
          : Message_Code,
      Password: data.Password,
      Status: data.Status,
      id: data._id,
    };

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_UPDATE_USER_COMPANY,
      method: "POST",
      data: body,
    });

    if (res.data.is_success == true) {
      this.getData();
    } else {
      alert(res.data.message);
      this.setState({ isLoading: false });
    }
  }
  onChangeImage(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ image_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ image: e.target.result, image_show: e.target.result });
    };
    console.log(this.state.image,this.state.image_show)
  }
  openFormAdd = (item) => {
    
    let x = (
      <Modal
        size="xl"
        isOpen={this.state.statusModal}
        className={this.props.className}
      >
        <ModalHeader>
         Tạo mới
        </ModalHeader>
        <ModalBody>
          <TextFieldGroup
            field="nameProductsSuggest"
            label="Tên sản phẩm"
            value={this.state.nameProductsSuggest}
            placeholder={"Tên sản phẩm"}
            onChange={(e)=> this.setState({nameProductsSuggest : e.target.value})}
          />
          <TextFieldGroup
            field="image"
            label="Ảnh sản phẩm"
            type={"file"}
            value={this.state.image}
            onChange={(e) => {
              this.onChangeImage(e);
            }}
            onClick={(e) => {
              e.target.value = null;
              this.setState({ image_show: "" });
            }}
          />
          {this.state.image == "" ? (
            ""
          ) : (
            <img
            alt =""
              width="250"
              height="300"
              src={
                this.state.image_show == ""
                  ? `https://api-soida.applamdep.com/public/image_plugin/${this.state.image_link}`
                  : this.state.image
              }
              style={{ marginBottom: 20 }}
            />
          )}

          <TextFieldGroup
            field="titleProductsSuggest"
            label="Tiêu đề"
            value={this.state.titleProductsSuggest}
            placeholder={"Tiêu đề"}
            onChange={(e) => this.setState({titleProductsSuggest : e.target.value})}
          />

          <label className="control-label">Mô tả</label>
          <CTextarea
            name="descriptionProductsSuggest"
            rows="4"
            value={this.state.descriptionProductsSuggest}
            onChange={(e) => {
              this.setState({ "descriptionProductsSuggest": e.target.value });
            }}
            placeholder="Mô tả"
          />

          <TextFieldGroup
            field="linkProductsSuggest"
            label="Đường dẫn chi tiết sản phẩm"
            value={this.state.linkProductsSuggest}
            placeholder={"Đường dẫn chi tiết sản phẩm"}
            onChange={(e) => this.onChange("linkProductsSuggest", e.target.value)}
          />
          <CLabel>Nhãn hiệu:</CLabel>
          <CreatableSelect
            isClearable
            onChange={this.handleChange}

            // onInputChange={this.handleInputChange}
          />
          {/* <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Mức độ:</CLabel>
                {
                  arrLevel != undefined ? (
                    <CSelect onChange={async e => { this.changeLevel(e) }} custom size="sm" name="selectSm" id="SelectLm">
                      {
                        arrLevel.map((item, i) => {
                          
                            return (
                              <option selected key={i} value={item}>
                                {item == "1" ? "Nhẹ" : item == "2" ? "Trung" : "Nặng"}
                              </option>
                            );
                          })
                      }
                    </CSelect>
                  ) : null
                }
              </div> */}

          <TextFieldGroup
            field="price"
            label="Giá"
            type={"number"}
            value={this.state.price}
            placeholder={"Giá"}
            onChange={(e) => this.onChange("price", e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <CButton
            color="primary"
            onClick={()=>{this.saveAdd(item)}}
            disabled={this.state.isLoading}
          >
            Lưu
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={()=>{this.closeAdd()}}
          >
            Đóng
          </CButton>
        </ModalFooter>
      </Modal>
    );
    this.setState({ modal: x });
  };
  async openFormEdit(item){


    const { Title } =  item;
     
    let x = (
      <Modal
        size="xl"
        isOpen={this.state.statusModal}
        className={this.props.className}
      >
        <ModalHeader>
         Chỉnh sửa
        </ModalHeader>
        <ModalBody>
          <TextFieldGroup
            field="nameProductsSuggest"
            label="Tên sản phẩm"
            value={this.state.nameProductsSuggest}
            placeholder={"Tên sản phẩm"}
            onChange={(e) =>this.onChangeModal(e)}
          />
          <TextFieldGroup
            field="image"
            label="Ảnh sản phẩm"
            type={"file"}
            value={this.state.image}
            onChange={(e) => {
              this.onChangeImage(e);
            }}
            onClick={(e) => {
              e.target.value = null;
              this.setState({ image_show: "" });
            }}
          />
          {this.state.image === "" ? (
            ""
          ) : (
            <img
            alt =""
              width="250"
              height="300"
              src={
                this.state.image_show === ""
                  ? `https://api-soida.applamdep.com/public/image_plugin/${this.state.image_link}`
                  : this.state.image
              }
              style={{ marginBottom: 20 }}
            />
          )}

          <TextFieldGroup
            field="titleProductsSuggest"
            
            label="Tiêu đề"
            value={this.state.titleProductsSuggest}
            placeholder={"Tiêu đề"}
            onChange={(e) =>this.onChangeModal(e)}

            />

          <label className="control-label">Mô tả</label>
          <CTextarea
            name="descriptionProductsSuggest"
            rows="4"
            value={this.state.descriptionProductsSuggest}
            onChange={(e) => {
              this.setState({ descriptionProductsSuggest: e.target.value });
            }}
            placeholder="Mô tả"
          />

          <TextFieldGroup
            field="linkProductsSuggest"
            label="Đường dẫn chi tiết sản phẩm"
            value={this.state.linkProductsSuggest}
            placeholder={"Đường dẫn chi tiết sản phẩm"}
            onChange={(e) => this.onChange("linkProductsSuggest", e.target.value)}
          />
          <CLabel>Nhãn hiệu:</CLabel>
          <CreatableSelect
            isClearable
            onChange={this.handleChange}

            // onInputChange={this.handleInputChange}
          />
          {/* <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Mức độ:</CLabel>
                {
                  arrLevel != undefined ? (
                    <CSelect onChange={async e => { this.changeLevel(e) }} custom size="sm" name="selectSm" id="SelectLm">
                      {
                        arrLevel.map((item, i) => {
                          
                            return (
                              <option selected key={i} value={item}>
                                {item == "1" ? "Nhẹ" : item == "2" ? "Trung" : "Nặng"}
                              </option>
                            );
                          })
                      }
                    </CSelect>
                  ) : null
                }
              </div> */}

          <TextFieldGroup
            field="price"
            label="Giá"
            type={"number"}
            value={this.state.price}
            placeholder={"Giá"}
            onChange={(e) => this.onChange("price", e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <CButton
            color="primary"
            onClick={()=>{this.saveEdit(item)}}
            disabled={this.state.isLoading}
          >
            Lưu
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={()=>{this.closeFormEdit()}}
          >
            Đóng
          </CButton>
        </ModalFooter>
      </Modal>
    );
    
    this.setState({ modalEdit: x });
    
  };
  closeFormEdit=()=>{
    this.setState({ modalEdit: null });

  }
  
  async saveAdd(item){
    const {
      nameProductsSuggest,
      image_show,
      titleProductsSuggest,
      descriptionProductsSuggest,
      linkProductsSuggest
    } = this.state;
    await axios.post(
      "http://192.168.1.3:3012/api/paramenterRecomed/add",{
        "title": titleProductsSuggest,
        "content": descriptionProductsSuggest,
        "level": "1",
        "priorites" : "1",
        "type": "0",
        "groupProduct": item.GroupProduct,
        "icon":"",
        "status":"1"
      }
    ).then((res)=>{
      console.log(res)
    });
  }
  async saveEdit(item){
    const {
      nameProductsSuggest,
      image_show,
      titleProductsSuggest,
      descriptionProductsSuggest,
      linkProductsSuggest
    } = this.state
    await axios.post(
      "https://api-pensilia.applamdep.com/api/paramenterRecomed/add",{
        data: {
          title : titleProductsSuggest,
          content: descriptionProductsSuggest,
          level: "1",
          priorites: "1",
          type: "0",
          groupProduct: item.groupProduct,
          icon:image_show,
        }
      }
    ).then((res)=>{
      console.log(res)
    });
  }
  closeAdd=()=>{
    this.setState({ modal: null });
  }
  closeFormAdd = () => {
    this.setState({ modalCom: false });
  };
  
  renderProductsSuggest(products,idSelect,idSelect2,name,activeCollapse){
    if(products){
      let x = products.map((item,i) => {
        return (
                  <tbody>
                    <td
                      colSpan="10"
                      hidden={this.state.hidden}
                      className="text-center"
                    >
                      Không tìm thấy dữ liệu
                    </td>
                                     
                            <tr key={i}>
                              <td className="text-center">
                                {i + 1}
                              </td>
                              <td className="text-center">
                                {item.Title}
                                 
                              </td>
                              {/* <td className="text-center">{item.name}</td> */}
                              <td className="text-center">
                               
                                  <img
                                    src={`${item.Icon}`}
                                    width={"60px"}
                                    height={"60px"}
                                    alt=""
                                  />
                              
                                
                              </td>
  
                              <td className="text-center">
                                <a target="_blank" href={item.Icon}>
                                  Xem chi tiết sản phẩm
                                </a>
                              </td>
                              {/* <td className="text-center">
                            <a href={item.linkdetail} target="_blank">{item.linkdetail}</a>
                          </td> */}
                              <td className="text-center">
                                {item.brand_id == null
                                  ? ""
                                  : item.brand_id.name}
                              </td>
                              {/* <td className="text-center">
                                {<img src={`https://api-soida.applamdep.com/public/image_brand/${item.brand_id.image_link}`} width={"60px"} height={"60px"} />}
                              </td> */}
                              {/* <td className="text-center">
                                {item.type_product_id.Name}
                              </td>
                              <td className="text-center">
                                {item.type_sdk_id.Name}
                              </td> */}
                              <td className="text-center">
                                {item.Level}
                              </td>
                              {/* <td className="text-center">
                                {Number(item.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} đ
                              </td> */}
                              <td className="">
                                <CButton
                                  style={styles.mgl5}
                                  outline
                                  color="primary"
                                  size="sm"
                                  onClick={() =>
                                     this.openFormAdd(item)
                                  }
                                >
                                  {/* <CIcon name="cilPencil" /> */}
                                  Thêm mới
                                </CButton>{" "}
                                <CButton
                                  outline
                                  color="success"
                                  size="sm"
                                  onClick={() => this.openFormEdit(item)}
                                >
                                  {/* <CIcon name="cilTrash" /> */}
                                  Chỉnh sửa
                                </CButton>
                              </td>
                            </tr>
                  </tbody>         
                          
                )
      })         
      let idSelectActive = `#${idSelect2}`     
      
      let render = (
        <div class="accordion-item">
            <h2 class="accordion-header" id={idSelect}>
            {
              activeCollapse ? <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={idSelectActive}
                aria-expanded="true"
                aria-controls={idSelect2}
              >
                {name}
              </button> : <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={idSelectActive}
                aria-expanded="true"
                aria-controls={idSelect2}
              >
                {name}
              </button>
            }
              
            </h2>
            {
              activeCollapse ? <div
              id={idSelect2}
              class="accordion-collapse collapse show"
              aria-labelledby={idSelect}
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <table
                  ble
                  className="table table-hover table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      {/* <th className="text-center">Tên</th> */}
                      <th className="text-center">Tiêu đề</th>
                      <th className="text-center">Ảnh</th>
  
                      <th className="text-center">Chi tiết</th>
                      <th className="text-center">Thương hiệu</th>
                      {/* <th className="text-center">Ảnh thương hiệu</th> */}
                      {/* <th className="text-center">Loại</th>
                      <th className="text-center">Loại SDK </th> */}
                      <th className="text-center">Mức độ</th>
                      {/* <th className="text-center">Giá</th> */}
                      <th className="text-center">#</th>
                    </tr>
                  </thead>
                    {x}
                  </table>
              </div>
            </div> : 
            <div
              id={idSelect2}
              class="accordion-collapse collapse"
              aria-labelledby={idSelect}
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <table
                  ble
                  className="table table-hover table-outline mb-0 d-none d-sm-table"
                >
                  <thead className="thead-light">
                    <tr>
                      <th className="text-center">STT.</th>
                      {/* <th className="text-center">Tên</th> */}
                      <th className="text-center">Tiêu đề</th>
                      <th className="text-center">Ảnh</th>
  
                      <th className="text-center">Chi tiết</th>
                      <th className="text-center">Thương hiệu</th>
                      {/* <th className="text-center">Ảnh thương hiệu</th> */}
                      {/* <th className="text-center">Loại</th>
                      <th className="text-center">Loại SDK </th> */}
                      <th className="text-center">Mức độ</th>
                      {/* <th className="text-center">Giá</th> */}
                      <th className="text-center">#</th>
                    </tr>
                  </thead>
                    {x}
                  </table>
              </div>
            </div>
            }
            
        </div>
      )
      return render
    } 
  }
  render() {
    
    const {
      data,
      current_slug,
      isChange,
      currentPassword,
      isChangeSlug,
      type,
      isDisable,
      Email,
      Name,
      Phone,
      Address,
      UserName,
      Message_Code,
    } = this.state;

    
   
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>Cấu hình chi tiết</CardHeader>
                <CardBody>
                  <CRow>
                    <CCol sm="12" lg="12">
                      <CRow>
                        <CCol sm="12" lg="10">
                          <CLabel>
                            <strong>
                              DANH SÁCH NHÓM SẢN PHẨM THEO PHÂN LOẠI
                            </strong>
                          </CLabel>
                        </CCol>
                        {type == "0" || type == "1" ? (
                          ""
                        ) : (
                          <CCol sm="12" lg="2">
                            <CTooltip content="Xem chi tiết đơn hàng">
                              {isDisable ? (
                                <CButton
                                  outline
                                  color="info"
                                  size="xm"
                                  onClick={async (e) => {
                                    this.setState({ isDisable: !isDisable });
                                  }}
                                >
                                  <CIcon name="cil-pencil" /> Cập nhật
                                </CButton>
                              ) : (
                                <CButton
                                  outline
                                  color="info"
                                  size="sm"
                                  onClick={async (e) => {
                                    this.updateCompany();
                                  }}
                                >
                                  <CIcon name="cil-pencil" /> Xác nhận cập nhật
                                </CButton>
                              )}
                            </CTooltip>
                          </CCol>
                        )}
                      </CRow>
                      <CRow>
                        <CCol sm="12" lg="12"></CCol>
                      </CRow>
                    </CCol>
                  </CRow>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div class="accordion" id="accordionExample">
            {this.renderProductsSuggest(this.state.listK5,"headingOne","collapser1","Hỗ trợ giảm lão hóa da",true)}
            {this.renderProductsSuggest(this.state.listK6,"headingTwo","collapser2","Hỗ trợ điều trị mụn",false)}
            {this.renderProductsSuggest(this.state.listK7,"headingThree","collapser3","Hỗ trợ giảm quầng thâm mắt",false)}
            {this.renderProductsSuggest(this.state.listK8,"headingFour","collapser4","Hỗ trợ giảm lỗ chân lông",false)}
            {this.renderProductsSuggest(this.state.listK9,"headingFive","collapser5","Hỗ trợ giảm thâm nám da",false)}
                                  
          </div>
          {this.state.modal}
          {this.state.modalEdit}

          {/* <Modal
            size="xl"
            isOpen={this.state.modalCom}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.action == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên sản phẩm"
                value={this.state.name}
                placeholder={"Tên sản phẩm"}
                onChange={(e) => this.onChange("name", e.target.value)}
              />

              <TextFieldGroup
                field="image"
                label="Ảnh sản phẩm"
                type={"file"}
                onChange={(e) => {
                  this.onChangeImage(e);
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ image_show: "" });
                }}
              />
              {this.state.image == "" ? (
                ""
              ) : (
                <img
                  width="250"
                  height="300"
                  src={
                    this.state.image_show == ""
                      ? `https://api-soida.applamdep.com/public/image_plugin/${this.state.image_link}`
                      : this.state.image
                  }
                  style={{ marginBottom: 20 }}
                />
              )}

              <TextFieldGroup
                field="title"
                label="Tiêu đề"
                value={this.state.title}
                placeholder={"Tiêu đề"}
                onChange={(e) => this.onChange("title", e.target.value)}
              />

              <label className="control-label">Mô tả</label>
              <CTextarea
                name="description"
                rows="4"
                value={this.state.description}
                onChange={(e) => {
                  this.setState({ description: e.target.value });
                }}
                placeholder="Mô tả"
              />

              <TextFieldGroup
                field="linkdetail"
                label="Đường dẫn chi tiết sản phẩm"
                value={this.state.linkdetail}
                placeholder={"Đường dẫn chi tiết sản phẩm"}
                onChange={(e) => this.onChange("linkdetail", e.target.value)}
              />
              <CLabel>Nhãn hiệu:</CLabel>
              <CreatableSelect
                isClearable
                onChange={this.handleChange}

                // onInputChange={this.handleInputChange}
              />
              <div style={{ width: "100%" }} className="mt-3">
                <CLabel>Mức độ:</CLabel>
                {arrLevel != undefined ? (
                  <CSelect
                    onChange={async (e) => {
                      this.changeLevel(e);
                    }}
                    custom
                    size="sm"
                    name="selectSm"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      return (
                        <option selected key={i} value={item}>
                          {item == "1" ? "Nhẹ" : item == "2" ? "Trung" : "Nặng"}
                        </option>
                      );
                    })}
                  </CSelect>
                ) : null}
              </div>

              <TextFieldGroup
                field="price"
                label="Giá"
                type={"number"}
                value={this.state.price}
                placeholder={"Giá"}
                onChange={(e) => this.onChange("price", e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.addProduct()
                    : this.updateProduct();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => {
                  this.closeFormAdd();
                }}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal> */}
        </div>
      );
    }

    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={50}
          color={"#123abc"}
          loading={this.state.isLoading}
          speedMultiplier={1.5}
        />
      </div>
    );
  }
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const styles = {
  datePicker: {
    marginBottom: 20,
  },
  wa10: {
    width: "5%",
    float: "left",
    height: "80px",
  },
  pagination: {
    marginRight: "5px",
  },
  flexLabel: {
    width: 100,
  },
  flexOption: {
    width: 200,
    margin: "1px",
  },
  a: {
    textDecoration: "none",
  },
  floatRight: {
    float: "right",
    marginTop: "3px",
  },
  spinner: {
    width: "30px",
  },
  center: {
    textAlign: "center",
  },
  tbody: {
    height: "380px",
    overflowY: "auto",
  },
  wh12: {
    width: "10%",
    float: "left",
    height: "80px",
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "80px",
  },
  w5: {
    width: "12%",
    float: "left",
    height: "80px",
  },
  row: {
    float: "left",
    width: "100%",
  },
  success: {
    color: "green",
  },
  danger: {
    color: "red",
  },
  mgl5: {
    marginLeft: "5px",
  },
  tags: {
    float: "right",
    marginRight: "5px",
  },
  searchInput: {
    width: "100%",
    display: "inline-block",
    margin: "1px",
  },
  userActive: {
    color: "green",
  },
  userPending: {
    color: "red",
  },
  nagemonNameCol: {
    width: "328px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "99999px",
  },
};

export default Users;
