import React from "react";
import { useState } from "react";
import { CButton } from "@coreui/react";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import IframeModal from "../../../../../../components/Iframe";
import Constants from "../../../../../../../contants/contants";
import Pagination from "@material-ui/lab/Pagination";
import Iframes from 'react-iframe'

import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Modal,
  TabContent,
} from "reactstrap";
function History(props) {
  console.log(props.propsHistory);
  const [toggleHistory, setToggleHistory] = useState(false);
  const [idHistory, setIdHistory] = useState("");
  const titles = ["STT.", "Hình ảnh", "Ngày soi", "Nhà cung cấp",""];
  const [arrPagination, setArrPagination] = React.useState([]);
  const [hidden, setHidden] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [indexPage, setIndexPage] = React.useState(0);
  // const [test, setTest] = useState("0");
  // const [data, setData] = React.useState([]);
  // const array = ["1", ",2"];

  const viewDetailModalHistory = (id) => {
    setIdHistory(id);
    setToggleHistory(!toggleHistory);
  };

  const closeModal = () => {
    setToggleHistory(false);
  };
  // React.useEffect(() => {
  //   setTest("1");
  //   props.testHistory(test);
  // });
  React.useEffect(() => {
    if(!props.propsHistory[0]?.data){
      return;
    }
    pagination(props.propsHistory[0]?.data);
  }, [props.propsHistory[0]?.data]);
  
  const pagination=(dataApi)=> {
    var i,
      j,
      temparray,
      chunk = 50;
    var arrTotal = [];
    for (i = 0, j = dataApi.length; i < j; i += chunk) {
      temparray = dataApi.slice(i, i + chunk);
      arrTotal.push(temparray);
    }
    setArrPagination([...arrTotal]);
    setData([...arrTotal[indexPage]]);
  }
  return (
    <>
      {/* {data
        ? data.map((item) => {
            return (
              <div>
                <h1>{item}</h1>
              </div>
            );
          })
        : null} */}
      <div style={{overflowY : 'scroll', maxHeight: '550px'}}>
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
          {data
            ? data.map((item, i) => (
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center"><img src={item.Image} height="100" alt="" /></td>
                  <td className="text-center">
                    {new Date(item.Create_Date).toLocaleDateString()}
                  </td>
                  <td className="text-center">
                    {item.Company_Id && item.Company_Id.Name ? item.Company_Id.Name : ""}
                  </td>
                  <td className="text-center" style={{ minWidth: "230px" }}>
                    <div className="flex">
                      <CButton
                        shape="rounded-pill"
                        variant="outline"
                        color="info"
                        style={{ marginLeft: "5px" }}
                        size="md"
                        className="flex-a-center"
                        onClick={() => viewDetailModalHistory(item._id)}
                      >
                        <BsSearch className="mr-1" />
                        Chi tiết
                      </CButton>
                    </div>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
      </div>
      <div style={{ float: "right" }}>
      <Pagination
          count={arrPagination.length}
          color="primary"
          onChange={(e, v) => {
            setData([...arrPagination[v - 1]]);
            setIndexPage(v - 1);
          }}
        />
              </div>
      {
          toggleHistory ? <Modal
          isOpen={true}
          size="xl"
          toggle={closeModal}
        >
          <ModalHeader closeButton toggle={closeModal}>Chi tiết soi da</ModalHeader>
          <ModalBody> 
          <Iframes url={Constants.BASE_URL_HISTORY_EVOUCHER + idHistory}
                  width="100%"
                  height="500px"
                  display="initial"
                  position="relative" />
          </ModalBody>
          <ModalFooter>
            <Button
              color="secondary"
              onClick={(e) =>
                closeModal()
              }
            >
              Đóng
            </Button>
          </ModalFooter>
        </Modal> : null
        }
    </>
  );
}

export default History;
