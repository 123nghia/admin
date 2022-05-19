import React from "react";
import FmdGoodSharpIcon from "@mui/icons-material/FmdGoodSharp";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import WebIcon from "@mui/icons-material/Web";
import Pagination from "@material-ui/lab/Pagination";
import CIcon from "@coreui/icons-react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import { BsTrash } from "@react-icons/all-files/bs/BsTrash";
import { FiEdit3 } from "@react-icons/all-files/fi/FiEdit3";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import { CButton, CCol, CRow } from "@coreui/react";
import { BiExport } from "react-icons/bi";
import { Link } from "react-router-dom";
import Constants from "../../../../../../contants/contants";
import IframeModal from "../../../../../../views/components/Iframe";
import { DatePicker, Select, Tag, Space, Spin } from "antd";

function ListCustomer({ listCustomer }) {
  const [arrPagination, setArrPagination] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [indexPage, setIndex] = React.useState(0);
  const [idHistory, setIdHistory] = React.useState("");
  const [toggleHistory, setToggleHistory] = React.useState(false);

  React.useEffect(() => {
    pagination(listCustomer);
  }, [listCustomer]);
  const checkStatusUserVoucherColor = (status) => {
    const statusColorMap = {
      2: "#2eb85c",
      A: "#2db7f5",
      1: "#87d068",
      0: "#dc0e04",
    };

    return statusColorMap[status] || "#FF0004";
  };
  const checkStatusUserVoucherContent = (status) => {
    const statusContentMap = {
      A: "Đã nhận voucher",
      0: "Đã check-in",
      1: "Hoàn thành",
      2: "Hủy bỏ",
    };

    return statusContentMap[status] || "Chưa xác nhận";
  };
  const pagination = (dataApi) => {
    if (dataApi && dataApi.length === 0) {
      return;
    }
    var i,
      j,
      temparray,
      chunk = 50;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }
    setArrPagination(arrTotal);
    setData(arrTotal[indexPage]);
  };
  const handleCloseModal = () => {
    setToggleHistory(false);
  };
  const renderBodyTable = (listCustomer) => {
    if (!listCustomer) {
      return (
        <td colSpan="13" className="text-center">
          <h5>Không tìm thấy dữ liệu</h5>
        </td>
      );
    }

    return listCustomer.map((item, idx) => (
      <tr key={idx}>
        <td className="text-center">{idx + 1}</td>
        <td className="text-center">{item.fullName}</td>
        <td className="text-center">{item?.phoneNumber}</td>
        <td className="text-center">
          {item.voucherCode ? item.voucherCode : "Chưa nhận voucher"}
        </td>
        <td className="text-center"> <Tag
                      className="ant-tag"
                      color={checkStatusUserVoucherColor(item.status)}
                    >
                      {checkStatusUserVoucherContent(item.status)}
                    </Tag></td>
        <td className="text-center">{item.slug ? item.slug : ""}</td>
        <td className="text-center">{item.partner}</td>
        <td className="text-center">
          {item?.historyId ? (
            <CButton
              shape="rounded-pill"
              variant="outline"
              color="info"
              style={{ textAlign: "center" }}
              size="md"
              onClick={(e) => {
                setIdHistory(item.historyId);
                setToggleHistory(true);
              }}
            >
              <CIcon name="cil-magnifying-glass" />
            </CButton>
          ) : (
            <p>Chưa soi da</p>
          )}
        </td>
        <td className="text-center">
          {item?.create_date || new Date().toLocaleDateString("vi-VI")}
        </td>
        {/* <td className="text-center">
         
        </td> */}
      </tr>
    ));
  };
  return (
    <>
      <IframeModal
        toggleView={toggleHistory}
        link={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory}
        closeModal={() => handleCloseModal()}
      />
      <h5>Tổng số: {listCustomer.length}</h5>
      <div style={{ overflowX: "scroll" }}>
        <table className="mt-3 table table-hover table-outline mb-0 d-none d-sm-table table_dash">
          <thead className="thead-light">
            <tr>
              <th className="text-center">STT.</th>
              <th className="text-center">Tên người dùng</th>
              <th className="text-center">Số điện thoại</th>
              <th className="text-center">Mã voucher</th>
              <th className="text-center">Trạng thái</th>
              <th className="text-center">Slug</th>
              <th className="text-center">Đối tác</th>
              <th className="text-center">Lịch sử soi da</th>
              <th className="text-center">Ngày soi</th>

              {/* <th className="text-center"></th> */}
            </tr>
          </thead>
          <tbody>{renderBodyTable(data)}</tbody>
        </table>
      </div>
      <div style={{ float: "right" }}>
        <Pagination
          count={arrPagination.length}
          color="primary"
          onChange={(e, v) => {
            setData(arrPagination[v - 1]);
            setIndex(v - 1);
          }}
        />
      </div>
    </>
  );
}

export default ListCustomer;

const styles = {
  tabContentItem: {
    borderRadius: "4px",
    marginBottom: "5px",
    padding: "20px 15px",
    position: "relative",
    backgroundColor: "#cccccc29",
    border: "1px solid #ccc",
  },
};