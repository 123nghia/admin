import callApi from "../utils/callApi";
import Constants from "../contants/contants.js";

const campaignApi = {
  fecthAllCampaignList(value) {
    if(!value){
      return callApi(`${Constants.GET_ALL_CAMPAIGN_VER2}`);
    }else{
      return callApi(`${Constants.GET_ALL_CAMPAIGN_VER2}?company_id=${value}`);
    }
  },
  getDetailCampaign(id) {
    return callApi(`${Constants.GET_DETAIL_CAMPAIGN}?id=${id}`);
  },
};

export default campaignApi;
