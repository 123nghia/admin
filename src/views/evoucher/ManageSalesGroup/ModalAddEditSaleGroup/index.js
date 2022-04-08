import { CButton } from "@coreui/react";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import React, { useEffect, useState } from "react";

function ModalAddEditSaleGroup({ onShow }) {
  const [action, setAction] = useState(onShow);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  return (
    <Modal isOpen={action}>
      <ModalHeader>
        {action ? `Tạo nhóm sale` : `Cập nhật nhóm sales`}
      </ModalHeader>
      <ModalBody>
        <div className="text-center error_msg">
          {/* {showErrorMessage && `${this.state.errorMessage} !!!`} */}
        </div>
        <Typography
          variant="subtitle1"
          component="h2"
          style={{ margin: "0.6rem 0 0.6rem 0" }}
        >
          Tên Nhóm <span style={{ color: "red" }}>(*)</span>:
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nhập tên nhóm sales"
          variant="outlined"
          fullWidth
          size="small"
        />
        <Typography
          variant="subtitle1"
          component="h2"
          style={{ margin: "1.2rem 0 0.6rem 0" }}
        >
          Trưởng Nhóm <span style={{ color: "red" }}>(*)</span>:
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Chọn thông tin trưởng nhóm"
              size="small"
            />
          )}
          style={{ minWidth: "100%" }}
        />
      </ModalBody>

      <ModalFooter>
        <CButton
          color="primary"
          // onClick={(e) => {
          //   this.state.action === "new" ? this.addUsers() : this.updateUsers();
          // }}
        >
          Tạo nhóm
        </CButton>{" "}
        <CButton color="secondary" onClick={() => setAction(!action)}>
          Huỷ bỏ
        </CButton>
      </ModalFooter>
    </Modal>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

export default ModalAddEditSaleGroup;
