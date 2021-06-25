
export function currentAddress(state = {}, action) {
  switch (action.type) {
    case 'ADD_CURRENT_ADDRESS':
      return action;

    default:
      return state;
  }
}
export function currentTrans(state = {}, action) {
    switch (action.type) {
        case 'ADD_CURRENT_TRANS':
            return action;

        default:
            return state;
    }
}
export function currentAddressTrans(state = {}, action) {
    switch (action.type) {
        case 'ADD_CURRENT_ADDRESS_TRANS':
            return action;

        default:
            return state;
    }
}
export function currentAddressAnalytic(state = {}, action) {
  switch (action.type) {
    case 'ADD_CURRENT_ADDRESS_ANALYTIC':
      return action;

    default:
      return state;
  }
}
