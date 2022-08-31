import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import TableInManageKeyIndex from "./ManageKeyIndex";
import React from "react";
function ManageKey() {
  React.useEffect(()=>{
    
  },[])
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify title_header">Quản lý Key</i>
            </CardHeader>
            <CardBody className="table__overflow">
              <TableInManageKeyIndex />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ManageKey;
