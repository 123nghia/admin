
// Constant
export const CHANGE_TYPE_USER = "change-type-user";

// Actions
export const changeTypeUser = (value) => {
  return {
    type: CHANGE_TYPE_USER,
    value,
  };
};

// Reducer

const initType = "2";
export const TypeUser = (state = initType, action) => {
  switch (action.type) {
    case CHANGE_TYPE_USER:
      state = action.value;
      return state;
    default:
      return state;
  }
};

