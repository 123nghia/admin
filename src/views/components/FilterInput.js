import { CCol, CRow, CSelect } from "@coreui/react";
import { DatePicker, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React from "react";
import { Input } from "reactstrap";

function FilterInput() {
  const arrLevel = [
    {
      item: "1",
    },
    {
      item: "2",
    },
  ];
  const arrLevelFilter = [
    {
      item: "0",
    },
    {
      item: "1",
    },
  ];
  return (
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
            {arrLevel !== undefined ? (
              <CSelect
                onChange={async (e) => {
                  this.handleOnChangeValue(e, "levelFilter");
                }}
                custom
                size="md"
                name="levelFilter"
                id="SelectLm"
              >
                {arrLevelFilter.map((item, i) => {
                  if (item.item === this.state.levelFilter) {
                    return (
                      <option selected key={i} value={item.item}>
                        {item.item === "0" ? "Hoạt động" : "Không hoạt động"}
                      </option>
                    );
                  } else {
                    return (
                      <option key={i} value={item.item}>
                        {item.item === "0" ? "Hoạt động" : "Không hoạt động"}
                      </option>
                    );
                  }
                })}
              </CSelect>
            ) : null}
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
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
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
      <CCol md={3} className="mt">
        <div className="">
          <p className="title_filter">Từ ngày</p>

          <div style={{ width: "200px" }}>
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
              format="DD/MM/YYYY"
            />
          </div>
        </div>
      </CCol>
      <CCol md={3} className="mt">
        <div className="">
          <p className="title_filter">Đến ngày</p>
          <div style={{ width: "200px" }}>
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
              format="DD/MM/YYYY"
            />
          </div>
        </div>
      </CCol>
    </CRow>
  );
}

const styles = {
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  pagination: {
    marginRight: "5px",
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

export default FilterInput;
