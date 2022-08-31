import callApi from "../utils/callApi";
import Constants from "../contants/contants.js";

const companyApi = {
  fetchPluginCompanyList() {
    return callApi(`${Constants.PLUGIN_LIST_COMPANY}`, "POST");
  },
};

export default companyApi;
