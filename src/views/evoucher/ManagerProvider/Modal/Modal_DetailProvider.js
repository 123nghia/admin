import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Constants from "../../../../contants/contants";
import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";
import axios from "axios";
import { Tabs } from "antd";
import { Tag } from "antd";

const { TabPane } = Tabs;
function ModalDetailProvider(props) {
  const [key, setKey] = useState("1");
  const [valDetailCampaign, setvalDetailCampaign] = useState([]);
  const [valOverviewEvoucherProvider, setvalOverviewEvoucherProvider] =
    useState([]);
  console.log("valDetailCampaign", valDetailCampaign);
  console.log("valOverviewEvoucherProvider", valOverviewEvoucherProvider);
  const { id } = useParams();

  useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.DETAIL_GET_OVERVIEW;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          id: props.id,
        },
      })
      .then((res) => {
        setvalDetailCampaign(res.data.data);
      });
  }, []);

  useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.DETAIL_GET_OVERVIEW;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .get(url, {
        params: {
          id: '621c2ec17abc0b6b4349d4e5',
        },
      })
      .then((res) => {
        console.log('res',res)
        setvalOverviewEvoucherProvider(res.data?.data[0]?.campaignOverview[0]);
      });
  }, []);

  const closeModal2 = () => {
    props.closeModal();
  };

  function handleChangeTab(key) {
    setKey(key);
  }

  const nextButton = () => {
    setKey("2");
  };

  return (
    <div>
      <Modal isOpen={true} size="l">
        <ModalHeader>Chi tiết</ModalHeader>
        <ModalBody>
          <Tabs activeKey={key} onChange={handleChangeTab}>
            <TabPane className="tab1" tab="Chiến dịch" key="1">
              <div className="tabContentItem" style={styles.tabContentItem}>
                {valDetailCampaign.map((val, idx) => (
                  <div key={idx}>
                    <p className="modal-label">
                      Trạng thái chiến dịch:{" "}
                      <span className="modal-detail">
                        {
                          <Tag
                            className="ant-tag"
                            color={val.status === "1" ? "#87d068" : "#f50"}
                          >
                            {val.status === "1"
                              ? "Hoạt động"
                              : "Không hoạt động"}
                          </Tag>
                        }
                      </span>
                    </p>
                    <p className="modal-label">
                      Tên chiến dịch:{" "}
                      <span className="modal-detail">{val.name}</span>
                    </p>
                    <p className="modal-label">
                      Nội dung chiến dịch:{" "}
                      <span className="modal-detail">{val.description}</span>
                    </p>
                    <p className="modal-label">
                      Ngày bắt đầu sale:{" "}
                      <span className="modal-detail">
                        {new Date(val.from).toLocaleDateString()}
                      </span>
                    </p>
                    <p className="modal-label">
                      Ngày kết thúc sale:{" "}
                      <span className="modal-detail">
                        {new Date(val.to).toLocaleDateString()}
                      </span>
                    </p>
                    <p className="modal-label">
                      Ngày kết thúc chiến dịch:{" "}
                      <span className="modal-detail">{val.saleEndDate}</span>
                    </p>
                    <p className="modal-label">
                      Ghi chú: <span className="modal-detail">{val.noted}</span>
                    </p>
                  </div>
                ))}
              </div>
            </TabPane>
            <TabPane className="tab2" tab="E-voucher" key="2">
              <div className="tabContentItem" style={styles.tabContentItem}>
                <div>
                  <p className="modal-label">
                    Số lượng voucher:{" "}
                    <span className="modal-detail">
                      {valOverviewEvoucherProvider
                        ? valOverviewEvoucherProvider.totalVoucher
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Số lượng voucher phát:{" "}
                    <span className="modal-detail">
                      {valOverviewEvoucherProvider
                        ? valOverviewEvoucherProvider.countVoucher
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Tỉ lệ hoàn thành:{" "}
                    <span className="modal-detail">
                      {valOverviewEvoucherProvider
                        ? valOverviewEvoucherProvider.rateCheckIn
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Số lượng khách check in:{" "}
                    <span className="modal-detail">
                      {valOverviewEvoucherProvider
                        ? valOverviewEvoucherProvider.voucheredCount
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Tỉ lệ khách check in:{" "}
                    <span className="modal-detail">
                      {valOverviewEvoucherProvider
                        ? valOverviewEvoucherProvider.rateCheckIn
                        : null}
                    </span>
                  </p>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </ModalBody>
        <ModalFooter>
          {key === "1" ? (
            <div>
              <CButton color="primary" onClick={nextButton}>
                Tiếp
              </CButton>{" "}
              <CButton color="secondary" onClick={closeModal2}>
                Đóng
              </CButton>
            </div>
          ) : (
            <div>
              <CButton color="secondary" onClick={closeModal2}>
                Đóng
              </CButton>
            </div>
          )}
        </ModalFooter>
      </Modal>
    </div>
  );
}

const styles = {
  tabContentItem: {
    borderRadius: "4px",
    marginBottom: "5px",
    border: "1px solid #ccc",
    padding: "20px 15px",
    position: "relative",
  },
};

export default ModalDetailProvider;
