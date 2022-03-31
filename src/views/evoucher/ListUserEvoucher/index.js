import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow, CSelect, CTooltip } from "@coreui/react";
import { css } from "@emotion/react";
import { Chip, IconButton, Tooltip } from "@mui/material";
import { BsDownload } from "@react-icons/all-files/bs/BsDownload";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import { FaFileImport } from "@react-icons/all-files/fa/FaFileImport";
import { DatePicker, Select, Tag } from "antd";
import "antd/dist/antd.css";
import axios from "axios";
import "moment-timezone";
import React, { Component, Fragment } from "react";
import { MdOpenInNew } from "react-icons/md";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { Card, CardBody, CardHeader, Col, Input, Row } from "reactstrap";
import formatDate from "src/utils/formatDate";
import * as XLSX from "xlsx";
import Constants from "../../../contants/contants";
import IframeModal from "../../../views/components/Iframe";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import CopyToClipboard from "react-copy-to-clipboard";
import { freeSet } from "@coreui/icons";
import { Box } from "@mui/system";

const { Option } = Select;

let headers = new Headers();
const auth = localStorage.getItem("auth");
headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");
const dateFormat = "DD/MM/YYYY";
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;

class ListUserEvoucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_id: JSON.parse(localStorage.getItem("user")).company_id
        ? JSON.parse(localStorage.getItem("user")).company_id
        : null,
      key: "",
      totalActive: 0,
      dataApi: [],
      action: "new",
      phone: "",
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      isLoading: false,
      idHistory: "",
      toggleHistory: false,
      from: "",
      to: "",
      dataSalesDefault: [
        {
          _id: "",
          Name: "Không có",
        },
      ],
      levelFilter: "0",
    };
  }

  async componentDidMount() {
    this.getDataSeo();
    this.getData();

    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url === window.location.hash) {
        if (arr[i].isHidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }

  OpenFileExcel = () => {
    this.setState({
      statusExcel: !this.state.statusExcel,
    });
  };

  readExcel = (file) => {
    var btnOuter = document.getElementById("button_outer"),
      name_excel = document.getElementById("name_excel");

    btnOuter.classList.add("file_uploading");

    setTimeout(function () {
      btnOuter.classList.add("file_uploaded");
      btnOuter.style.borderRadius = "50%";
    }, 3000);

    name_excel.innerHTML = `${file.name}`;

    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      console.log(data);
    });
  };

  async ExportsFileExcel() {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.EXPORT_CUSTOMER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        let a = document.getElementById("download_excel");
        if (a) {
          a.href = `${baseUrlapi}${res.data.data.url}`;
        }
        a.click();
      });
  }

  changeLevel = (e) => {
    e.preventDefault();
    this.setState({
      status: e.target.value,
    });
  };

  changeLevelValue = (e, value) => {
    e.preventDefault();
    this.setState({
      [value]: e.target.value,
    });
  };

  async onSearch() {
    const { from, to, idDataSales, phoneFilter, levelFilter, codeVoucher } =
      this.state;
    await this.getData(
      idDataSales,
      phoneFilter,
      levelFilter,
      codeVoucher,
      from,
      to
    );
  }

  async getDataSeo() {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.PLUGIN_SUBSALE_USER2;

    let url = baseUrlapi + baseUrlCallApi;

    await axios
      .get(url, {
        params: {
          company_id,
        },
      })
      .then((res) => {
        var val = res.data.data;
        this.setState({
          dataSales: this.state.dataSalesDefault.concat(val),
        });
      });
  }

  async getData(saleId, phoneNumber, status, voucherCode, from, to) {
    const { company_id } = this.state;

    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_USER_EVOUCHER;

    let url = baseUrlapi + baseUrlCallApi;

    // API search for user evoucher table
    await axios
      .get(url, {
        params: {
          saleId: saleId,
          phoneNumber,
          from,
          to,
          status,
          voucherCode,
          roleType: this.state.type,
          userId: JSON.parse(this.state.user).sale_id,
          company_id,
        },
      })
      .then((res) => {
        let val = res.data.data;
        this.setState({ dataApi: val });

        let active = 0;

        this.setState({ isLoading: false, totalActive: active });

        console.log(res.data.data);
      });
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { dataApi, toggleHistory, idHistory } = this.state;

    function closeModal() {
      this.setState({ toggleHistory: !toggleHistory });
    }

    const arrLevelFilter = [
      {
        item: "A",
      },
      {
        item: "0",
      },
      {
        item: "1",
      },
      {
        item: "2",
      },
    ];

    const checkStatusUserVoucherColor = (status) => {
      const statusColorMap = {
        2: "#2eb85c",
        A: "#2db7f5",
        1: "#87d068",
        0: "#dc0e04",
      };

      return statusColorMap[status] || "#FF0004";
    };
    const checkStatusUserVoucherContent = (status) => {
      const statusContentMap = {
        A: "Đã nhận voucher",
        0: "Đã check-in",
        1: "Hoàn thành",
        2: "Hủy bỏ",
      };

      return statusContentMap[status] || "Chưa xác nhận";
    };

    const headingList = [
      "STT.",
      "Họ tên",
      "Số điện thoại",
      "Tỉnh Thành",
      "Mã Voucher",

      "Trạng thái",
      "Ngày nhận",
      "Lịch sử soi da",
      "Sale theo dõi",
      "Ghi chú mới nhất",
      "",
    ];

    const renderRowSearch = () => (
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
            <p className="title_filter">Trạng thái</p>
            <div style={{ width: "200px" }} className="">
              <CSelect
                onChange={async (e) => {
                  this.changeLevelValue(e, "levelFilter");
                }}
                custom
                size="md"
                name="levelFilter"
                id="SelectLm"
              >
                {arrLevelFilter.map((item, i) => (
                  <option selected key={i} value={item.item}>
                    {checkStatusUserVoucherContent(item.item)}
                  </option>
                ))}
              </CSelect>
            </div>
          </div>
        </CCol>
        <CCol md={3} className="mt">
          <p className="title_filter">Từ ngày</p>
          <div>
            <DatePicker
              style={styles.dateForm}
              onChange={(e, dateString) => {
                let copy = dateString.split("-");
                let newData = ``;
                copy.forEach((item, index) => {
                  if (index === 0) {
                    newData += item;
                  } else {
                    newData += `/${item}`;
                  }
                });
                this.setState({ from: newData });
              }}
              format={dateFormat}
            />
          </div>
        </CCol>
        <CCol md={3} className="mt">
          <p className="title_filter">Đến ngày</p>
          <div>
            <DatePicker
              style={styles.dateForm}
              onChange={(e, dateString) => {
                let copy = dateString.split("-");
                let newData = ``;
                copy.forEach((item, index) => {
                  if (index === 0) {
                    newData += item;
                  } else {
                    newData += `/${item}`;
                  }
                });
                this.setState({ to: newData });
              }}
              format={dateFormat}
            />
          </div>
        </CCol>
        <CCol md={3} className="mt">
          <div className="">
            <p className="title_filter">Danh sách Sales</p>
            <div style={{ width: "200px" }}>
              <Select
                className="select_seo"
                showSearch
                placeholder="Lọc theo Sales"
                optionFilterProp="children"
                onChange={(value) =>
                  this.setState({
                    idDataSales: value,
                  })
                }
                onSearch={this.onSearchSelect}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {this.state.dataSales
                  ? this.state.dataSales.map((item, i) => {
                      return <Option value={item._id}>{item.Name}</Option>;
                    })
                  : null}
              </Select>
            </div>
          </div>
        </CCol>
      </CRow>
    );

    const renderUserVoucherList = () => (
      <table
        ble
        className="table mt-3 table-hover table-outline mb-0 d-none d-sm-table table_dash"
      >
        <thead className="thead-light">
          <tr>
            {headingList.map((title) => (
              <th className="text-center">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataApi ? (
            dataApi.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{i + 1}</td>
                  <td
                    className="text-center"
                    style={{ fontWeight: "bold", textTransform: "capitalize" }}
                  >
                    {item.fullName.toLowerCase()}
                  </td>
                  <td className="text-center">{item.phoneNumber}</td>
                  <td className="text-center"> TP. Hồ Chí Minh</td>
                  <td className="text-center">
                    {item.voucherCode && (
                      <Box sx={{ display: "flex" }}>
                        <Chip
                          label={item.voucherCode}
                          variant="outlined"
                          sx={{ backgroundColor: "#9fcfde", border: "none" }}
                        />

                        <CopyToClipboard
                          text={item.voucherCode}
                          onCopy={() => {}}
                        >
                          <Tooltip title="Copy">
                            <IconButton size="small">
                              <CIcon content={freeSet.cilCopy} />
                            </IconButton>
                          </Tooltip>
                        </CopyToClipboard>
                      </Box>
                    )}
                  </td>
                  <td className="text-center">
                    <Tag
                      className="ant-tag"
                      color={checkStatusUserVoucherColor(item.status)}
                    >
                      {checkStatusUserVoucherContent(item.status)}
                    </Tag>

                    {this.state.type === "0" ? (
                      <div>
                        <CButton
                          shape="rounded-pill"
                          variant="ghost"
                          color="info"
                          style={styles.mgl5}
                          size="md"
                          onClick={(e) => this.openEditVoucher(item)}
                        >
                          {/* <FiEdit3 style={styles.icon} name="cilPencil" /> */}
                          Thay đổi
                        </CButton>
                      </div>
                    ) : null}
                  </td>
                  <td className="text-center">{formatDate(item.create_at)}</td>
                  <td className="text-center">
                    <CButton
                      shape="rounded-pill"
                      variant="outline"
                      color="info"
                      style={{ textAlign: "center" }}
                      size="md"
                      onClick={(e) => {
                        this.setState({
                          idHistory: item.skinHistory,
                          toggleHistory: !toggleHistory,
                        });
                      }}
                    >
                      <CIcon name="cil-magnifying-glass" />
                    </CButton>
                  </td>
                  <td className="text-center">{item.saleFollow}</td>
                  <td className="text-center">
                    <Chip
                      sx={{ marginLeft: "1.3rem" }}
                      icon={<AccessTimeIcon />}
                      label="Đã check in vào 10:30"
                    />
                  </td>
                  <td className="text-center">
                    <Link to={`/detail-evoucher/${item._id}`}>
                      <Tooltip title="Xem chi tiết">
                        <IconButton size="small">
                          <LaunchOutlinedIcon sx={{ color: "#3C93E3" }} />
                        </IconButton>
                      </Tooltip>
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <td colSpan="10" className="text-center">
              Không tìm thấy dữ liệu
            </td>
          )}
        </tbody>
      </table>
    );

    this.state.isLoading && (
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

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify title_header">
                  Danh sách người nhận Voucher
                </i>

                {renderRowSearch()}

                <div className="flex-center-space mt-4">
                  <div class=" flex">
                    <CButton
                      color="success"
                      style={{ marginRight: "10px" }}
                      size="md"
                      className="flex-center"
                      onClick={this.OpenFileExcel}
                    >
                      <FaFileImport style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Import</p>
                    </CButton>
                    <a href="/excel/template-import-voucher.xlsx" download>
                      <CButton
                        color="success"
                        style={{ marginRight: "10px" }}
                        size="md"
                        className="flex-center"
                      >
                        <BsDownload style={{ margin: "auto 6px auto 0" }} />
                        <p style={{ margin: "auto 0" }}>Tải file mẫu</p>
                      </CButton>
                    </a>
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
                    <div></div>
                  </div>
                  <div>
                    <CButton
                      color="info"
                      size="md"
                      className="btn-main"
                      onClick={(e) => {
                        this.onSearch();
                      }}
                    >
                      <BsSearch style={{ margin: "auto 6px auto 0" }} />
                      <p style={{ margin: "auto 0" }}>Tìm kiếm</p>
                    </CButton>
                  </div>
                </div>
              </CardHeader>

              <CardBody>
                <div
                  className="pb-3"
                  style={{
                    display: this.state.statusExcel ? "block" : "none",
                  }}
                >
                  <div className="button_outer" id="button_outer">
                    <div className="btn_upload">
                      <input
                        id="upload_file"
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          this.readExcel(file);
                        }}
                      />
                      <div className="flex-center">
                        <svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="upload"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                        <p>Tải lên File Excel</p>
                      </div>
                    </div>
                    <div className="processing_bar"></div>
                    <div className="success_box"></div>
                  </div>

                  <div className="name_excel" id="name_excel"></div>
                </div>

                {renderUserVoucherList()}
              </CardBody>
            </Card>
            <IframeModal
              toggleView={toggleHistory}
              link={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory}
              closeModal={closeModal}
            />
          </Col>
        </Row>
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
  dateForm: {
    width: "200px",
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
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
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

export default ListUserEvoucher;
