import { CButton } from "@coreui/react";
import { css } from "@emotion/react";
import Pagination from "@material-ui/lab/Pagination";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BsInfoCircleFill } from "@react-icons/all-files/bs/BsInfoCircleFill";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import { Tag } from "antd";
import axios from "axios";
import "moment-timezone";
import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import campaignApi from "src/apis/managerCampaignApi.js";
import Constants from "../../../../contants/contants.js";
import ProviderContent from "./ProviderContent.js";

let headers = new Headers();
const auth = localStorage.getItem("auth");

headers.append("Authorization", "Bearer " + auth);
headers.append("Content-Type", "application/json");

class DetailCampaign extends Component {
  state = {
    tabNameConfig: [
      {
        _id: "t1",
        name: "Thông tin về nhà cung cấp",
        icon: <BsInfoCircleFill style={{ width: "24px ", height: "24px " }} />,
      },
      {
        _id: "t2",
        name: "Thông tin về chiến dịch",
        icon: <BsInfoCircleFill style={{ width: "24px ", height: "24px " }} />,
      },
      {
        _id: "t3",
        name: "Thông tin về voucher",
        icon: <BsInfoCircleFill style={{ width: "24px ", height: "24px " }} />,
      },
    ],
    company_id: JSON.parse(localStorage.getItem("user")).company_id
      ? JSON.parse(localStorage.getItem("user")).company_id
      : null,

    action: "new",
    arrPagination: [],
    data: [],
    dataApi: [],
    hidden: true,
    token: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    role: localStorage.getItem("role"),
    type: localStorage.getItem("type"),

    isChange: true,
    isLoading: false,
    Email: "",
    dataConfigWeb: null,

    actionSlide: "new",

    configData: [
      {
        label: "Trạng thái Facebook",
        value: true,
        key: "fb",
        pass: "",
        code: "",
      },
      {
        label: "Trạng thái Google",
        value: true,
        key: "gg",
        pass: "",
        code: "",
      },
      {
        label: "Trạng thái Zalo",
        value: true,
        key: "gg",
        pass: "",
        code: "",
      },
    ],
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

  handleToggleDetailCampaignTabs(id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
      if (i === id) {
        tablinks[i].classList.add("tabcontent-left-active");
        tabcontent[i].classList.add("defaultOpen");
        tabcontent[i].style.animation = "hideOpa 1s ease-in-out";
      } else {
        tabcontent[i].classList.remove("defaultOpen");
        tablinks[i].classList.remove("tabcontent-left-active");
        tabcontent[i].style.animation = "none";
      }
    }
  }

  pagination(dataApi) {
    var i,
      j,
      temparray,
      chunk = 6;
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

    this.setState({ arrPagination: arrTotal, data: arrTotal[0] });
  }

  async getDetailCampaign(id) {
    await campaignApi.getDetailCampaign(id).then((res) => {
      let val = res.data?.data[0];
      this.setState({
        detailCampaign: val,
      });
    });
  }
  async getDataVoucher(id) {
    var baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_DETAIL_CAMPAIGN_EVOUCHER;

    let url = baseUrlapi + baseUrlCallApi;
    await axios
      .get(url, {
        params: {
          id,
        },
      })
      .then((res) => {
        let val = res.data?.data;
        this.pagination(val);
        this.setState({ dataApi: val });

        let active = 0;

        this.setState({ isLoading: false, totalActive: active });
      });
  }

  async componentDidMount() {
    await this.getDetailCampaign(this.props.match.params.id);
    await this.getDataVoucher(this.props.match.params.id);

    let arr = JSON.parse(localStorage.getItem("url"));
    for (let i = 0; i < arr.length; i++) {
      if ("#" + arr[i].to === window.location.hash) {
        if (arr[i].hidden === true) {
          window.location.href = "#/";
        }
      }
    }
  }

  renderSideTabs = () => {
    return this.state.tabNameConfig.map((item, i) => {
      return (
        <ListItemButton
          key={item._id}
          className={i === 0 ? " tablinks tabcontent-left-active" : " tablinks"}
          onClick={() => this.handleToggleDetailCampaignTabs(i)}
          sx={{ pl: 4 }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            className="tabcontent-left"
            style={{
              fontSize: "14px !important",
              color: "rgb(52, 71, 103)",
            }}
            primary={item.name}
          />
        </ListItemButton>
      );
    });
  };

  render() {
    const { data, arrPagination, detailCampaign } = this.state;

    if (this.state.isLoading) {
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

    return (
      <>
        <div className="animated fadeIn ">
          <div className="header-flex-tabs">
            <div className="detail-campaign-goback-position">
              <Link className="" to="/manage-campaign">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="detail-campaign-goback bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </Link>
            </div>
            <h4 className="detail-title-campaign">Chi tiết chiến dịch</h4>
          </div>
          <div className="flex-tabs">
            <div className="tab">
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                {this.renderSideTabs()}
              </List>
            </div>
            <div className="tabcontents">
              <ProviderContent detailCampaign={detailCampaign} />
              <div className="tabcontent">
                <table className="table table-hover table-outline mb-0 d-none d-sm-table table_dash table-details-campaign">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className="pl-5">Trạng thái chiến dịch</td>
                      <td className="color-red">
                        {detailCampaign ? (
                          <Tag
                            className="ant-tag"
                            color={
                              detailCampaign.status === "1" ? "#87d068" : "#f50"
                            }
                          >
                            {detailCampaign.status === "1"
                              ? "Hoạt động"
                              : "Không hoạt động"}
                          </Tag>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-5">Tên chiến dịch</td>
                      <td className="color-red">
                        {detailCampaign ? detailCampaign.name : ""}
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-5">Nội dung chiến dịch</td>
                      <td className="color-red">...</td>
                    </tr>
                    <tr>
                      <td className="pl-5">Ngày bắt đầu Sales</td>
                      <td className="color-red">
                        {detailCampaign
                          ? new Date(detailCampaign.from).toLocaleDateString()
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-5">Ngày kết thúc Sales</td>
                      <td className="color-red">
                        {detailCampaign
                          ? new Date(detailCampaign.to).toLocaleDateString()
                          : ""}
                      </td>
                    </tr>

                    <tr>
                      <td className="pl-5">Ngày kết thúc chiến dịch</td>
                      <td className="color-red">
                        {detailCampaign
                          ? new Date(
                              detailCampaign.saleEndDate
                            ).toLocaleDateString()
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-5">Ghi chú</td>
                      <td className="color-red">...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tabcontent">
                <table className="table table-hover table-outline mb-0 d-none d-sm-table table_dash table-details-campaign">
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className="pl-5">Tổng số lượng Voucher</td>
                      <td className="color-red">
                        {detailCampaign && detailCampaign?.CheckIn[0]
                          ? detailCampaign?.CheckIn[0]?.totalVoucher
                          : "0"}
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-5">Số lượng voucher đã áp dụng</td>
                      <td className="color-red">
                        {detailCampaign && detailCampaign?.CheckIn?.[0]
                          ? detailCampaign?.CheckIn?.[0].voucheredCount
                          : "0"}
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-5">Số lượng voucher còn lại</td>
                      <td className="color-red">
                        {detailCampaign && detailCampaign?.CheckIn[0]
                          ? parseInt(detailCampaign?.CheckIn[0]?.totalVoucher) -
                            parseInt(detailCampaign?.CheckIn[0]?.voucheredCount)
                          : "0"}
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-5">Số khách CheckIn</td>
                      <td className="color-red">...</td>
                    </tr>
                    <tr>
                      <td className="pl-5">Tỷ lệ CheckIn Voucher</td>
                      <td className="color-red">
                        {detailCampaign && detailCampaign?.CheckIn[0]
                          ? detailCampaign?.CheckIn[0]?.rateCheckIn
                          : "0%"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="detail-title-campaign-voucher mt-5">
                  DANH SÁCH VOUCHER
                </h4>
                <CButton
                  color="success"
                  style={{ marginBottom: "20px", marginRight: "10px" }}
                  size="md"
                  className="flex-center"
                  onClick={() => this.ExportsFileExcel()}
                >
                  <FaFileExport style={{ margin: "auto 6px auto 0" }} />
                  <p style={{ margin: "auto 0" }}>Xuất File</p>
                </CButton>
                <a id="download_excel" download></a>
                <div class="" style={{ width: "100%", overflowX: "scroll" }}>
                  <table
                    ble
                    className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
                  >
                    <thead className="thead-light">
                      <tr>
                        <th className="text-center">STT.</th>

                        <th className="text-center">Mã voucher</th>

                        <th className="text-center">Nội dung</th>
                        <th className="text-center">Ngày tạo</th>
                        <th className="text-center">Ngày kết thúc</th>
                        <th className="text-center">trạng thái</th>
                        <th className="text-center">tỉnh/thành</th>

                        <th className="text-center">#</th>
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

                                <td className="text-center">{item.code}</td>

                                <td className="text-center">{item.content}</td>
                                <td className="text-center">
                                  {new Date(
                                    item.create_at
                                  ).toLocaleDateString()}
                                </td>
                                <td className="text-center">
                                  {new Date(item.to).toLocaleDateString()}
                                </td>
                                <td className="text-center">
                                  <Tag
                                    className="ant-tag"
                                    color={
                                      item.status === "0"
                                        ? "#2eb85c"
                                        : item.status === "1"
                                        ? "#2db7f5"
                                        : item.status === "2"
                                        ? "#87d068"
                                        : item.status === "3"
                                        ? "#f50"
                                        : item.status === "4"
                                        ? "#dc0e04"
                                        : item.status === "4"
                                        ? "#00D084"
                                        : "#FF0004"
                                    }
                                  >
                                    {item.status === "0"
                                      ? "Sẵn sàng"
                                      : item.status === "1"
                                      ? "Chờ xác nhận"
                                      : item.status === "2"
                                      ? "Đã sử dụng"
                                      : item.status === "3"
                                      ? "Hủy bỏ"
                                      : item.status === "4"
                                      ? "Xóa bỏ"
                                      : "Khóa"}
                                  </Tag>
                                </td>
                                <td>...</td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default DetailCampaign;
