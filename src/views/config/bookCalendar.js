import React, { Component } from "react";
import CIcon from "@coreui/icons-react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
} from "reactstrap";
import {
  CLabel,
  CRow,
  CCol,
  CSelect,
  CButton,
  CTooltip,
  CTextarea,
} from "@coreui/react";

import API_CONNECT from "../../functions/callAPI";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import "moment-timezone";
import Constants from "../../contants/contants";
import TextFieldGroup from "../Common/TextFieldGroup";
import axios from "axios";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));
class BrandSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      key: "",
      activePage: 1,
      page: 1,
      itemsCount: 0,
      limit: 20,
      totalActive: 0,
      modalCom: false,
      viewingUser: {},
      communities: [],
      updated: "",
      dataApi: [],
      hidden: false,
      action: "new",
      name: "",
      image: "",
      idUpdate : "",
      image_show: "",
      image_mobile: "",
      image_show_mobile: "",
      image_mobile_link: "",
      image_link: "",
      link: "",
      imageMobile: "",
      dataDatlich: [],
      updateLevelStatus : "0",
      modalDelete: false,
      delete: null,
      arrPagination: [],
      indexPage: 0,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      isLoading: false,
      indexSelector : null,
    };
  }
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      updateLevelStatus: e.target.value,
    });
  };
  async componentDidMount() {
      this.getDataConfigWeb();
    const { type } = this.state;
    if (type == "0" || type == "1") {
      this.getData();
    } else {
      this.getData_Company();
    }
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url == window.location.hash) {
        if (arr[i].isHidden == true) {
          window.location.href = "#/";
        }
      }
    }
  }
  async onSearching(){
    let url = Constants.BASE_URL + Constants.GET_BOOK_LICH;
    console.log(this.state.key)
    await axios.get(url,{
      params : {
        phoneNumber : this.state.key
      }
    }).then((res)=>{
      this.setState({
        dataDatlich: res.data.data,
      });
    })
  }

  async getDataConfigWeb() {

    let url = Constants.BASE_URL + Constants.GET_BOOK_LICH;

    await axios
      .get(url)
      .then((res) => {
        if (res.data.data) {
          this.setState({
            dataDatlich: res.data.data,
            
          });
 
        } 
      });
  }
   addDataConfig() {
    const { name,
      sdtBooklich,
      dateStart,
      updateLevelStatus
  } = this.state;
    let url = Constants.BASE_URL + Constants.ADD_BOOK_LICH
     axios.post(url, {
    
        phoneNumber: sdtBooklich,
        status : updateLevelStatus,
                          infoPerson: "24",
                          fullName: name,
                          wanted : "a",
                          content: "content",
                          bookingAddress: "quan 3",
                          booking_date:  dateStart,
      
    }).then(()=>{
      this.setState({
        modalCom : !this.state.modalCom
      })
      this.getDataConfigWeb();
    })
  }
  saveUpdate=()=>{
    const { name,
      sdtBooklich,
 
      dateThamChieu,
  
      indexSelector,
      updateLevelStatus
  } = this.state;
    let url = Constants.BASE_URL + Constants.UPDATE_BOOK_LICH
     axios.post(url, {
        phoneNumber: sdtBooklich,
        id : indexSelector,
        status : updateLevelStatus,
                          infoPerson: "24",
                          fullName: name,
                          wanted : "a",
                          content: "content",
                          bookingAddress: "quan 3",
                          booking_date:  dateThamChieu,
     }).then(()=>{
      this.setState({
        modalCom : !this.state.modalCom
      })
      this.getDataConfigWeb();
     })
  }
  saveAdd=()=>{
    const { name,
        sdtBooklich,
        dateStart,
        dateThamChieu,
        dataDatlich,
        updateLevelStatus
    } = this.state;

    let coppyData = [
      ...dataDatlich
    ]
    let dataAdd = {
        name,
        sdtBooklich,
        dateStart,
        dateThamChieu,
        updateLevelStatus
   
    }
    coppyData.push(dataAdd)
    this.setState({
        dataDatlich : coppyData,


    },() => {

      this.onUpdate();     
    })  
  

  }
  
  openDelete = (item) => {  
    this.setState({    
      indexSelector : item._id,

    },()=>{
      this.deleteItem();
    })
  };
  async deleteItem(){
    const {indexSelector } = this.state; 

    let url = Constants.BASE_URL + Constants.DELETE_BOOK_LICH
     axios.post(url, {
        
        id : indexSelector,
        
     }).then(()=>{
      this.getDataConfigWeb();
     })
  }
  async toggleModal(key) {
    if (key == "new") {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        name: "",
        sdtBooklich: "",
        dateStart: "",
        dateThamChieu: "",
        updateLevelStatus : "0",
      })
      
    }
    
  }
  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 5;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hidden: false,
      });
    } else {
      this.setState({
        hidden: true,
      });
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }

  getData = async () => {
    this.setState({ isLoading: true });
    const res_brand = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.LIST_Banner,
      method: "GET",
    });

    let val = res_brand.data.data;
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0;

    this.setState({ isLoading: false, totalActive: active });
  };

  getData_Company = async () => {
    this.setState({ isLoading: true });
    const res_brand = await axios({
      baseURL: Constants.BASE_URL,
      url:
        Constants.LIST_Banner_COMPANY + JSON.parse(this.state.user).company_id,
      method: "GET",
    });

    let val = res_brand.data.data;

    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0;

    this.setState({ isLoading: false, totalActive: active });
  };

  searchKey() {
    const { indexPage, key } = this.state;
    // this.setState({ key: key })

    if (key != "") {
      let d = [];
      this.state.dataApi.map((val) => {
        if (val.name.toLocaleUpperCase().includes(key.toLocaleUpperCase())) {
          d.push(val);
        }
      });
      let active = 0;

      d.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });

      this.setState({ data: d, totalActive: active });
    } else {
      let active = 0;

      this.state.dataApi.map((val) => {
        if (val.Status == "Actived") {
          active = active + 1;
        }
      });

      this.setState({
        data: this.state.arrPagination[indexPage],
        totalActive: active,
      });
    }
  }

  actionSearch(e, name_action) {
    this.setState(
      {
        [name_action]: e.target.value,
      },
      () => {
        this.searchKey();
      }
    );
  }

  resetSearch() {
    this.setState(
      {
        key: "",
      },
      () => {
        this.searchKey();
      }
    );
  }
  onChange(key, val) {
    this.setState({ [key]: val });
  }

  async addBrand() {
    const { name, image, link, image_link, image_mobile_link } = this.state;
    if (name == null || name == "" || image == null || image == "") {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return;
    }

    const form = new FormData();
    form.append("image", image_link);
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST");
    const form2 = new FormData();
    form2.append("image", image_mobile_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form2, "", "POST");

    const body = {
      name: name,
      image: image,
      image_link: image_link.name,
      image_mobile_link:
        image_mobile_link == undefined || image_mobile_link == ""
          ? ""
          : image_mobile_link.name,
      company_id:
        this.state.type == "0" || this.state.type == "1"
          ? ""
          : JSON.parse(this.state.user).company_id,
      link: link,
    };

    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.ADD_Banner,
      method: "POST",
      data: body,
    });

    if (res.status == 200) {
      if (this.state.type == "0" || this.state.type == "1") {
        this.getData();
      } else {
        this.getData_Company();
      }
      this.setState({ modalCom: !this.state.modalCom });
    } else {
      alert("Thêm thương hiệu thất bại");
      this.setState({ isLoading: false });
    }
  }

  async openUpdate(item) {
    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      name: item.fullName,
      indexSelector : item._id,
      sdtBooklich: item.phoneNumber,
      dateStart: item.create_date,
      dateThamChieu: item.booking_date,
      updateLevelStatus : item.status
    });
    
  }

  async updateBrand() {
    const { name, image, link, image_link, image_mobile_link } = this.state;

    if (name == null || name == "" || image == null || image == "") {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return;
    }

    const form = new FormData();
    form.append("image", image_link);
    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST");
    const form2 = new FormData();
    form2.append("image", image_mobile_link);

    await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form2, "", "POST");

    const body = {
      name: name,
      image: image,
      image_link:
        image_link == undefined || image_link == null || image_link == ""
          ? ""
          : image_link.name,
      image_mobile_link:
        image_mobile_link == undefined ||
        image_link == null ||
        image_mobile_link == ""
          ? ""
          : image_mobile_link.name,
      id: this.state.id,
      link: link,
    };
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.UPDATE_Banner,
      method: "POST",
      data: body,
    });

    if (res.status == 200) {
      if (this.state.type == "0" || this.state.type == "1") {
        this.getData();
      } else {
        this.getData_Company();
      }
      this.setState({ modalCom: !this.state.modalCom });
    } else {
      alert("Cập nhật thất bại");
      this.setState({ isLoading: false });
    }
  }

 

  async delete() {
    this.setState({ isLoading: true });
    const res = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.DELETE_Banner,
      method: "POST",
      data: {
        id: this.state.id,
      },
    });

    if (res.status == 200) {
      if (this.state.type == "0" || this.state.type == "1") {
        this.getData();
      } else {
        this.getData_Company();
      }
      this.setState({ modalDelete: !this.state.modalDelete, delete: null });
    } else {
      alert("Xóa sản phẩm thất bại");
      this.setState({ isLoading: false });
    }
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getBadge(status) {
    switch (status) {
      case "Actived":
        return "success";
      case "Inactive":
        return "secondary";
      case "Locked":
        return "warning";
      case "Deactived":
        return "danger";
      default:
        return "primary";
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
  }

  onChangeImageMobile(e) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ image_mobile_link: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({
        imageMobile: e.target.result,
        image_show_mobile: e.target.result,
      });
    };
  }

  parseDate(str_date) {
    return new Date(Date.parse(str_date));
  }

  render() {
    const arrLevel = [
      {
        item: "0",
      },
      {
        item: "1",
      },
      {
        item: "2",
      },
      {
        item: "3",
      },
    ];
    const { data, dataDatlich, arrPagination, key } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"> Danh sách đặt lịch</i>
                  <div style={styles.tags}>
                    <CRow>
                      <CCol sm="12" lg="12">
                        <CRow>
                          <CCol sm="12" lg="12">
                            <div class="flex-a-center">
                              <Input
                              class="mr-2"
                                style={styles.searchInput}
                                onChange={(e) => {
                                  this.setState({ key : e.target.value});
                                }}
                                name="key"
                                value={key}
                                placeholder="Từ khóa"
                              />
                               <CButton
                              color="primary"
                              style={{ width: "50%" }}
                              size="md"
                              onClick={(e) =>this.onSearching()}
                            >
                              Tìm kiếm
                            </CButton>
                            
                            </div>
                          </CCol>
                          <CCol sm="12" lg="6">
                           
                          </CCol>
                        </CRow>
                      </CCol>
                      <CCol sm="12" lg="12">
                        <CButton
                          outline
                          color="primary"
                          style={styles.floatRight}
                          size="sm"
                          onClick={(e) => this.toggleModal("new")}
                        >
                          Thêm mới
                        </CButton>
                      </CCol>
                    </CRow>
                  </div>
                </CardHeader>
                <CardBody>
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Số điện thoại</th>

                        <th className="text-center">Ngày đặt lịch</th>
                        <th className="text-center"> Ngày tạo</th>
                        <th className="text-center">Trạng thái</th>
                        <th className="text-center">#</th>
                      </tr>
                    </thead>
                    <tbody>                      
                      {dataDatlich.map((item, i) => {
                            return (
                              <tr key={i}>
                                <td className="text-center">{i + 1}</td>
                                <td className="text-center">{item.fullName}</td>
                                <td className="text-center">
                                  {item.phoneNumber}
                                </td>


                                <td className="text-center">

                      
                              {  (new Date(item.booking_date)).toLocaleString()}
                                
                                
                                </td>
                                <td className="text-center">
                                
                                
                                {  (new Date(item.create_date)).toLocaleString()}
                                
                              </td>

                                <td className="text-center">
                                {item.status === "0"
                              ? "Đang đặt lịch"
                              : item.status === "1" 
                              ? "Đã  gặp" : item.status ==="2" 
                              ? "Hẹn gặp lại" : 
                              "Không gặp"}
                                </td>

                                <td className="text-center">
                                  <CButton
                                    style={styles.mgl5}
                                    outline
                                    color="primary"
                                    size="sm"
                                    onClick={async (e) =>
                                      await this.openUpdate(item)
                                    }
                                  >
                                    <CIcon name="cilPencil" />
                                  </CButton>{" "}
                                  <CButton
                                    outline
                                    color="danger"
                                    size="sm"
                                    onClick={(e) => {
                                      this.openDelete(item);
                                    }}
                                  >
                                    <CIcon name="cilTrash" />
                                  </CButton>
                                </td>
                              </tr>
                            );
                          })
                        }
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              <div style={{ float: "right" }}>
                <Pagination
                  count={arrPagination.length}
                  color="primary"
                  onChange={(e, v) => {
                    this.setState({
                      data: arrPagination[v - 1],
                      indexPage: v - 1,
                    });
                  }}
                />
              </div>
              {/* {
                arrPagination.length == 1 ? "" :
                  <div style={{ float: 'right', marginRight: '10px', padding: '10px' }}>
                    <tr style={styles.row}>
                      {
                        arrPagination.map((item, i) => {
                          return (
                            <td>
                              <CButton style={styles.pagination} color={i == indexPage ? 'primary' : 'danger'} onClick={e => { this.setState({ data: arrPagination[i], indexPage: i }) }}>{i + 1}</CButton>
                            </td>
                          );
                        })
                      }
                    </tr>
                  </div>
              } */}
            </Col>
          </Row>

          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>
              {this.state.action == "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
              <TextFieldGroup
                field="name"
                label="Tên"
                value={this.state.name}
                placeholder="Tên"
                // error={errors.title}
                onChange={(e) => this.onChange("name", e.target.value)}
                // rows="5"
              />

              <TextFieldGroup
                field="sdtBooklich"
                label="Số điện thoại"
                value={this.state.sdtBooklich}
                placeholder="Số điện thoại"
                // error={errors.title}
                onChange={(e) => this.onChange("sdtBooklich", e.target.value)}
                // rows="5"
              />
              <TextFieldGroup
              type="date"
                field="dateStart"
                label="Ngày đặt hẹn"
                value={this.state.dateStart}
                placeholder="Ngày"
                // error={errors.title}
                onChange={(e) => this.onChange("dateStart", e.target.value)}
                // rows="5"
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
                    name="updateLevelStatus"
                    id="SelectLm"
                  >
                    {arrLevel.map((item, i) => {
                      if (item.item === this.state.updateLevelStatus) {
                        return (
                          <option selected key={i} value={item.item}>
                            {item.item === "0"
                              ? "Đang đặt lịch"
                              : item.item === "1" 
                              ? "Đã  gặp" : item.item ==="2" 
                              ? "Hẹn gặp lại" : 
                              "Không gặp"}
                          </option>
                        );
                      } else {
                        return (
                          <option key={i} value={item.item}>
                          {item.item === "0"
                              ? "Đang đặt lịch"
                              : item.item === "1" 
                              ? "Đã  gặp" : item.item ==="2" 
                              ? "Hẹn gặp lại" : 
                              "Không gặp"}
                          </option>
                        );
                      }
                    })}
                  </CSelect>
                ) : null}
              </div>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.addDataConfig()
                    : this.saveUpdate();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => this.toggleModal("new")}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>

          <Modal
            isOpen={this.state.modalDelete}
            toggle={(e) =>
              this.setState({
                modalDelete: !this.state.modalDelete,
                delete: null,
              })
            }
            className={this.props.className}
          >
            <ModalHeader
              toggle={(e) =>
                this.setState({
                  modalDelete: !this.state.modalDelete,
                  delete: null,
                })
              }
            >{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Xác nhận xóa !!!`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => this.delete()}
                disabled={this.state.isLoading}
              >
                Xoá
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalDelete: !this.state.modalDelete,
                    delete: null,
                  })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
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
  pagination: {
    marginRight: "5px",
  },
  flexLabel: {
    width: 100,
  },
  flexOption: {
    width: 300,
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
  wh25: {
    width: "25%",
    float: "left",
    height: "80px",
  },
  w5: {
    width: "15%",
    float: "left",
    height: "80px",
  },
  wa10: {
    width: "5%",
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
    margin: "5px",
  },
  tags: {
    float: "right",
    marginRight: "5px",
  },
  searchInput: {
    width: "190px",
    display: "inline-block",
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

export default BrandSlider;
