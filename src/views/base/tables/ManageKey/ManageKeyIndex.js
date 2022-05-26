import React from "react";
import {
  Input,
} from "reactstrap";
import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";
function TableInManageKeyIndex(props) {
  const [isDisable, setIsDisable] = React.useState(true);

  const titles = ["STT.", "Key soi da", "Key makeup"];

  return (
    <>
    <div class="flex-end">
        {isDisable ? (
        <CButton
            outline
            color="info"
            size="md"
            className="btn-main"
            onClick={async (e) => {
              setIsDisable(!isDisable );
            }}
        >
            <CIcon name="cil-pencil" style={{ marginRight: '6px' }} /> Cập nhật
        </CButton>
        ) : (
        <CButton
            outline
            color="info"
            size="md"
            className="btn-main"
            
        >
            <CIcon name="cil-pencil" style={{ marginRight: '6px' }} /> Xác nhận cập nhật
        </CButton>
        )}
        </div>
    <div className="mt-2">
        <p style={{margin: 0}}>Key soi da</p>
          <Input
              style={styles.searchInput}
            
              placeholder="Nhập key soi da"
              value={""}
              readOnly={isDisable}
          />
    </div>
    <div className="mt-2">
      <p style={{margin: 0}}>Key makeup</p>
              <Input
              style={styles.searchInput}
             
              placeholder="Nhập key soi da"
              value={""}
              readOnly={isDisable}
              />
    </div>      
    </>
  );
}

export default TableInManageKeyIndex;
const styles = {
  mgl5: {
    marginLeft: "5px",
  },
  searchInput: {
    width: "100%",
    display: "inline-block",
    margin: "1px",
  },
};
