import React from "react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { CButton } from "@coreui/react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { Input } from "antd";
import Pagination from "@mui/material/Pagination";

import ModalViewGroupSale from "./Detail_MemberOfGroupSale";
import ModalUpdateMemberOfGroup from "./ModalUpdateMemberOfGroup";

const { Search } = Input;

const onSearch = (value) => console.log(value);

function MemberOfGroupSale(props) {
  const [statusModal, setStatusModal] = React.useState(false);
  const [statusModalUpdate, setStatusModalUpdate] = React.useState(false);
  const [arrPagination, setArrPagination] = React.useState([]);
  const [hidden, setHidden] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [indexPage, setIndexPage] = React.useState(0);
  const { dataMember } = props;

  console.log(dataMember);
  React.useEffect(() => {
    pagination(dataMember);
  }, [dataMember]);

  const pagination = (dataApi) => {
    var i,
      j,
      temparray,
      chunk = 5;
    var arrTotal = [];
    if (dataApi && dataApi.length > 0) {
      for (i = 0, j = dataApi.length; i < j; i += chunk) {
        temparray = dataApi.slice(i, i + chunk);
        arrTotal.push(temparray);
      }

      if (arrTotal.length == 0) {
        setHidden(hidden);
      } else {
        setHidden(!hidden);
      }

      setArrPagination([...arrTotal]);
      setData([...arrTotal[0]]);
    }
  };

  const closeModalDetailSaleGroup = () => {
    setStatusModal(false);
  };

  const viewDetailSaleGroup = () => {
    setStatusModal(true);
  };

  const closeModalUpdate = () => {
    setStatusModalUpdate(false);
  };

  const viewUpdateMemberOfGroup = () => {
    setStatusModalUpdate(true);
  };

  const titles = ["STT.", "Họ và tên", "Số điện thoại", "Ngày đăng ký", "#"];

  return (
    <>
      {statusModal ? (
        <ModalViewGroupSale closeModal={closeModalDetailSaleGroup} />
      ) : null}

      {statusModalUpdate ? (
        <ModalUpdateMemberOfGroup closeModalUpdate={closeModalUpdate} />
      ) : null}

      <Row>
        <Col>
          <Card>
            <CardHeader style={{ backgroundColor: "#cccccc26" }}>
              <h5 className="text-center" style={{ marginBottom: "15px" }}>
                Danh sách thành viên
              </h5>

              <div className="flex-end">
                <Search
                  placeholder="Nhập họ và tên để tìm kiếm..."
                  allowClear
                  enterButton="Tìm kiếm"
                  size="medium"
                  style={{
                    width: 350,
                    fontSize: 14,
                    marginTop: 10,
                    marginBottom: 15,
                  }}
                  onSearch={onSearch}
                />
              </div>
            </CardHeader>
            <CardBody>
              <div className="total-member">
                <p className="total-member__title">Tổng số thành viên:</p>
                <span>100</span>
              </div>
              <table ble className="table table-hover mb-0 d-none d-sm-table">
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
                  {data && data.length !== 0
                    ? data.map((item, i) => (
                        <tr key={i}>
                          <td className="text-center">{i + 1}</td>
                          <td className="text-center">
                            {item.username
                              ? item.username
                              : "Chưa có thông tin"}
                          </td>
                          <td className="text-center">
                            {item.phone ? item.phone : "Chưa có thông tin"}
                          </td>
                          <td className="text-center">
                            {item.create_date
                              ? new Date(item.create_date).toLocaleDateString()
                              : "Chưa có thông tin"}
                          </td>
                          <td className="text-center">
                            <div class="flex">
                              <CButton
                                shape="rounded-pill"
                                variant="outline"
                                color="info"
                                style={styles.mgl5}
                                size="sm"
                                className="flex-a-center"
                                onClick={() => viewDetailSaleGroup()}
                              >
                                <BsSearch className="mr-1" />
                                Chi tiết
                              </CButton>
                              <CButton
                                shape="rounded-pill"
                                variant="ghost"
                                color="info"
                                style={styles.mgl5}
                                size="md"
                                onClick={() => viewUpdateMemberOfGroup()}
                              >
                                <FiEdit3 style={styles.icon} name="cilPencil" />
                              </CButton>{" "}
                              <CButton
                                shape="rounded-pill"
                                variant="ghost"
                                color="danger"
                                style={styles.mgl5}
                                onClick={(e) => {
                                  // this.openDelete(item);
                                }}
                              >
                                <BsTrash
                                  style={styles.icon}
                                  className="icon"
                                  name="cilTrash"
                                />
                              </CButton>
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
              <div style={{ float: "right" }}>
                <Pagination
                  count={arrPagination.length}
                  color="primary"
                  onChange={(e, v) => {
                    setData([...arrPagination[v - 1]]);
                    setIndexPage(v);
                  }}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default MemberOfGroupSale;

const styles = {
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  mgl5: {
    marginLeft: "5px",
  },
};
