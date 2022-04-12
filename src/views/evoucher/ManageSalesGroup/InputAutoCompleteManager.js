import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import saleGroupApi from "src/apis/managerSaleGroupApi";

function InputAutoCompleteManager({ onGetManager, value }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  const [mangerList, setManagerList] = useState([]);

  const onFetchAllSaleGroup = async () => {
    const res = await saleGroupApi.fetchAllMangerList();
    setManagerList([...res?.data?.data]);
    setOptions([...res?.data?.data]);
  };

  const mapMangerNameToId = (manager) => {
    const idx = mangerList.findIndex((item) => item?.name === manager?.name);
    if (idx !== -1) return onGetManager(mangerList[idx]._id);
  };

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    active && onFetchAllSaleGroup();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      fullWidth
      size="small"
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, manager) => {
        mapMangerNameToId(manager);
      }}
      isOptionEqualToValue={(option, value) => {
        return option?.name === value?.name;
      }}
      getOptionLabel={(option) => {
        return option?.name;
      }}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          sx={{ width: "100%" }}
          {...params}
          label="Chọn người quản lý nhóm"
          name="saleGroup"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}

export default InputAutoCompleteManager;
