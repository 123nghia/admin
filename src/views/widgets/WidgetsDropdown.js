import React from "react";
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";
import ChartBarSimple from "../charts/ChartBarSimple";
import { CButton } from "@coreui/react";
import { FaFileExport } from "@react-icons/all-files/fa/FaFileExport";
import Constants from "../../contants/contants";
import axios from "axios";

const listLineChart = [
  {
    name: "line1",
    dataPoint: [65, 59, 84, 84, 51, 55, 40],
  },
  {
    name: "line2",
    dataPoint: [1, 18, 9, 17, 34, 22, 11],
  },
  {
    name: "line3",
    dataPoint: [78, 81, 80, 45, 34, 12, 40],
  },
  {
    name: "line4",
  },
];

const listBgWidget = [
  {
    name: "bg1",
    background: "gradient-primary",
  },
  {
    name: "bg2",
    background: "twitter",
  },
  {
    name: "bg3",
    background: "gradient-warning",
  },
  {
    name: "bg4",
    background: "gradient-success",
  },
  {
    name: "bg5",
    background: "gradient-danger",
  },
];

const WidgetsDropdown = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let baseUrlapi = Constants.BASE_URL;
    let baseUrlCallApi = Constants.GET_OVERVIEW;
    let url = baseUrlapi + baseUrlCallApi;
    await axios.get(url).then(async (res) => {
      let val = res.data.data;
      setData(val);
    });
  };
  function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
  }
  // render
  return (
    <CRow>
      {data && data.length > 0
        ? data.map((item, index) => {
            return (
              <CCol sm="6" lg="3" key={index}>
                <div className="overview__border-widget">
                  <CWidgetDropdown
                    style={{ marginBottom: "1rem" }}
                    color={random_item(listBgWidget).background}
                    header={item.value}
                    backgroundColor="rgb(250, 152, 152)"
                    text={item.text}
                    footerSlot={
                      <ChartLineSimple
                        pointed
                        className="c-chart-wrapper mt-3 mx-3"
                        style={{ height: "70px" }}
                        dataPoints={random_item(listLineChart).dataPoint}
                        pointHoverBackgroundColor="red"
                        label={item.key}
                        labels="months"
                      />
                    }
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent">
                        <CIcon name="cil-settings" />
                      </CDropdownToggle>
                      <CDropdownMenu
                        className="pt-0 text-center"
                        placement="bottom-end"
                      >
                        <CDropdownItem>
                          <CButton
                            shape="rounded-pill"
                            color="info"
                            style={{ textAlign: "center" }}
                            size="md"
                            onClick={(e) => {}}
                          >
                            <CIcon name="cil-magnifying-glass" />
                          </CButton>
                        </CDropdownItem>
                        <CDropdownItem>
                          <CButton
                            color="success"
                            style={{ height: "42px" }}
                            size="md"
                            className="flex-center"
                            onClick={() => this.ExportsFileExcel()}
                          >
                            <FaFileExport />
                          </CButton>
                          <a id="download_excel" download></a>
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
                </div>
              </CCol>
            );
          })
        : null}
    </CRow>
  );
};

export default WidgetsDropdown;
