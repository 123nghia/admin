import { CButton, CCol, CLabel, CRow, CSelect, CTextarea } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { DatePicker, Select, Tag } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import moment from "moment";
import "moment-timezone";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import API_CONNECT from "../../../../src/functions/callAPI";
import slugify from "slug";
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
import Constants from "../../../contants/contants";
import TextFieldGroup from "../../Common/TextFieldGroup";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { MdOpenInNew } from "react-icons/md";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { Option } = Select;

let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const { RangePicker } = DatePicker;
class CodeColor extends Component {
  state = {
    titlePage: "Danh sách mã màu",
    company_id: JSON.parse(localStorage.getItem("user")).company_id
      ? JSON.parse(localStorage.getItem("user")).company_id
      : null,
    data: [],
    totalActive: 0,
    dataApi: [],
    hidden: false,
    modal: false,
    actionModal: "new",
    delete: null,
    arrPagination: [],
    indexPage: 0,
    type: localStorage.getItem("type"),
    user: localStorage.getItem("user"),
    isLoading: false,
    page: 1,
  };
  async componentDidMount() {
    await this.getData();
    // this.getDataCategory();
    // this.getDataBranch();
  }
  getData = async () => {
    this.pagination([
      {
        _id: "601f91cbf626ff4940762e60",
        hex: "#ac8f71",
        makeup_id: "t4fPvLyU8wXgXqtU",
        alpha: 65,
      },
    ]);

    return;
    const { page } = this.state;
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.GET_PRODUCT;
    let url = baseUrlapi + urlCall;
    axios
      .get(url, {
        params: {
          page: page,
        },
      })
      .then((res) => {
        console.log(res);
        let val = res.data.data;
        this.setState({
          total: res.data.total,
        });
        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0;

        this.setState({
          isLoading: false,
          totalActive: active,
        });
      });
  };
  getDataCategory = async () => {
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.GET_CATEGORY;
    let url = baseUrlapi + urlCall;
    axios.get(url).then((res) => {
      let val = res.data.data;
      this.setState({
        dataCategory: val,
      });
    });
  };
  getDataBranch = async () => {
    var baseUrlapi = Constants.BASE_URL;
    let urlCall = Constants.GET_BRAND;
    let url = baseUrlapi + urlCall;
    axios.get(url).then((res) => {
      let val = res.data.data;
      this.setState({
        dataBranch: val,
      });
    });
  };
  pagination(dataApi) {
    const { indexPage, total } = this.state;
    var i,
      j,
      temparray,
      chunk = 20;
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
    console.log("total", total);
    this.setState({
      arrPagination: Math.ceil(total / 20),
      data: arrTotal[indexPage],
    });
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }
  onSearch() {
    this.getPartner(this.state.key);
  }
  openFormAdd() {
    this.setState({
      actionModal: "new",
      modal: true,
      title: "",
      slug: "",
      description: "",
      imageShare: "",
      content: "",
      imageLogo: "",
      techDescription: "",
      idCategory: "",
      idBranch: "",
      nameCategoryChoose: "",
      nameBranchChoose: "",
      price: "",
      priceSale: "",
      priceSaleText: "",
      priceText: "",
      idIsSpecial: false,
      link: "",
      nameIsSpecialChoose: "Không",
      preserve: "",
      guide: "",
      uses: "",
      safety: "",
      skinType: "",
      element: "",
      expire: "",
      origin: "",
    });
  }
  openFormEdit(item) {
    const { dataCategory, dataBranch } = this.state;
    if (dataCategory && dataCategory.length > 0) {
      dataCategory.forEach((element) => {
        if (element._id === item.categoryId) {
          this.setState({
            nameCategoryChoose: element.title,
          });
        }
      });
    }
    if (dataBranch && dataBranch.length > 0) {
      dataBranch.forEach((element) => {
        if (element._id === item.brandId) {
          this.setState({
            nameBranchChoose: element.title,
          });
        }
      });
    }
    this.setState({
      actionModal: "edit",
      modal: true,
      idCategory: item.categoryId,
      idBranch: item.brandId,
      idEdit: item._id,
      title: item.title,
      techDescription: item.techDescription,
      slug: item.slug,
      description: item.description,
      imageShare: item.imageShare,
      content: item.content,
      imageLogo: item.avatar,
      price: item.price,
      priceSale: item.priceSale,
      idIsSpecial: item.isSpecial,
      priceSaleText: item.priceSaleText,
      priceText: item.priceText,
      link: item.link,
    });
    if (item.techDescription?.preserve) {
      this.setState({
        preserve: item.techDescription.preserve,
      });
    }
    if (item.techDescription?.guide) {
      this.setState({
        guide: item.techDescription.guide,
      });
    }
    if (item.techDescription?.uses) {
      this.setState({
        uses: item.techDescription.uses,
      });
    }
    if (item.techDescription?.skinType) {
      this.setState({
        skinType: item.techDescription.skinType,
      });
    }
    if (item.techDescription?.safety) {
      this.setState({
        safety: item.techDescription.safety,
      });
    }
    if (item.techDescription?.expire) {
      this.setState({
        expire: item.techDescription.expire,
      });
    }
    if (item.techDescription?.element) {
      this.setState({
        element: item.techDescription.element,
      });
    }
    if (item.techDescription?.origin) {
      this.setState({
        origin: item.techDescription.origin,
      });
    }

    if (item.isSpecial) {
      this.setState({
        nameIsSpecialChoose: "Có",
      });
    } else {
      this.setState({
        nameIsSpecialChoose: "Không",
      });
    }
  }
  async update() {
    const {
      title,
      slug,
      description,
      imageShare,
      content,
      avatar,
      imageLogo,
      techDescription,
      idEdit,
      idCategory,
      idBranch,
      price,
      priceSale,
      priceSaleText,
      link,
      priceText,
    } = this.state;
    let img = this.state.imageLogo;
    let img2 = this.state.imageShare;

    let imgLink = await this.postImage(this.state.imageLogo_link);
    if (imgLink) {
      img = `${Constants.BASE_URL}image_banner/${imgLink}`;
    }
    let imgLink2 = await this.postImage(this.state.imageShare_link);
    if (imgLink2) {
      img2 = `${Constants.BASE_URL}image_banner/${imgLink2}`;
    }
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.UPDATE_PRODUCT;

    let url = baseUrlapi + baseUrlCallApi;

    await axios
      .post(url, {
        id: this.state.idEdit,
        title: title,
        slug: slug,
        techDescription,
        description: description,
        imageShare: img2,
        categoryId: idCategory,
        content: content,
        link,
        avatar: img,
        brandId: idBranch,
        price: price,
        priceSale: priceSale,
        isSpecial: this.state.idIsSpecial,
        priceSaleText: priceSaleText,
        priceText: priceText,
      })
      .then(async (res) => {
        if (res.data.is_success) {
          Swal.fire({
            icon: "success",
            title: "Cập nhật hoàn tất",
            showConfirmButton: false,
            timer: 1200,
          });
          this.setState({
            modal: false,
          });
          await this.getData();
        } else {
          alert(res.data.message);
        }
      });
  }
  async add() {
    const {
      title,
      slug,
      description,
      techDescription,
      imageShare,
      content,
      avatar,
      imageLogo,
      idEdit,
      idCategory,
      idBranch,
      price,
      priceSale,
      preserve,
      guide,
      uses,
      safety,
      skinType,
      link,
      element,
      expire,
      origin,
      priceSaleText,
      priceText,
    } = this.state;
    let img = this.state.imageLogo;
    let img2 = this.state.imageShare;

    let imgLink = await this.postImage(this.state.imageLogo_link);
    if (imgLink) {
      img = `${Constants.BASE_URL}image_banner/${imgLink}`;
    }
    let imgLink2 = await this.postImage(this.state.imageShare_link);
    if (imgLink2) {
      img2 = `${Constants.BASE_URL}image_banner/${imgLink2}`;
    }
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.ADD_PRODUCT;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        title: title,
        slug: slugify(title, { remove: /[0-9]/g }),
        description: description,
        techDescription: {
          preserve,
          guide,
          uses,
          safety,
          skinType,
          element,
          expire,
          origin,
        },
        categoryId: idCategory,
        imageShare: img2,
        content: content,
        link,
        avatar: img,
        brandId: idBranch,
        price: price,
        priceSale: priceSale,
        isSpecial: this.state.idIsSpecial,
        priceSaleText: priceSaleText,
        priceText: priceText,
      })
      .then(async (res) => {
        if (res.data.is_success) {
          Swal.fire({
            icon: "success",
            title: "Thêm thành công",
            showConfirmButton: false,
            timer: 1200,
          });
          this.setState({
            modal: false,
          });
          await this.getData();
        } else {
          alert(res.data.message);
        }
      });
  }
  async delete(item) {
    this.setState({
      idDelete: item._id,
      modalDelete: true,
    });
  }
  async remove(item) {
    const { idDelete } = this.state;
    let baseUrlCallApi = Constants.DELETE_PRODUCT;
    var baseUrlapi = Constants.BASE_URL;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .delete(url, {
        data: {
          id: idDelete,
        },
      })
      .then((res) => {
        this.setState({
          modalDelete: false,
        });
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 1200,
        });
        this.getData();
      });
  }
  async postImage(link) {
    var newImage = "";
    if (link && link !== "") {
      const form = new FormData();

      form.append("image", link);

      await API_CONNECT(Constants.UPLOAD_BANNER, form, "", "POST").then(
        (res) => {}
      );

      newImage = link.name;
      return newImage;
    } else {
      return newImage;
    }
  }
  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDatePickerChange = (date, dateString, id) => {
    this.setState({
      from: dateString[0],
      to: dateString[1],
    });
  };
  onChangeImage(e, value, valueLink, valueShow) {
    let files = e.target.files;
    let reader = new FileReader();
    this.setState({ [valueLink]: files[0] });
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      this.setState({ [value]: e.target.result, [valueShow]: e.target.result });
    };
  }
  async ExportsFileExcel() {
    alert("Tính năng chưa hỗ trợ");
    return;

    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.EXPORT_CUSTOMER_EVOUCHER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        console.log(res);
        let a = document.getElementById("download_excel");
        if (a) {
          a.href = `${baseUrlapi}${res.data.data.url}`;
        }
        a.click();
      });
  }
  renderHeaderTable = () => {
    return (
      <tr>
        <th className="text-center">STT.</th>
        <th className="text-center">Mã màu (Hex)</th>
        <th className="text-center">Makeup ID</th>
        <th className="text-center">Alpha</th>
        <th className="text-center"></th>
      </tr>
    );
  };
  render() {
    const { data, arrPagination, titlePage } = this.state;
    const isSpecial = [
      {
        value: false,
        name: "Không",
      },
      {
        value: true,
        name: "Có",
      },
    ];
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Modal
            size="md"
            closeButton
            toggle={() => this.setState({ modal: false })}
            isOpen={this.state.modal}
            className={this.props.className}
          >
            <ModalHeader toggle={() => this.setState({ modal: false })}>
              {this.state.actionModal === "new" ? `Tạo mới` : `Cập nhật`}
            </ModalHeader>
            <ModalBody>
            <TextFieldGroup
                field="codeColor"
                label="Mã màu (hex)"
                value={this.state.codeColor}
                onChange={(e) => this.setState({ codeColor: e.target.value })}
              />
               <TextFieldGroup
                field="makeupID"
                label="Makeup ID"
                value={this.state.makeupID}
                onChange={(e) => this.setState({ makeupID: e.target.value })}
              />
               <TextFieldGroup
                field="alpha"
                label="Alpha"
                value={this.state.alpha}
                onChange={(e) => this.setState({ alpha: e.target.value })}
              />
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.actionModal === "new" ? this.add() : this.update();
                }}
                disabled={this.state.isLoading}
              >
                Lưu
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => this.setState({ modal: !this.state.modal })}
              >
                Đóng
              </CButton>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.modalDelete}
            className={this.props.className}
          >
            <ModalHeader
              onClick={(e) =>
                this.setState({
                  modalDelete: false,
                  delete: null,
                })
              }
            >{`Xoá`}</ModalHeader>
            <ModalBody>
              <label htmlFor="tag">{`Bạn có chắc chắn xóa ?`}</label>
            </ModalBody>
            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => this.remove(this.state.idDelete)}
                disabled={this.state.isLoading}
              >
                Xoá
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) =>
                  this.setState({
                    modalDelete: false,
                    delete: null,
                  })
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
                    {titlePage}
                  </i>
                  <CRow>
                    <CCol md={3} className="mt">
                      <div className="">
                        <p className="title_filter">Tiêu đề</p>
                        <Input
                          style={styles.searchInput}
                          onChange={(e) => {
                            this.setState({ phoneFilter: e.target.value });
                          }}
                          type="text"
                          name="phoneFilter"
                          value={this.state.phoneFilter}
                          placeholder=""
                        />
                      </div>
                    </CCol>
                  </CRow>

                  <div className="flex-center-space mt-2">
                    <div>
                      <CButton
                        color="success"
                        style={{ marginRight: "10px" }}
                        size="md"
                        className="flex-center"
                        onClick={() => this.ExportsFileExcel()}
                      >
                        <FaFileExport style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Xuất File</p>
                      </CButton>
                      <a id="download_excel" download></a>
                    </div>
                    <div className="flex">
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
                        onClick={() => this.openFormAdd()}
                      >
                        <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Thêm mới</p>
                      </CButton>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="table__overflow">
                  <h5>Tổng số: {this.state.total ? this.state.total : ""}</h5>
                  <table
                    ble
                    className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      {this.renderHeaderTable()}
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
                                <td className="text-center">
                                  <div className="flex-center">
                                    <div
                                      className="makeup__box-color"
                                      style={{ backgroundColor: item.hex }}
                                    ></div>
                                  </div>
                                  {item.hex}

                                </td>
                                <td className="text-center">
                                  {item.makeup_id}
                                </td>
                                <td className="text-center">{item.alpha}</td>
                                <td
                                  className="text-center"
                                  style={{ minWidth: "100px" }}
                                >
                                  <div className="flex">
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
                                    </CButton>
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
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                  <div style={{ float: "right" }}>
                    <Pagination
                      count={arrPagination}
                      color="primary"
                      onChange={(e, v) => {
                        this.setState(
                          {
                            page: v,
                          },
                          () => {
                            this.getData();
                          }
                        );
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
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
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
    marginLeft: "5px",
  },
  tags: {
    float: "right",
    marginRight: "5px",
  },
  searchInput: {
    width: "200px",
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

export default CodeColor;
