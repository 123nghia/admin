import callApi from "../utils/callApi";
import Constants from "../contants/contants.js";

const collaboratorsApi = {
  fetchAllCollaboratorList() {
    return callApi(`${Constants.COLLABORATOR_GET}`);
  },
  fetchAllManagerList() {
    return callApi(`${Constants.GET_ALL_MANAGER_SALE_GROUP}`);
  },
  addNewCollaborator(collaboratorInfo) {
    return callApi(
      `${Constants.ADD_NEW_COLLABORATOR}`,
      "POST",
      collaboratorInfo
    );
  },
};

export default collaboratorsApi;
