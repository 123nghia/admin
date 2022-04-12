import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import collaboratorsApi from "src/apis/manageCollaboratorsApi";
import { Fragment, useEffect, useState } from "react";

export default function InputAutoCompleteMemberList({
  onGetSaleIdList,
  memberList,
}) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  const loading = open && options.length === 0;

  const extractNameMember = () => {
    return memberList.reduce((prevousList, currentItem) => {
      prevousList.push(currentItem.username);
      return prevousList;
    }, []);
  };

  const mapSaleNameToId = (value) => {
    const saleIdList = value.reduce((previousSaleList, currentSaleList) => {
      const idx = options.findIndex(
        (sale) => sale.username === currentSaleList.username
      );

      if (idx !== -1) {
        previousSaleList.push(options[idx]._id);
      }

      return previousSaleList;
    }, []);

    onGetSaleIdList(saleIdList);
  };

  const onFetchAllSaleGroup = async () => {
    const res = await collaboratorsApi.fetchAllCollaboratorList();
    setOptions([...res?.data?.data]);
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
      size="small"
      id="asynchronous-demo"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, value) => mapSaleNameToId(value)}
      fullWidth
      loading={loading}
      filterSelectedOptions
      multiple
      options={options?.map((option) => option?.username)}
      // defaultValue={["6245243be2b52317153c3923", "62456b216c2f6d73b70fe55a"]}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Chọn thành viên trong nhóm"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
}
