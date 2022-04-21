import React from "react";
import { useState, useEffect } from "react";
import Constants from "../../../../contants/contants";
import { ModalHeader, ModalBody, ModalFooter, Modal } from "reactstrap";
import { CButton } from "@coreui/react";
import axios from "axios";
import { Tabs } from "antd";
import { Tag } from "antd";

const { TabPane } = Tabs;
function ModalDetailProvider(props) {
  console.log(props);
  const [key, setKey] = useState("1");
  const [valDetailCampaign, setvalDetailCampaign] = useState([]);
  console.log("valDetailCampaign", valDetailCampaign);

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
        setvalDetailCampaign(res.data?.data[0]);
      });
  }, []);

  const closeModal = () => {
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
                <p className="modal-label">
                  Trạng thái chiến dịch:{" "}
                  <span className="modal-detail">
                    {
                      <Tag
                        className="ant-tag"
                        color={
                          valDetailCampaign.status === "1" ? "#87d068" : "#f50"
                        }
                      >
                        {valDetailCampaign.status === "1"
                          ? "Hoạt động"
                          : "Không hoạt động"}
                      </Tag>
                    }
                  </span>
                </p>

                <p className="modal-label">
                  Tên chiến dịch:{" "}
                  <span className="modal-detail">
                    {valDetailCampaign ? valDetailCampaign.name : null}
                  </span>
                </p>
                <p className="modal-label">
                  Nội dung chiến dịch:{" "}
                  <span className="modal-detail">
                    {valDetailCampaign ? valDetailCampaign.description : null}
                  </span>
                </p>
                <p className="modal-label">
                  Ngày bắt đầu sale:{" "}
                  <span className="modal-detail">
                    {new Date(valDetailCampaign.from).toLocaleDateString()}
                  </span>
                </p>
                <p className="modal-label">
                  Ngày kết thúc sale:{" "}
                  <span className="modal-detail">
                    {new Date(valDetailCampaign.to).toLocaleDateString()}
                  </span>
                </p>
                <p className="modal-label">
                  Ngày kết thúc chiến dịch:{" "}
                  <span className="modal-detail">
                    {new Date(
                      valDetailCampaign.saleEndDate
                    ).toLocaleDateString()}
                  </span>
                </p>
                <p className="modal-label">
                  Ghi chú:{" "}
                  <span className="modal-detail">
                    {valDetailCampaign ? valDetailCampaign.noted : null}
                  </span>
                </p>
              </div>
            </TabPane>
            <TabPane className="tab2" tab="E-voucher" key="2">
              <div className="tabContentItem" style={styles.tabContentItem}>
                <div>
                  <p className="modal-label">
                    Số lượng voucher:{" "}
                    <span className="modal-detail">
                      {valDetailCampaign && valDetailCampaign.campaignOverview
                        ? valDetailCampaign.campaignOverview[0]?.totalVoucher
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Số lượng voucher phát:{" "}
                    <span className="modal-detail">
                      {valDetailCampaign && valDetailCampaign.campaignOverview
                        ? valDetailCampaign.campaignOverview[0].countVoucher
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Tỉ lệ hoàn thành:{" "}
                    <span className="modal-detail">
                      {valDetailCampaign && valDetailCampaign.campaignOverview
                        ? valDetailCampaign.campaignOverview[0].rateCheckIn
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Số lượng khách check in:{" "}
                    <span className="modal-detail">
                      {valDetailCampaign && valDetailCampaign.campaignOverview
                        ? valDetailCampaign.campaignOverview[0].voucheredCount
                        : null}
                    </span>
                  </p>
                  <p className="modal-label">
                    Tỉ lệ khách check in:{" "}
                    <span className="modal-detail">
                      {valDetailCampaign && valDetailCampaign.campaignOverview
                        ? valDetailCampaign.campaignOverview[0].rateCheckIn
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
              <CButton color="secondary" onClick={closeModal}>
                Đóng
              </CButton>
            </div>
          ) : (
            <div>
              <CButton color="secondary" onClick={closeModal}>
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
