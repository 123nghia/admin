import React from "react";
import Constants from "../../../contants/contants";
import axios from "axios";

import TableInManagerSaleGroup from "./TableInManagerSaleGroupIndex";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { CButton } from "@coreui/react";
import { MdLibraryAdd } from "@react-icons/all-files/md/MdLibraryAdd";

import ModalAddUpdateSaleGroup from "./ModalAddUpdateSaleGroup";

function ManagerSaleGroupIndex() {
  const [showGroup, setShowGroup] = React.useState([]);
  const [statusModal, setStatusModal] = React.useState(false);
  const [actionModal, setActionModal] = React.useState("new");

  const viewAddGroupSale = () => {
    setStatusModal(true);
    setActionModal("new");
  };

  const closeModalViewAdd = () => {
    setStatusModal(false);
  };

  React.useEffect(() => {
    const baseUrlapi = Constants.BASE_URL;
    const baseUrlCallApi = Constants.LIST_SALE_GROUP;
    const url = baseUrlapi + baseUrlCallApi;
    axios.post(url, {}).then((res) => {
      setShowGroup((showGroup) => [...showGroup, res.data?.data[0]]);
      console.log(res);
    });
  }, []);

  return (
    <>
      {statusModal ? (
        <ModalAddUpdateSaleGroup
          actionModal={actionModal}
          closeModal={closeModalViewAdd}
        />
      ) : null}
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify title_header">
                Quản lý nhóm sale
              </i>
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
              <TableInManagerSaleGroup propsSaleGroup={showGroup} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default ManagerSaleGroupIndex;
