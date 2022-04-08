import { CButton, CFormGroup, CInputCheckbox, CLabel } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { Select } from "antd";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import DotLoader from "react-spinners/DotLoader";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import API_CONNECT from "../../../functions/callAPI";
import Constants from "./../../../contants/contants";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      salesSelector: [],
      saleGroupList: [
        {
          name: "Nguyễn Thị Tú",
          manager: "Admin",
          phone: "0226548789",
          email: "sale01@gmail.com",
          noted: "sale01",
          create_at: "e10adc3949ba59abbe56e057f20f883e",
          evoucherPerMonth: "0966666555",
          customerCheckinPerMonth: "61683902c1f0972cd89513df",
          campaignInfo: [
            {
              name: "Chiến dịch soi da Seoul Spa",
              vendor: "Seoul Spa",
              from: "2022-03-21T03:42:41.549Z",
              to: "2022-04-21T03:42:41.549Z",
              amountEvoucher: 1000,
              customerCheckin: 12,
              percentageCustomerCheckin: 0.02,
              noted: "",
            },
          ],
          createdBy: "sale01",
        },
      ],
      data: [],
      key: "",
      keyRole: "",
      keyStatus: "",
      modalCom: false,
      dataApi: JSON.parse(localStorage.getItem("sales")) || [],
      action: "new",
      Name: "",
      Email: "",
      Phone: "",
      Address: "",
      Company_Id: "",
      UserName: "",
      Password: "",
      Status: "",
      Title: "",
      SaleIds: "",
      LeadIds: "",
      Description: "",
      modalDelete: false,
      modalRole: false,
      arrPagination: [],
      indexPage: 0,
      dataCompany: [],
      dataRole: [],
      isLoading: false,
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      userData: localStorage.getItem("user"),
      hidden: true,
      arrRoleSubAdmin: [],
      idChangeRole: "",
    };
  }
  async componentDidMount() {
    this.getData();
    this.getAllRole();
    // await this.getAllSale();
    let arr = JSON.parse(localStorage.getItem("url"));

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url === window.location.hash) {
        if (arr[i].isHidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }

  //   async getAllSale() {
  //     await axios.get(Constants.BASE_URL + Constants.GET_ALL_SALE).then((res) => {
  //       this.setState({ saleGroupList: res.data.data });
  //       console.log(res.data.data);
  //     });
  //   }
  async getAllRole() {
    const resRole = await axios({
      baseURL: Constants.BASE_URL,
      url: Constants.PLUGIN_LIST_ROLE,
      method: "POST",
      headers: this.state.token,
    });
    this.setState({ dataRole: resRole.data.data });
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

    if (arrTotal.length === 0) {
      this.setState({
        hidden: false,
      });
    } else {
      this.setState({
        hidden: true,
      });
    }

    this.setState({
      arrPagination: arrTotal,
      data: arrTotal[this.state.indexPage],
    });
  }

  getData = async () => {
    const { userData } = this.state;
    console.log(userData);
    this.setState({ isLoading: true });
    const res = await API_CONNECT(
      Constants.LIST_SALE_GROUP,
      {
        SaleIds: JSON.parse(userData).sale_id,
        LeadIds: JSON.parse(userData).sale_id,
      },
      this.state.token,
      "POST"
    );

    let val = res.data;

    console.log("Thông tin nhóm sale:", val);
    this.pagination(val);
    this.setState({ dataApi: val });

    let active = 0;

    val.map((val) => {
      if (val.Status === "Actived") {
        active = active + 1;
      }
    });

    this.setState({ isLoading: false, totalActive: active });
    console.log("sales", JSON.parse(localStorage.getItem("sales")));
  };

  toggleModal(key) {
    if (key === "new") {
      this.setState({
        modalCom: !this.state.modalCom,
        action: key,
        Title: "",
        Description: "",
        SaleIds: "",
      });
    }
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  handleChange = (value) => {
    this.setState({ salesSelector: value });
    // console.log(`selected ${value}`)
  };

  handleAddSale(saleInfo) {
    let active = 0;

    this.setState({ isLoading: true });

    const newDataApi = [...this.state.dataApi];

    console.log("newDataApi", newDataApi);

    newDataApi.push(saleInfo);

    this.setState({ dataApi: newDataApi });

    console.log(newDataApi);
    localStorage.setItem("sales", JSON.stringify(newDataApi));

    this.pagination(newDataApi);

    // console.log(this.state.dataApi)
    newDataApi.map((val) => {
      if (val.Status === "Actived") {
        active = active + 1;
      }
    });

    this.setState({ isLoading: false, totalActive: active });
  }
  async addUsers() {
    const { Description, Title, SaleIds, LeadIds, salesSelector } = this.state;
    if (
      Description === null ||
      Description === "" ||
      Title === null ||
      Title === "" ||
      SaleIds === null ||
      SaleIds === ""
    ) {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return;
    }

    const body = {
      Description,
      LeadIds,
      Title,
      SaleIds,
      saleGroup: salesSelector,
    };
    this.setState({ isLoading: true });

    const res = await API_CONNECT(Constants.ADD_SALE_GROUP, body, "", "POST");

    if (res.is_success === true) {
      this.handleAddSale(body);
      // this.getData();
      this.setState({ modalCom: !this.state.modalCom });
      this.setState({
        errorMessage: "",
      });
    } else {
      // alert(res.message);
      this.setState({ isLoading: false });
    }
    if (res.status === 202) {
      this.setState({
        errorMessage: res.message,
      });
      console.log(this.state.errorMessage);
    }
  }

  openUpdate(item) {
    const { dataApi } = this.state;

    const idxItem = dataApi.findIndex((data) => data.Title === item);

    this.setState({
      modalCom: !this.state.modalCom,
      action: "update",
      Title: dataApi[idxItem].Title,
      LeadIds: dataApi[idxItem].LeadIds,
      SaleIds: dataApi[idxItem].SaleIds,
      Description: dataApi[idxItem].Description,
    });
  }

  async updateUsers() {
    const { Title, SaleIds, LeadIds, Description, dataApi } = this.state;
    console.log(Title, SaleIds, LeadIds, Description);

    const idxItem = dataApi.findIndex((data) => data.Title === Title);

    const newDataApi = [...dataApi];
    newDataApi.splice(idxItem, 1);
    newDataApi.push({ Title, SaleIds, LeadIds, Description });

    this.setState({ dataApi: newDataApi });
    this.setState({ modalCom: !this.state.modalCom });

    localStorage.setItem("sales", JSON.stringify(newDataApi));

    if (
      Description === null ||
      Description === "" ||
      Title === null ||
      Title === "" ||
      SaleIds === null ||
      SaleIds === ""
    ) {
      alert("Vui lòng nhập đầy đủ trường !!!");
      return;
    }
    const body = {
      Description,
      LeadIds: SaleIds,
      Title,
      SaleIds,
    };

    this.setState({ isLoading: true });
    const res = await API_CONNECT(
      Constants.UPDATE_SALE_GROUP,
      body,
      "",
      "POST"
    );

    if (res.is_success === true) {
      // this.getData();
      this.setState({ modalCom: !this.state.modalCom });
    } else {
      alert(res.message);
      this.setState({ isLoading: false });
    }
  }

  openDelete = (item) => {
    this.setState({
      modalDelete: !this.state.modalDelete,
      delete: item,
    });
  };

  async delete() {
    this.setState({ isLoading: true });
    console.log(this.state.delete["_id"]);
    const res = await API_CONNECT(
      Constants.DELETE_SALE_GROUP,
      {
        id: this.state.delete["_id"],
      },
      "",
      "POST"
    );

    if (res.is_success === true) {
      this.getData();
      this.setState({ modalDelete: !this.state.modalDelete, delete: null });
    } else {
      alert(res.message);
      this.setState({ isLoading: false });
    }
  }

  toggle(action = "") {
    this.setState({
      modal: !this.state.modal,
      image: "",
      url: "",
      isActive: false,
      isLoading: false,
      errors: {},
      action,
      position: 1,
      data: [],
      updated: "",
    });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  goSearch() {
    this.getUsers();
  }

  async onChangeRole(item) {
    let body = {
      user_id: item._id,
    };
    const res = await API_CONNECT(
      Constants.GET_ROLE_SUBADMIN,
      body,
      "",
      "POST"
    );
    this.setState({
      modalRole: !this.state.modalRole,
      arrRoleSubAdmin: res.data.sidebar_id,
      idChangeRole: item._id,
    });
  }

  async onSaveRole() {
    const { arrRoleSubAdmin, idChangeRole } = this.state;
    let body = {
      user_id: idChangeRole,
      sidebar: arrRoleSubAdmin,
    };

    const res = await API_CONNECT(
      Constants.ADD_ROLE_SUBADMIN,
      body,
      "",
      "POST"
    );
    if (res.is_success === true) {
      this.getData();
      this.setState({ modalRole: !this.state.modalRole, arrRoleSubAdmin: [] });
    } else {
      alert(res.message);
      this.setState({ isLoading: false });
    }
  }

  handleChangeSaleIds = (value) => {
    this.setState({ SaleIds: value });
  };
  handleChangeLeadIds = (value) => {
    console.log(value);
    this.setState({ LeadIds: value });
  };

  render() {
    const { Option } = Select;

    const { data, saleGroupList, key, action, arrPagination, arrRoleSubAdmin } =
      this.state;

    console.log("Danh sách nhóm sale:", saleGroupList);

    if (!this.state.isLoading) {
      return (
        <div className="animated fadeIn">
          <Row>
            <Col>
              <p style={styles.success}>{this.state.updated}</p>
              <p style={styles.danger}>{this.state.deleted}</p>
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify title_header">
                    Thông tin Nhóm Sales
                  </i>
                </CardHeader>
                <CardBody className="table__overflow">
                  <div class="flex-center">
                    <CButton
                      color="info"
                      style={{
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                      size="md"
                      className="flex-center"
                      onClick={(e) => this.toggleModal("new")}
                    >
                      <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Tạo nhóm</p>
                    </CButton>
                  </div>
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table"
                  >
                    <thead className="thead-light">
                      <tr className="header__table--span">
                        <th className="text-center">#</th>
                        <th colspan="6" className="text-center">
                          Thông tin Nhóm
                        </th>
                        <th colspan="5" className="text-center">
                          Thông tin Doanh Số
                        </th>
                      </tr>
                      <tr className="header__table--bottom">
                        <th className="text-center">STT.</th>
                        <th className="text-center border-left">Tên nhóm</th>
                        <th className="text-center">STT nhóm</th>
                        <th className="text-center">Quản Lý Nhóm</th>
                        <th className="text-center">SĐT</th>
                        <th className="text-center">Email</th>
                        <th className="text-center">Ghi chú</th>
                        <th className="text-center border-left">
                          Tháng Báo Cáo
                        </th>
                        <th className="text-center">Số Evoucher/Tháng</th>
                        <th className="text-center">Số Khách Checkin/Tháng</th>
                        <th className="text-center">Tỷ lệ Khách Checkin</th>
                        <th className="text-center">Xem chi tiết</th>
                        <th className="text-center border-left">Người tạo</th>
                        <th className="text-center">Ngày tạo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {saleGroupList.length ? (
                        saleGroupList.map((item, i) => {
                          console.log(item);
                          return (
                            <tr key={i}>
                              <td className="text-center">{i + 1}</td>
                              <td className="text-center  border-left">
                                {item.name}
                              </td>
                              <td className="text-center">001</td>
                              <td className="text-center">{item.manager}</td>
                              <td className="text-center">{item.phone}</td>
                              <td className="text-center">{item.email}</td>
                              <td className="text-center">{item.noted}</td>
                              <td className="text-center  border-left">{`Tháng ${new Date().getMonth()}`}</td>
                              <td className="text-center">1000</td>
                              <td className="text-center">12</td>
                              <td className="text-center">12%</td>
                              <td className="text-center">
                                <CButton
                                  outline
                                  color="primary"
                                  size="sm"
                                  onClick={(e) => {
                                    this.openUpdate(item.Title);
                                  }}
                                >
                                  Chi tiết
                                </CButton>
                                <td className="text-center">
                                  <CButton
                                    outline
                                    color="primary"
                                    size="sm"
                                    onClick={(e) => this.openUpdate(item.Title)}
                                  >
                                    Sửa
                                  </CButton>{" "}
                                  <CButton
                                    outline
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                      this.openDelete(item);
                                    }}
                                  >
                                    Xoá
                                  </CButton>{" "}
                                </td>
                              </td>
                              <td className="text-center  border-left">
                                Admin
                              </td>
                              <td className="text-center">
                                {new Date().toLocaleDateString("vi-VI")}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <td
                          colSpan="9"
                          hidden={this.state.hidden}
                          className="text-center"
                        >
                          Không tìm thấy dữ liệu
                        </td>
                      )}
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
            </Col>
          </Row>

          {/* modal add/ update sale group */}
          <Modal isOpen={this.state.modalCom} className={this.props.className}>
            <ModalHeader>
              {this.state.action === "new"
                ? `Tạo nhóm sale`
                : `Cập nhật nhóm sales`}
            </ModalHeader>
            <ModalBody>
              <div className="text-center error_msg">
                {this.state.errorMessage !== ""
                  ? `${this.state.errorMessage} !!!`
                  : null}
              </div>
              <Typography
                variant="subtitle1"
                component="h2"
                style={{ margin: "0.6rem 0 0.6rem 0" }}
              >
                Tên Nhóm <span style={{ color: "red" }}>(*)</span>:
              </Typography>
              <TextField
                id="outlined-basic"
                label="Nhập tên nhóm sales"
                variant="outlined"
                fullWidth
                size="small"
              />
              <Typography
                variant="subtitle1"
                component="h2"
                style={{ margin: "1.2rem 0 0.6rem 0" }}
              >
                Trưởng Nhóm <span style={{ color: "red" }}>(*)</span>:
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chọn thông tin trưởng nhóm"
                    size="small"
                  />
                )}
                style={{ minWidth: "100%" }}
              />
            </ModalBody>

            <ModalFooter>
              <CButton
                color="primary"
                onClick={(e) => {
                  this.state.action === "new"
                    ? this.addUsers()
                    : this.updateUsers();
                }}
                disabled={this.state.isLoading}
              >
                Tạo nhóm
              </CButton>{" "}
              <CButton
                color="secondary"
                onClick={(e) => this.toggleModal("new")}
              >
                Huỷ bỏ
              </CButton>
            </ModalFooter>
          </Modal>

          {/* modal delete sale group */}
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
              <label htmlFor="tag">{`Bạn có chắc chắn xóa?`}</label>
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
    width: "250px",
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
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  {
    label: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { label: "The Good, the Bad and the Ugly", year: 1966 },
  { label: "Fight Club", year: 1999 },
  {
    label: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    label: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { label: "Forrest Gump", year: 1994 },
  { label: "Inception", year: 2010 },
  {
    label: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: "Goodfellas", year: 1990 },
  { label: "The Matrix", year: 1999 },
  { label: "Seven Samurai", year: 1954 },
  {
    label: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { label: "City of God", year: 2002 },
  { label: "Se7en", year: 1995 },
  { label: "The Silence of the Lambs", year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: "Life Is Beautiful", year: 1997 },
  { label: "The Usual Suspects", year: 1995 },
  { label: "Léon: The Professional", year: 1994 },
  { label: "Spirited Away", year: 2001 },
  { label: "Saving Private Ryan", year: 1998 },
  { label: "Once Upon a Time in the West", year: 1968 },
  { label: "American History X", year: 1998 },
  { label: "Interstellar", year: 2014 },
  { label: "Casablanca", year: 1942 },
  { label: "City Lights", year: 1931 },
  { label: "Psycho", year: 1960 },
  { label: "The Green Mile", year: 1999 },
  { label: "The Intouchables", year: 2011 },
  { label: "Modern Times", year: 1936 },
  { label: "Raiders of the Lost Ark", year: 1981 },
  { label: "Rear Window", year: 1954 },
  { label: "The Pianist", year: 2002 },
  { label: "The Departed", year: 2006 },
  { label: "Terminator 2: Judgment Day", year: 1991 },
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  { label: "Gladiator", year: 2000 },
  { label: "Memento", year: 2000 },
  { label: "The Prestige", year: 2006 },
  { label: "The Lion King", year: 1994 },
  { label: "Apocalypse Now", year: 1979 },
  { label: "Alien", year: 1979 },
  { label: "Sunset Boulevard", year: 1950 },
  {
    label:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { label: "The Great Dictator", year: 1940 },
  { label: "Cinema Paradiso", year: 1988 },
  { label: "The Lives of Others", year: 2006 },
  { label: "Grave of the Fireflies", year: 1988 },
  { label: "Paths of Glory", year: 1957 },
  { label: "Django Unchained", year: 2012 },
  { label: "The Shining", year: 1980 },
  { label: "WALL·E", year: 2008 },
  { label: "American Beauty", year: 1999 },
  { label: "The Dark Knight Rises", year: 2012 },
  { label: "Princess Mononoke", year: 1997 },
  { label: "Aliens", year: 1986 },
  { label: "Oldboy", year: 2003 },
  { label: "Once Upon a Time in America", year: 1984 },
  { label: "Witness for the Prosecution", year: 1957 },
  { label: "Das Boot", year: 1981 },
  { label: "Citizen Kane", year: 1941 },
  { label: "North by Northwest", year: 1959 },
  { label: "Vertigo", year: 1958 },
  {
    label: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { label: "Reservoir Dogs", year: 1992 },
  { label: "Braveheart", year: 1995 },
  { label: "M", year: 1931 },
  { label: "Requiem for a Dream", year: 2000 },
  { label: "Amélie", year: 2001 },
  { label: "A Clockwork Orange", year: 1971 },
  { label: "Like Stars on Earth", year: 2007 },
  { label: "Taxi Driver", year: 1976 },
  { label: "Lawrence of Arabia", year: 1962 },
  { label: "Double Indemnity", year: 1944 },
  {
    label: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { label: "Amadeus", year: 1984 },
  { label: "To Kill a Mockingbird", year: 1962 },
  { label: "Toy Story 3", year: 2010 },
  { label: "Logan", year: 2017 },
  { label: "Full Metal Jacket", year: 1987 },
  { label: "Dangal", year: 2016 },
  { label: "The Sting", year: 1973 },
  { label: "2001: A Space Odyssey", year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: "Toy Story", year: 1995 },
  { label: "Bicycle Thieves", year: 1948 },
  { label: "The Kid", year: 1921 },
  { label: "Inglourious Basterds", year: 2009 },
  { label: "Snatch", year: 2000 },
  { label: "3 Idiots", year: 2009 },
  { label: "Monty Python and the Holy Grail", year: 1975 },
];

export default User;
