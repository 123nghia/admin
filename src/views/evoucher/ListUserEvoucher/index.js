import CIcon from "@coreui/icons-react";
import { CButton, CCol, CRow, CSelect, CTooltip } from "@coreui/react";
import { css } from "@emotion/react";
import { Chip, IconButton, Tooltip } from "@mui/material";
import { BsDownload } from "@react-icons/all-files/bs/BsDownload";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import { FaFileImport } from "@react-icons/all-files/fa/FaFileImport";
import { DatePicker, Select, Tag, Space, Spin } from "antd";
import Pagination from "@material-ui/lab/Pagination";
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
import truncateString from "src/utils/truncateString";
import campaignApi from "src/apis/managerCampaignApi";

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
      loadingCallApi : false,
      totalActive: 0,
      dataApi: [],
      action: "new",
      arrPagination : [],
      phone: "",
      token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      type: localStorage.getItem("type"),
      user: localStorage.getItem("user"),
      company_slug: JSON.parse(localStorage.getItem("user")).company_slug,
      typePartner : JSON.parse(localStorage.getItem("user")).typePartner,
      isLoading: false,
      indexPage : 0,
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
      levelFilter: "",
    };
  }

  async componentDidMount() {
    this.getDataSeo();
    this.getData();
    this.onGetCampaignList();
    this.getDataCompany();
    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].url === window.location.hash) {
        if (arr[i].isHidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }
  async getDataCompany (){
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_ALL_COMPANY;
    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        // params: {
        //   company_id,
        //   keyword: key,
        // },
      })
      .then((res) => {
        let val = res.data.data;  
        console.log(val.length)

        val.push({
          company_id: "",
          Name : "Tất cả"
        })  
        console.log(val.length)
        this.setState({ dataCompany : val });
      });
  }
  async onGetCampaignList() {
    await campaignApi
      .fecthAllCampaignList()
      .then((res) => {
        let campaignList = res.data.data;
        campaignList.push({
          name : "Không có",
        })
        this.setState({ dataCampaign : campaignList });

      })
      .catch((err) => console.log(err));
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
    const { from, to, idDataSales, phoneFilter, levelFilter, codeVoucher, idDataCompany } =
      this.state;
    await this.getData(
      idDataSales,
      phoneFilter,
      levelFilter,
      codeVoucher,
      from,
      to,
      idDataCompany
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
        console.log(res)
        var val = res.data.data;
        this.setState({
          dataSales: this.state.dataSalesDefault.concat(val),
        });
      });
  }
  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 50;
    var arrTotal = [];
    if (dataApi.length > 0) {
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
    
      this.setState({ arrPagination: arrTotal, data: arrTotal[this.state.indexPage] });
    }
  }
  async getData(saleId, phoneNumber, status, voucherCode, from, to,idDataCompany) {
    this.setState({
      loadingCallApi : true,
    })
    const { company_id } = this.state;
    let company_id_output = "";
    if(this.state.type !== "0"){
      company_id_output = this.state.company_id;
    }else{
      company_id_output = idDataCompany;
    }
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = null;
    if(this.state.typePartner){
      baseUrlCallApi = Constants.GET_USER_EVOUCHER_FOR_PARTNER;
    }else{
      baseUrlCallApi = Constants.GET_USER_EVOUCHER;
    }
    let url = baseUrlapi + baseUrlCallApi;
    let outputPartnerId = "";
    if(this.state.typePartner){
      outputPartnerId = this.state.company_id;
    }else{
      outputPartnerId = null;
    }
    await axios
      .get(url, {
        params: {
          saleId: saleId,
          partner : this.state.company_slug,
          partnerID : outputPartnerId,  
          phoneNumber,
          from,
          to,
          status,
          voucherCode,
          roleType: this.state.type,
          userId: JSON.parse(this.state.user).sale_id,
          company_id : company_id_output,
        },
      })
      .then((res) => {
        this.setState({
          loadingCallApi : false,
        })

       
        let val = res.data.data;
        this.setState({ dataApi: val });
        console.log('res',res);
        this.pagination(val);
        let active = 0;
        
        this.setState({ isLoading: false, totalActive: active , total : res.data.total });

        console.log(res.data.data);
      }).catch((err) => {
        this.setState({
          loadingCallApi : true,
        })
      })
  }

  onChange(key, val) {
    this.setState({ [key]: val });
  }

  inputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCloseModal() {
    this.setState({ toggleHistory: !this.state.toggleHistory });
  }

  render() {
    const { dataApi, toggleHistory, idHistory } = this.state;

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
      {
        item : ""
      }
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
      "Nhà cung cấp",

      "Lịch sử soi da",
      "Sale theo dõi",
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
              type="text"
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
                    {item.item === "A" ? 'Đã nhận voucher' : item.item === "0" ? 'Đã check-in' : item.item === "1" ? 'Hoàn thành' : item.item === "2" ? 'Hủy bỏ' : 'Tất cả'}
                  </option>
                ))}
              </CSelect>
            </div>
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
        {
         this.state.type !== "0" ? null :  <CCol md={3} className="mt">
         <div className="">
           <p className="title_filter">Nhà cung cấp</p>
           <div style={{ width: "200px" }}>
             <Select
               className="select_seo"  
               showSearch
               placeholder="Lọc theo ncc"
               optionFilterProp="children"
               onChange={(value) =>
                 this.setState({
                   idDataCompany : value,
                 })
               }
               onSearch={this.onSearchSelect}
               filterOption={(input, option) =>
                 option.children
                   .toLowerCase()
                   .indexOf(input.toLowerCase()) >= 0
               }
             >
               {this.state.dataCompany
                 ? this.state.dataCompany.map((item, i) => {
                     return (
                       <Option value={item._id}>{item.Name}</Option>
                     );
                   })
                 : null}
             </Select>
           </div>
         </div>
       </CCol>
       }
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
        
   
      
      </CRow>
    );

    const renderUserVoucherList = () => (
      <div>
       <h5>Tổng số: {this.state.total ? this.state.total : ""}</h5>  
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
                    {item.fullName?.toLowerCase()}
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
                  </td>
                  <td className="text-center">{formatDate(item.create_at)}</td>
                  <td className="text-center">{item.slug}</td>

                  <td className="text-center">
                    {item?.historyId ? (
                      <CButton
                        shape="rounded-pill"
                        variant="outline"
                        color="info"
                        style={{ textAlign: "center" }}
                        size="md"
                        onClick={(e) => {
                          this.setState({
                            idHistory: item?.historyId,
                            toggleHistory: !toggleHistory,
                          });
                        }}
                      >
                        <CIcon name="cil-magnifying-glass" />
                      </CButton>
                    ) : (
                      <p>Chưa soi da</p>
                    )}
                  </td>
                  <td className="text-center">{item.saleFollow}</td>
                  {/* <td className="text-center">
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={truncateString("Chưa có", 20)}
                    />
                  </td> */}
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
      <div style={{ float: "right" }}>
                    <Pagination
                      count={this.state.arrPagination.length}
                      color="primary"
                      onChange={(e, v) => {
                        this.setState({
                          data: this.state.arrPagination[v - 1],
                          indexPage: v - 1,
                        });
                      }}
                    />
                  </div>
      </div>
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

                <div className="flex-center-space">
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

              <CardBody className="table__overflow">
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
              {
                this.state.loadingCallApi ? <div className='text-center'>  
                <Space size="middle">        
                  <Spin size="large" />
                </Space>
              </div> :
              <div>
              <h5>Tổng số: {this.state.total ? this.state.total : ""}</h5>  
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
                 {this.state.data && this.state.data.length > 0 ? (
                   this.state.data.map((item, i) => {
                     return (
                       <tr key={i}>
                         <td className="text-center">{i + 1}</td>
                         <td
                           className="text-center"
                           style={{ fontWeight: "bold", textTransform: "capitalize" }}
                         >
                           {item.fullName?.toLowerCase()}
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
                         </td>
                         <td className="text-center">{formatDate(item.create_at)}</td>
                         <td className="text-center">{item.slug}</td>
       
                         <td className="text-center">
                           {item?.historyId ? (
                             <CButton
                               shape="rounded-pill"
                               variant="outline"
                               color="info"
                               style={{ textAlign: "center" }}
                               size="md"
                               onClick={(e) => {
                                 this.setState({
                                   idHistory: item?.historyId,
                                   toggleHistory: !toggleHistory,
                                 });
                               }}
                             >
                               <CIcon name="cil-magnifying-glass" />
                             </CButton>
                           ) : (
                             <p>Chưa soi da</p>
                           )}
                         </td>
                         <td className="text-center">{item.saleFollow && item.saleFollow.length !== 0 && typeof(item.saleFollow) === 'array' ? item.saleFollow?.map((item)=>{
                            return item
                         }) : null}</td>
                         {/* <td className="text-center">
                           <Chip
                             icon={<AccessTimeIcon />}
                             label={truncateString("Chưa có", 20)}
                           />
                         </td> */}
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
              <div style={{ float: "right" }}>
                           <Pagination
                             count={this.state.arrPagination.length}
                             color="primary"
                             onChange={(e, v) => {
                               this.setState({
                                 data: this.state.arrPagination[v - 1],
                                 indexPage: v - 1,
                               });
                             }}
                           />
              </div>
             </div>
                 
               }
                
              </CardBody>
            </Card>
            <IframeModal
              toggleView={toggleHistory}
              link={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory}
              closeModal={() => this.handleCloseModal()}
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
