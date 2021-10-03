import React, { Component } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "moment-timezone";
import CIcon from '@coreui/icons-react'
import {
  CButton
} from '@coreui/react'
import TextArea from "../../../../Common/TextArea";
import validateInput from "./../../../../../functions/news";
import TextFieldGroup from "../../../../Common/TextFieldGroup";
import Pagination from "react-js-pagination";
import ConstantApp from "../../../../../contants/contants_app";

let headers = new Headers();
headers.append("Content-Type", "application/json");
let BASE_URL = ConstantApp.BASE_URL

//let BASE_URL = "https://csgvietnam.com";
class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title_en: "",
      title_jp: "",
      image: "",
      video: "",
      description_en: "",
      description_jp: "",
      deleted: false,
      isLoading: false,
      errors: {},
      action: "",
      created: "",
      activePage: 1,
      numPage: 1,
      itemsCount: 0,
      itemPerPage: 20,
      openDate: new Date(),
      // new data
      name: "",
      image: "",
      key: "",
      title: "",
      description: "",
      linkdetail: "",
      level: "K1",
      sdktype: "1",
      companyid: "",
      sdkItem: [],
      currentSdkSelect: "",
      currentItemSelect: null,
      idSDK: window.location.hash.split('/')[window.location.hash.split('/').length - 1],
      hidden: false
    };
  }
  async componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    const page = this.state.activePage || 1;
    const limit = this.state.itemPerPage || 200;
    const key = this.state.key || "";
    console.log("key", key);
    const fetchData = {
      method: "GET",
    };
    // fetch(global.BASE_URL + "/news?limit=" + limit + "&page=" + page, fetchData)
    fetch(
      BASE_URL + "/itemSdk/suggest?limit=" + limit + "&page=" + page + "&key=" + key + "&sdk_type=" + this.state.idSDK,
      fetchData
    )
      .then((cards) => {
        cards.json().then((result) => {
          if (result.data.length == 0) {
            this.setState({ hidden: false })
          } else {
            this.setState({ hidden: true })
          }
          this.setState({
            data: result.data,
            itemsCount: result.totalItems,
            // isLoading: false,
          });
        });
      })
      .catch(console.log);
    fetch(BASE_URL + "/sdk", fetchData)
      .then((cards) => {
        cards.json().then((result) => {
          this.setState({
            sdkItem: result ? result : [],
            currentSdkSelect: result[0],
            isLoading: false,
            currentItemSelect: null,
          });
        });
      })
      .catch(console.log);
  };
  toggle(action) {
    this.setState({
      modal: !this.state.modal,
      action,
      isLoading: false,
      updateId: "",
      title_en: "",
      title_jp: "",
      video: "",
      description_en: "",
      description_jp: "",
      deleted: false,
      errors: {},
      openDate: new Date(),
      name: "",
      image: "",
      title: "",
      description: "",
      linkdetail: "",
      level: "K1",
      sdktype: "1",
      companyid: "",
    });
  }
  execUpdate = (item) => {
    const { sdkItem } = this.state;
    const currentSelected = sdkItem.find((i) => i.name === item.level);
    this.setState({
      action: "update",
      updateId: item._id,
      title_en: item.title_en || "",
      title_jp: item.title_jp || "",
      description_en: item.description_en || "",
      description_jp: item.description_jp || "",
      image: item.image,
      video: item.video,
      openDate: new Date(),
      modal: !this.state.modal,
      name: item.name || "",
      image: item.image || "",
      title: item.title || "",
      description: item.description || "",
      linkdetail: item.linkdetail || "",
      level: item.level || "",
      sdktype: item.sdktype || "",
      companyid: item.companyid || "",
      currentSdkSelect: currentSelected,
    });
  };
  cancelCreate() {
    this.setState({
      modal: false,
      updateId: "",
      title_en: "",
      title_jp: "",
      description_en: "",
      description_jp: "",
      image: "",
      video: "",
      openDate: new Date(),
      name: "",
      image: "",
      title: "",
      description: "",
      linkdetail: "",
      level: "K1",
      sdktype: "1",
      companyid: "",
      currentSdkSelect: this.state.sdkItem[0],
    });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  deleteCard = (id) => {
    if (window.confirm("Are you sure to delete this item?")) {
      const fetchData = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ id: id }),
      };
      fetch(BASE_URL + "/itemSdk/deleteItem", fetchData)
        .then(() => {
          this.setState({ deleted: "Item deleted", created: "" });
          // reload list
          this.loadData();
        })
        .catch((e) => {
          console.log("e", e);
        });
    }
  };
  handlePageChange = async (pageNumber) => {
    this.setState({ activePage: pageNumber, isLoading: true }, () => {
      this.loadData();
    });
  };
  onDateChange = (date) => {
    if (date) {
      // date.setMinutes(0);
      // date.setSeconds(0);
      // date.setMilliseconds(0);
      this.setState({ openDate: date });
    }
  };

  changeSdkType = (e) => {
    e.preventDefault();
    const { sdkItem } = this.state;
    let data = sdkItem.find((item) => item.name === e.target.value);
    if (data) {
      this.setState({
        currentSdkSelect: data,
        level: data.name,
        sdktype: "1",
      });
    }
  };
  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      sdktype: e.target.value,
    });
  };

  goSearch() {
    this.loadData();
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  updateApp = () => {
    console.log("this.state", this.state);
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const id = this.state.updateId;
      // process utc time
      // end process utc time
      const body = {
        name: this.state.name.trim() || "",
        image: this.state.image.trim() || "",
        title: this.state.title.trim() || "",
        description: this.state.description.trim() || "",
        linkdetail: this.state.linkdetail.trim() || "",
        level: this.state.level || "",
        sdktype: this.state.sdktype || "",
        companyid: this.state.companyid || "",
      };
      if (this.state.action === "update") {
        const fetchData = {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(body),
        };
        fetch(BASE_URL + `/itemSdk/${id}`, fetchData)
          .then(async () => {
            this.cancelCreate();
            this.loadData();
            this.setState({
              created: "News updated successfully",
              isLoading: false,
              deleted: false,
            });
          })
          .catch(console.log);
      } else {
        const fetchData = {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        };
        console.log(fetchData);
        fetch(BASE_URL + "/itemSdk", fetchData)
          .then(async () => {
            this.cancelCreate();
            this.loadData();
            this.setState({
              created: "News created successfully",
              isLoading: false,
              deleted: false,
            });
          })
          .catch(console.log);
      }
    }
  };

  getBadgeSDK(type, i) {
    const { sdkItem } = this.state;
    if(type == "K1" || type == "K2" || type == "K3" || type == "K4")
    {
      sdkItem.splice(i, 1)
      this.setState({ sdkItem: sdkItem })
    }
    switch (type) {
      case 'K5': return 'Hỗ trợ giảm lão hoá da'
      case 'K6': return 'Hỗ trợ điều trị mụn'
      case 'K7': return 'Hỗ trợ giảm quầng thâm mắt'
      case 'K8': return 'Hỗ trợ giảm lỗ chân lông'
      case 'K9': return 'Hỗ trợ giảm thâm nám da'
    }
  }

  render() {
    const {
      data,
      title_en,
      title_jp,
      description_en,
      description_jp,
      video,
      errors,
      openDate,
      name,
      image,
      title,
      description,
      linkdetail,
      level,
      sdktype,
      companyid,
      sdkItem,
      key,
      currentSdkSelect,
    } = this.state;
    const page = this.state.activePage;
    const limit = this.state.itemPerPage;
    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.created}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i>Sản phẩm gợi ý
                  <div style={styles.tags}>
                    <Input
                      style={styles.searchInput}
                      onChange={(e) => this.inputChange(e)}
                      name="key"
                      value={key}
                      placeholder="Tìm kiếm"
                    />
                    <Button
                      outline
                      color="success"
                      style={styles.marginCenter}
                      size="sm"
                      onClick={(e) => this.goSearch()}
                    >
                      Tìm kiếm
                    </Button>
                    <Button
                      outline
                      color="primary"
                      style={styles.marginCenter}
                      size="sm"
                      onClick={(e) => this.toggle("new")}
                    >
                      Thêm
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>

                  <table ble className="table table-hover table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>
                        <th className="text-center">Tên</th>
                        <th className="text-center">Hình ảnh</th>
                        <th className="text-center">Tiêu đề</th>
                        <th className="text-center">Mô tả</th>
                        <th className="text-center">Đường dẫn chi tiết</th>
                        <th className="text-center">Loại sdk</th>
                        <th className="text-center">Cấp độ</th>
                        <th className="text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <td colSpan="10" hidden={this.state.hidden} className="text-center">Không tìm thấy dữ liệu</td>
                      {data.map((item, i) => {
                        item.description = item.description || "";
                        return (
                          <tr key={i}>
                            <td className="text-center">
                              {(page - 1) * limit + i + 1}
                            </td>
                            <td className="text-center">{item.name}</td>
                            <td className="text-center">
                              <a href={item.image} target="_blank">
                                {item.image ? "View Image" : ""}
                              </a>
                            </td>
                            <td className="text-center">
                              {item.title.substr(0, 100) +
                                (item.title.length > 100 ? "..." : "")}
                            </td>
                            <td className="text-center">{item.description}</td>
                            <td className="text-center">
                              <a target="_blank" href={item.linkdetail}>Chi tiết sản phẩm</a>
                            </td>
                            <td className="text-center">{item.level}</td>
                            <td className="text-center">{item.sdktype}</td>
                            <td className="text-center">
                              <Button
                                outline
                                color="primary"
                                size="sm"
                                onClick={(e) => this.execUpdate(item)}
                              >
                                Cập nhật
                              </Button>
                              &nbsp;
                              <Button
                                outline
                                color="danger"
                                size="sm"
                                onClick={(e) => this.deleteCard(item._id)}
                              >
                                Xóa
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CardBody>
              </Card>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemPerPage}
                totalItemsCount={this.state.itemsCount}
                pageRangeDisplayed={10} // so luong item hien thi tren pagination number
                onChange={(e) => this.handlePageChange(e)}
                itemClass="page-item"
                linkClass="page-link"
              />
            </Col>
          </Row>
          <Modal
            isOpen={this.state.modal}
            toggle={(e) => this.cancelCreate()}
            className={this.props.className}
          >
            <ModalHeader toggle={() => this.toggle()}>
              {this.state.action === "update" ? "Cập nhật" : "Tạo mới "}
            </ModalHeader>
            <ModalBody>
              <Form>
                {/*<FormGroup>*/}
                <TextFieldGroup
                  field="name"
                  label="Tên sản phẩm"
                  value={name}
                  error={errors.name}
                  onChange={(e) => this.inputChange(e)}
                />
                <TextFieldGroup
                  field="image"
                  label="Hình ảnh"
                  value={image}
                  error={errors.image}
                  onChange={(e) => this.inputChange(e)}
                />
                <TextFieldGroup
                  field="title"
                  label="Tiêu đề"
                  value={title}
                  error={errors.title || ""}
                  onChange={(e) => this.inputChange(e)}
                />
                <TextArea
                  field="description"
                  label="Mô tả"
                  value={description}
                  error={errors.description}
                  onChange={(e) => this.inputChange(e)}
                  rows="7"
                />
                <TextFieldGroup
                  field="linkdetail"
                  label="Link Detail"
                  value={linkdetail}
                  error={errors.linkdetail || ""}
                  onChange={(e) => this.inputChange(e)}
                />
                <FormGroup row>
                  <Col md="3">
                    <label htmlFor="tag">Loại SDK:</label>
                  </Col>
                  <Col md="9">
                    <select
                      name="level"
                      value={currentSdkSelect.name}
                      onChange={(e) => this.changeSdkType(e)}
                    >
                      {
                        sdkItem.map((item, i) => {
                          return (
                            <option key={i} value={item.name}>
                              {
                                this.getBadgeSDK(item.name, this.isValid)
                              }
                            </option>
                          )
                        })
                      }


                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="3">
                    <label htmlFor="tag">Cấp độ:</label>
                  </Col>
                  <Col md="9">
                    {currentSdkSelect.sdktype !== undefined ? (
                      <select
                        name="sdktype"
                        value={sdktype}
                        onChange={(e) => this.changeLevel(e)}
                      >
                        {currentSdkSelect.sdktype.split(",").map((item, i) => {
                          return (
                            <option key={i} value={item}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    ) : null}
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={(e) => { this.updateApp() }}
                disabled={this.state.isLoading}
              >
                Lưu
              </Button>
              &nbsp;&nbsp;
              <Button color="secondary" onClick={(e) => this.cancelCreate()}>
                Hủy
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    }
    return (
      <div id="page-loading">
        <div className="three-balls">
          <div className="ball ball1"></div>
          <div className="ball ball2"></div>
          <div className="ball ball3"></div>
        </div>
      </div>
    );
  }
}

const styles = {
  a: {
    textDecoration: "none",
  },
  floatRight: {
    float: "right",
  },
  floatCenter: {
    float: "center",
  },
  marginCenter: {
    marginLeft: "5px",
    marginRight: "5px",
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
  wh5: {
    width: "5%",
    float: "left",
    height: "70px",
  },
  wh10: {
    width: "9.8%",
    float: "left",
    height: "70px",
  },
  wh15: {
    width: "15%",
    float: "left",
    height: "70px",
  },
  wh20: {
    width: "20%",
    float: "left",
    height: "70px",
  },
  wh25: {
    width: "25%",
    float: "left",
    height: "70px",
  },
  wh30: {
    width: "30%",
    float: "left",
    height: "70px",
  },
  wh40: {
    width: "40%",
    float: "left",
    height: "70px",
  },
  w5: {
    width: "5%",
    float: "left",
  },
  w10: {
    width: "10%",
    float: "left",
  },
  w15: {
    width: "15%",
    float: "left",
  },
  w20: {
    width: "20%",
    float: "left",
  },
  w25: {
    width: "25%",
    float: "left",
  },
  w30: {
    width: "30%",
    float: "left",
  },
  w40: {
    width: "40%",
    float: "left",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // width: "450px",
  },
  searchInput: {
    width: "190px",
    display: "inline-block",
  },
};

export default News;
