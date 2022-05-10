import React from "react";
import Constants from "../../../contants/contants";
import axios from "axios";
import Swal from "sweetalert2";

import { Card, CardBody, CardHeader, Col, Row, Input } from "reactstrap";
import { CButton, CCol, CRow } from "@coreui/react";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";
import Pagination from "@mui/material/Pagination";

import TableInManagerSaleGroup from "./TableInManagerSaleGroupIndex";
import ModalAddUpdateSaleGroup from "./ModalHandleForm/ModalAddUpdateSaleGroup";
import ModalDelSaleGroup from "./ModalHandleForm/ModalDelSaleGroup";

function ManagerSaleGroupIndex() {
  const [showGroup, setShowGroup] = React.useState([]);
  const [statusModal, setStatusModal] = React.useState(false);
  const [actionModal, setActionModal] = React.useState("new");
  const [inputChange, setInputChange] = React.useState({
    title: "",
    isManager: "1",
    description: "",
    saleIds: "",
    leadId: "",
  });
  const [idCurrent, setIdCurrent] = React.useState("0");
  const [statusModalDelete, setStatusModalDelete] = React.useState(false);
  const [arrPagination, setArrPagination] = React.useState([]);
  const [hidden, setHidden] = React.useState(false);
  const [dataPagination, setDataPagination] = React.useState([]);
  const [indexPage, setIndexPage] = React.useState(0);

  //Pagination
  function pagination(dataApi) {
    console.log("dataApi", dataApi);
    var i,
      j,
      temparray,
      chunk = 8;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }

    if (arrTotal.length == 0) {
      setHidden(false);
    } else {
      setHidden(true);
    }

    setArrPagination([...arrTotal]);
    setDataPagination([...arrTotal[indexPage]]);
  }

  //Show modal add new group
  const viewAddGroupSale = () => {
    setStatusModal(!statusModal);
    setActionModal("new");
    setInputChange({
      title: "",
      isManager: "1",
      description: "",
      saleIds: "",
      leadId: "",
    });
  };

  //Show modal update group sale
  const showModalUpdateGroup = () => {
    setStatusModal(!statusModal);
    setActionModal("update");
  };

  //Show modal delete group sale
  const showModalDeleteGroup = () => {
    setStatusModalDelete(!statusModalDelete);
  };
  //button close add
  const closeModalViewAdd = () => {
    setStatusModal(false);
  };

  //button close delete
  const closeModalDelete = () => {
    setStatusModalDelete(false);
  };

  //Get All Group Sales
  const getAllGroupSale = async () => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.LIST_SALE_GROUP;
    const url = baseUrlapi + baseUrlCallApi;
    await axios.post(url, {}).then((res) => {
      setShowGroup([...res.data?.data]);
      pagination([...res.data?.data]);
    });
  };

  React.useEffect(() => {
    getAllGroupSale();
  }, []);

  //function add new group sale
  const handleAddGroupSale = () => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.ADD_SALE_GROUP;
    const url = baseUrlapi + baseUrlCallApi;
    axios
      .post(url, inputChange)
      .then((res) => {
        if (res.status !== 200) {
          Swal.fire({
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
          return;
        }
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1000,
        });
        setStatusModal(false);
        getAllGroupSale();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.data.message,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  //value in form add input
  const setInput = (name, value) => {
    setInputChange({
      ...inputChange,
      [name]: value,
    });
    console.log(inputChange);
  };

  //value in form update input
  const setUpdateInput = (value) => {
    setInputChange(value);
    console.log("update", inputChange);
  };

  const setIdOfFormUpdate = (id) => {
    setIdCurrent(id);
  };

  //function update group sale
  const handleUpdateGroupSale = async () => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.UPDATE_SALE_GROUP;
    const url = baseUrlapi + baseUrlCallApi;
    let copyData = { ...inputChange };
    copyData.id = idCurrent;
    await axios
      .post(url, copyData)
      .then((res) => {
        if (res.status !== 200) {
          Swal.fire({
            icon: "error",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1000,
          });
          return;
        }
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1000,
        });
        setStatusModal(false);
        getAllGroupSale();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.data.message,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  //function delete group sale
  const handleDelGroupSale = async () => {
    const baseUrlCallApi = Constants.DELETE_SALE_GROUP;
    const baseUrlapi = Constants.BASE_URL;
    const url = baseUrlapi + baseUrlCallApi;
    await axios
      .post(url, {
        id: idCurrent,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Xóa thành công",
          showConfirmButton: false,
          timer: 700,
        });
        setStatusModalDelete(false);
        getAllGroupSale();
      });
  };

  return (
    <>
      {statusModal ? (
        <ModalAddUpdateSaleGroup
          actionModal={actionModal}
          closeModal={closeModalViewAdd}
          inputChange={inputChange}
          handleAddGroupSale={handleAddGroupSale}
          setInput={setInput}
          setUpdateInput={setUpdateInput}
          handleUpdateGroupSale={handleUpdateGroupSale}
        />
      ) : null}

      {statusModalDelete ? (
        <ModalDelSaleGroup
          closeModal={closeModalDelete}
          handleDelGroupSale={handleDelGroupSale}
        />
      ) : null}

      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify title_header">
                Quản lý nhóm sale
              </i>
              <CRow>
                <CCol md={3} className="mt">
                  <div className="">
                    <p className="title_filter">Tên nhóm</p>
                    <Input
                      style={styles.searchInput}
                      name="number"
                      placeholder=""
                    />
                  </div>
                </CCol>
                <CCol md={3} className="mt">
                  <div className="">
                    <p className="title_filter">Người quản lý</p>
                    <Input
                      style={styles.searchInput}
                      name="number"
                      placeholder=""
                    />
                  </div>
                </CCol>
                <CCol md={3} className="mt">
                  <div className="">
                    <p className="title_filter">Số điện thoại</p>
                    <Input
                      style={styles.searchInput}
                      name="number"
                      placeholder=""
                    />
                  </div>
                </CCol>
              </CRow>
            </CardHeader>
            <CardBody className="table__overflow">
              <div class="flex-center">
                <CButton
                  color="info"
                  style={{
                    marginBottom: "20px",
                    marginRight: "10px",
                  }}
                  size="md"
                  className="flex-center"
                  onClick={(e) => viewAddGroupSale()}
                >
                  <MdLibraryAdd style={{ margin: "auto 6px auto 0" }} />
                  <p style={{ margin: "auto 0" }}>Tạo nhóm</p>
                </CButton>
              </div>
              <TableInManagerSaleGroup
                propsSaleGroup={showGroup}
                setUpdateInput={setUpdateInput}
                showModalUpdateGroup={showModalUpdateGroup}
                setIdOfFormUpdate={setIdOfFormUpdate}
                showModalDeleteGroup={showModalDeleteGroup}
                dataPagination={dataPagination}
              />
              <div style={{ float: "right" }}>
                <Pagination
                  count={arrPagination.length}
                  color="primary"
                  onChange={(e, v) => {
                    setDataPagination([...arrPagination[v - 1]]);
                    setIndexPage(v - 1);
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
export default ManagerSaleGroupIndex;

const styles = {
  pagination: {
    marginRight: "5px",
  },
  icon: {
    fontSize: "16px",
    height: "20px",
    width: "20px",
  },
  searchInput: {
    width: "200px",
    display: "inline-block",
  },
};
