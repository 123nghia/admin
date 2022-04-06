import callApi from "../utils/callApi";
import Constants from "../contants/contants.js";

const campaignApi = {
  fecthAllCampaignList() {
    return callApi(`${Constants.GET_ALL_CAMPAIGN_VER2}`);
  },
  getDetailCampaign(id) {
    return callApi(`${Constants.GET_DETAIL_CAMPAIGN}?id=${id}`);
  },
};

export default campaignApi;
