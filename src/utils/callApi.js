import axios from "axios";
import Contants from "../contants/contants.js";

const callApi = (endpoint, method = "GET", data = null) => {
  console.log(endpoint);
  return axios({
    url: `${Contants.BASE_URL}${endpoint}`,
    method,
    data,
  });
};

export default callApi;
