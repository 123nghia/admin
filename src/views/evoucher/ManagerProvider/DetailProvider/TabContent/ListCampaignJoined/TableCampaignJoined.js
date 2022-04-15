import React from "react";
import { CButton } from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { Card, Col, Row } from "antd";

function TableCampaignJoined({ tableListCampaignJoined }) {
  // console.log(tableListCampaignJoined);
  const titles = [
    "STT.",
    "Tên chiến dịch",
    "Trạng thái",
    "Số lượng voucher",
    "#",
  ];
  const renderListCampaign = () => {
    <table
      ble
      className="table table-hover table-outline mb-0 d-none d-sm-table table_dash"
    >
      <thead className="thead-light">
        <tr>
          {titles.map((title, i) => (
            <th key={i} className="text-center">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center"></td>
          <td className="text-center">
            {tableListCampaignJoined && tableListCampaignJoined.name}
          </td>
          <td className="text-center"></td>
          <td className="text-center"></td>
          <td className="text-center" style={{ minWidth: "230px" }}>
            <div className="flex">
              <CButton
                shape="rounded-pill"
                variant="outline"
                color="info"
                style={{ marginLeft: "5px" }}
                size="md"
                className="flex-a-center"
                onClick={(e) =>
                  this.setState({
                    modalDetailProvider: !this.state.modalDetailProvider,
                  })
                }
              >
                <BsSearch className="mr-1" />
                Chi tiết
              </CButton>
            </div>
          </td>
        </tr>
      </tbody>
    </table>;
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>{renderListCampaign()}</Card>
        </Col>
      </Row>
    </div>
  );
}

export default TableCampaignJoined;
