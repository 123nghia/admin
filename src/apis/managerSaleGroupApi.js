import callApi from "../utils/callApi";
import Constants from "../contants/contants.js";

const saleGroupApi = {
  fetchAllSaleGroup() {
    return callApi(`${Constants.GET_ALL_SALE_GROUP}`, "POST");
  },
  fetchAllMangerList() {
    return callApi(`${Constants.GET_ALL_MANAGER_SALE_GROUP}`);
  },
  addNewSaleGroup(saleGroup) {
    return callApi(`${Constants.ADD_NEW_SALE_GROUP}`, "POST", saleGroup);
  },
  getGroupById(saleGroupId) {
    return callApi(`${Constants.GET_SALE_GROUP_BY_ID}?id=${saleGroupId}`);
  },
};

export default saleGroupApi;
