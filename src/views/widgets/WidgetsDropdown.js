import React from "react";
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetDropdown,
  CWidgetStatsB,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";
import { CButton } from "@coreui/react";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import Constants from "../../contants/contants";
import axios from "axios";
import { FaStreetView } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CChartBar, CChartLine } from "@coreui/react-chartjs";
import { cilArrowBottom, cilArrowTop, cilOptions } from "@coreui/icons";
import { GiChart } from "react-icons/gi";
import { ModalHeader, Modal, ModalBody, ModalFooter } from "reactstrap";
import { HiOutlineChartSquareBar } from 'react-icons/hi';

const listColor = [
  {
    color: "gradient-primary",
  },
  {
    color: "gradient-info",
  },
  {
    color: "gradient-warning",
  },
  {
    color: "gradient-danger",
  },
];
const company_id = JSON.parse(localStorage.getItem("user")).company_id
  ? JSON.parse(localStorage.getItem("user")).company_id
  : "-1";

const WidgetsDropdown = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const ExportsFileExcel = async () => {
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
  };
  const viewDetail = (item) => {
    setModal(true);
    setDataDetail({...item});
  };
  const getData = async () => {
    let baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_OVERVIEW;
    let url = baseUrlapi + baseUrlCallApi;
    await axios.get(url).then(async (res) => {
      let val = res.data.data;
      setData(val);
    });
  };
  const [modal, setModal] = React.useState(false);
  const [dataDetail, setDataDetail] = React.useState([]);
  // render
  return (
    <>
      <CRow>
        {data && data.length > 0
          ? data.map((item, index) => {
              return (
                <CCol sm="6" lg="4" key={index} style={{ padding: "15px" }}>
                  <div className="overview__border-widget">
                    <div className="flex-center-space">
                      <div className="overview__border-widget--icon">
                        <HiOutlineChartSquareBar />
                      </div>
                      <CDropdown>
                        <CDropdownToggle color="transparent">
                          <HiOutlineDotsVertical
                            style={{ color: "#3c4b64" }}
                            name="cil-settings"
                          />
                        </CDropdownToggle>
                        <CDropdownMenu className="pt-0" placement="bottom-end">
                          <CDropdownItem onClick={() => viewDetail(item)}>
                            Xem chi tiết
                          </CDropdownItem>
                          <CDropdownItem onClick={ExportsFileExcel}>
                            Xuất file
                          </CDropdownItem>

                          <CDropdownItem disabled>
                            Disabled action
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </div>
                    <h6>{item.text}</h6>
                    <h4>{item.value}</h4>
                    <div className="hr"></div>
                    <div className="overview__border-widget--footer">
                      {/* <p>{item.key}</p> */}
                      <p>{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                </CCol>
              );
            })
          : null}
      </CRow>
      <Modal size="md" isOpen={modal}>
        <ModalHeader>Chi tiết</ModalHeader>
        <ModalBody className="info_voucher">
          {
            dataDetail ? <div>
              <p>
              {dataDetail.text} : <span>{dataDetail.value}</span>
              </p>
            </div> : "Chưa có thông tin"
          }
        </ModalBody>
        <ModalFooter>
          <CButton color="secondary" onClick={(e) => setModal(false)}>
            Đóng
          </CButton>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default WidgetsDropdown;
