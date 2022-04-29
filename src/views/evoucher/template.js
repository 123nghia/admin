import { CButton, CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { DatePicker, Select, Tag } from "antd";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import DotLoader from "react-spinners/DotLoader";
import API_CONNECT from "../../../../../src/functions/callAPI";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Swal from "sweetalert2";
import Constants from "../../../../contants/contants";
import TextFieldGroup from "../../../Common/TextFieldGroup";
const { Option } = Select;
const dateFormat = "DD-MM-YYYY";
let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class IpLog extends Component {
  state = {
    data : [],
    totalActive: 0,
    dataApi: [],
    hidden: false,
    action: "new",
    delete: null,
    arrPagination: [],
    indexPage: 0,
    isLoading: false,
    idCurrentUpdate: null,
    th : [
      'STT',
      'Tên',
      'Email',
      'Số điện thoại',
      'Mã Voucher',
      'Địa chỉ',
      'Tỉnh/Thành',
      '',
    ],
  
  };
  async componentDidMount() {

  }

  pagination(dataApi) {
    var i, j, temparray, chunk = 5;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      this.setState({
        hidden: false
      })
    } else {
      this.setState({
        hidden: true
      })
    }

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }
  onSearch() {
    this.onGetCampaignList(this.state.key);
  }
 
  async postImage(link) {
    var newImage = "";
    if (link && link !== "") {
      const form = new FormData();

      form.append("image", link);

      await API_CONNECT(Constants.UPLOAD_IMAGE_BRAND, form, "", "POST").then(
        (res) => {

        }
      );

      newImage = link.name;
      return newImage;
    } else {
      return newImage;
    }
  }
  openAdd = () => {

  }
  openUpdate = (item) => {
    
  }
  async update() {

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_PARTNER;

    let url = baseUrlapi + baseUrlCallApi;
    let img = this.state.imageLogo;
    let imgLink = await this.postImage(this.state.imageLogo_link);
    if (imgLink) {
      img = `${Constants.BASE_URL}image_brand/${imgLink}`;
    }

    await axios
      .post(url, {
        id : this.state.idEditPartner,
        "name" : this.state.name,
        "email" : this.state.email,
        "phone" :  this.state.phone,
        "slug":  this.state.slug,
        "introduction":  this.state.introduction,
        "brand" : this.state.branch,
         "logo": img,
         "password":  this.state.password,
         "userName" : this.state.userName
      })
      .then( async(res) => {
        Swal.fire({
          icon: "success",
          title: "Cập nhật hoàn tất",
          showConfirmButton: false,
          timer: 1200,
        });
        this.setState({
          modalVoucher: false,
        });
        await this.getPartner();
      });
  }
  async add() {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_PARTNER;
    let url = baseUrlapi + baseUrlCallApi;
    let img;
    let imgLink = await this.postImage(this.state.imageLogo_link);
    if (imgLink) {
      img = `${Constants.BASE_URL}image_brand/${imgLink}`;
    }
    await axios
      .post(url, {
        "name" : this.state.name,
        "email" : this.state.email,
        "phone" :  this.state.phone,
        "slug":  this.state.slug,
        "introduction":  this.state.introduction,
        "brand" : this.state.branch,
         "logo": img,
         "password":  this.state.password,
         "userName" : this.state.userName,
        
         
      })
      .then(async (res) => {
        Swal.fire({
          icon: "success",
          title: "Thêm thành công",
          showConfirmButton: false,
          timer: 1700,
        });
        this.setState({
          modalVoucher: false,
        });
        await this.getPartner();
      });
  }
  async delete(item) {
    let baseUrlCallApi = Constants.DELETE_PARTNER;

    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: item._id,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 1200,
        });
        this.getPartner();
      });
  }
  render() {
    const {
      data,
      arrPagination,
    } = this.state;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal
            isOpen={this.state.modal}
            className={this.props.className}
          >
            <ModalHeader>
              {this.state.action === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
            <TextFieldGroup
                field="userName"
                label="Tên Đăng nhập"
                value={this.state.userName}
                // error={errors.title}
                onChange={(e) => this.setState({ userName: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="password"
                label="Password"
                value={this.state.password}
                // error={errors.title}
                onChange={(e) => this.setState({ password: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="name"
                label="Tên đối tác"
                value={this.state.name}
                // error={errors.title}
                onChange={(e) => this.setState({ name: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="email"
                label="Email"
                value={this.state.email}
                // error={errors.title}
                onChange={(e) => this.setState({ email: e.target.value })}
              // rows="5"
              />

              <TextFieldGroup
                field="phone"
                label="Số điện thoại"
                value={this.state.phone}
                // error={errors.title}
                onChange={(e) => this.setState({ phone: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="slug"
                label="Slug"
                value={this.state.slug}
                // error={errors.title}
                onChange={(e) => this.setState({ slug: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="introduction"
                label="Giới thiệu"
                value={this.state.introduction}
                // error={errors.title}
                onChange={(e) => this.setState({ introduction: e.target.value })}
              // rows="5"
              />
              <TextFieldGroup
                field="branch"
                label="Thương hiệu"
                value={this.state.branch}
                // error={errors.title}
                onChange={(e) => this.setState({ branch: e.target.value })}
              // rows="5"
              />
                <div className="mt-3"></div>
              <TextFieldGroup
                field="imageLogo"
                label="Logo"
                type={"file"}
                className="mt-5"
                onChange={(e) => {
                  this.onChangeImage(e,'imageLogo','imageLogo_link','imageLogo_show');
                }}
                onClick={(e) => {
                  e.target.value = null;
                  this.setState({ imageLogo : "" });
                }}
              />
              <div class="text-center">
                <img
                  alt=""
                  style={{ maxWidth: "150px", marginBottom: 10 }}
                  height="auto"
                  src={this.state.imageLogo}
                />
              </div>
             
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.add()
                    : this.update();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({ modal: !this.state.modal })
                }
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>    
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify title_header">
                    Ip Log
                  </i>
                  <CRow>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Mã Voucher</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ codeVoucher: e.target.value });
                          }}
                          name="codeVoucher"
                          value={this.state.codeVoucher}
                          placeholder="Mã voucher"
                        />
                      </div>
                    </CCol>

                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Số điện thoại</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ phoneFilter: e.target.value });
                          }}
                          type="number"
                          name="phoneFilter"
                          value={this.state.phoneFilter}
                          placeholder="Số điện thoại"
                        />
                      </div>
                    </CCol>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Tỉnh/Thành</p>
                        <div style={{ width: "200px" }}>
                          <Select
                            className="select_seo"
                            showSearch
                            placeholder=""
                            optionFilterProp="children"
                            onChange={(value) =>
                              this.setState({
                                idDataSales: value,
                              })
                            }
                            onSearch={this.onSearchSelect}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {this.state.dataSales
                              ? this.state.dataSales.map((item, i) => {
                                return (
                                  <Option value={item._id}>
                                    {item.Name}
                                  </Option>
                                );
                              })
                              : null}
                          </Select>
                        </div>
                      </div>
                    </CCol>
                    
                  </CRow>

                  <div className="flex-end">
                    <CButton
                      color="info"
                      style={{ marginRight: "10px" }}
                      size="md"
                      className="btn-main"
                      onClick={(e) => {
                        this.onSearch();
                      }}
                    >
                      <BsSearch style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Tìm kiếm</p>
                    </CButton>
                    <CButton
                      color="info"
                      size="md"
                      className="btn-main"
                      onClick={() => this.openAdd()}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Thêm mới</p>
                    </CButton>
                  </div>
                </CardHeader>
                <CardBody className="table__overflow">
                  <table
                    ble
                    className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                       {
                         this.state.th.map((item, i) => {
                           return (
                             <th key={i} className="text-center">
                               {item}
                             </th>
                           );
                         })
                       }
                      </tr>
                    </thead>
                    <tbody>
                      <td
                        colSpan="10"
                        hidden={this.state.hidden}
                        className="text-center"
                      >
                        Không tìm thấy dữ liệu
                      </td>
                      {data !== undefined
                        ? data.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center">{item.Name}</td>
                              <td className="text-center">{item.UserName}</td>
                              <td className="text-center">
                                {item.password}
                              </td>
                              <td className="text-center">
                                {item.Email}
                              </td>
                              <td className="text-center">
                                {item.Phone}
                              </td>
                              <td className="text-center">
                                {item.Slug}
                              </td>
                              <td className="text-center">
                                {item.introduction}
                              </td>
                              <td className="text-center">
                                {item.Brand}
                              </td>
                              <td className="text-center">
                                <img style={{maxHeight:'140px'}} src={item.Logo} alt="" />
                              </td>  
                              <td className="text-center">
                              <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="info"
                                    style={styles.mgl5}
                                    size="md"
                                    onClick={(e) => this.openFormEdit(item)}
                                  >
                                    <FiEdit3
                                      style={styles.icon}
                                      name="cilPencil"
                                    />
                                  </CButton>{" "}
                                  <CButton
                                    shape="rounded-pill"
                                    variant="ghost"
                                    color="danger"
                                    style={styles.mgl5}
                                    onClick={(e) => {
                                      this.delete(item);
                                    }}
                                  >
                                    <BsTrash
                                      style={styles.icon}
                                      className="icon"
                                      name="cilTrash"
                                    />
                                  </CButton>
                              </td>
                             
                            </tr>
                          );
                        })
                        : ""}
                    </tbody>
                  </table>
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
                </CardBody>
              </Card>
            </Col>
          </Row>
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
  searchInput: {
    width: "200px",
    display: "inline-block",
  },
};

export default IpLog;
