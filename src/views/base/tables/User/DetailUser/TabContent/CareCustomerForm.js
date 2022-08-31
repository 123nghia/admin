import { AccountCircle } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import React, { Fragment } from "react";
import CallIcon from "@mui/icons-material/Call";

function CareCustomerForm({ detailUserVoucher }) {
  const { fullName, phoneNumber } = detailUserVoucher;
  console.log(fullName, phoneNumber);
  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          variant="standard"
          defaultValue={`Anh/ Chị ${fullName}`}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <CallIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          variant="standard"
          defaultValue={phoneNumber}
        />
      </Box>
    </Fragment>
  );
}

export default CareCustomerForm;
