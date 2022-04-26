import React, { useState } from "react";

import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { CButton } from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

function StatisticalSaleGroup() {
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  const disabledDate = (current) => {
    if (!dates || dates.length === 0) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], "days") > 7;
    const tooEarly = dates[1] && dates[1].diff(current, "days") > 7;
    return tooEarly || tooLate;
  };

  const onOpenChange = (open) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };
  return (
    <Row>
      <Col>
        <Card>
          <CardHeader style={{ backgroundColor: "#cccccc26" }}>
            <h5 className="text-center" style={{ marginBottom: "15px" }}>
              Tìm kiếm số liệu thống kê
            </h5>
            <RangePicker
              value={hackValue || value}
              disabledDate={disabledDate}
              onCalendarChange={(val) => setDates(val)}
              onChange={(val) => setValue(val)}
              onOpenChange={onOpenChange}
            />
            <div className="flex-end">
              <CButton
                color="info"
                size="md"
                className="btn-main"
                onClick={(e) => {
                  this.onSearch();
                }}
              >
                <BsSearch style={{ margin: "auto 6px auto 0" }} />
              </CButton>
            </div>
          </CardHeader>
          <CardBody>
            <h5 className="text-center">Chi tiết thống kê</h5>
            <div class="container">
              <div class="row g-1">
                <div class="col-4">
                  <div class="statistical statistical--total-voucher">
                    <div className="statistical__header statistical__header--total-voucher">
                      Tổng voucher đã phát
                    </div>
                    <div className="statistical__body statistical__body--total-voucher">
                      10.000
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="statistical statistical--total-customer">
                    <div className="statistical__header statistical__header--total-customer">
                      Số khách hàng check in
                    </div>
                    <div className="statistical__body statistical__body--total-customer">
                      3.000
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="statistical statistical--percent-customer">
                    <div className="statistical__header statistical__header--percent-customer">
                      Tỉ lệ check in
                    </div>
                    <div className="statistical__body statistical__body--percent-customer">
                      30%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default StatisticalSaleGroup;
