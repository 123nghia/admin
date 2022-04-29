import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

function DetailCollaborators() {
  const renderHeaderTable = () => {
    const headerList = [
      "STT.",
      "Chiến dịch",
      "Nhà Cung Cấp",
      "Từ Ngày",
      "Đến Ngày",
      "Số Evoucher",
      "Số Khách Checkin",
      "Tỷ lệ Khách Checkin",
      "Ghi chú",
    ];
    return (
      <thead className="thead-light">
        <tr>
          {headerList.map((header, idx) => (
            <th key={idx} className="text-center ">
              {header}
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  const renderDetailSale = () => {
    const detailSaleList = [
      {
        nameCampaign: "Chiến dịch soi da Seoul Spa",
        vendor:
          "https://w.ladicdn.com/s450x350/5977f59d1abc544991d43c5b/logo-2021-20210608082621.png",
        from: "03/03/2022",
        to: "05/05/2022",
        voucherAmount: "0356618321",
        customerCheckinAmount: 20,
        perCheckin: "20%",
        noted: "",
      },
      {
        nameCampaign: "Soi da Ngọc Dung",
        vendor:
          "https://ngocdung.net/wp-content/uploads/2021/12/logo-header3.png",
        from: "03/03/2022",
        to: "05/05/2022",
        voucherAmount: "0356618321",
        customerCheckinAmount: 51,
        perCheckin: "50%",
        noted: "",
      },
    ];
    return (
      <tbody>
        {detailSaleList.map((detailSale, idx) => (
          <tr key={idx} className="text-center">
            <td>{idx + 1}</td>
            <td>{detailSale?.nameCampaign}</td>
            <td>
              <img
                src={detailSale?.vendor}
                alt={detailSale?.vendor}
                style={{ maxWidth: "150px", margin: "1rem 0" }}
              />
            </td>
            <td>{detailSale?.from}</td>
            <td>{detailSale?.to}</td>
            <td>{detailSale?.voucherAmount}</td>
            <td>{detailSale?.customerCheckinAmount}</td>
            <td>{detailSale?.perCheckin}</td>
            <td>
              {detailSale?.noted || (
                <span className="text-secondary">Chưa có ghi chú!!</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify title_header">
                Chi tiết Cộng tác viên
              </i>
            </CardHeader>
            <CardBody className="table__overflow">
              <table
                ble
                className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash"
              >
                {renderHeaderTable()}

                {renderDetailSale()}
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default DetailCollaborators;
