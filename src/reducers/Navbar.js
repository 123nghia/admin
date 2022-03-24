
// constants
const TOGGLE_NAVBAR = "toggle-navbar";

// actions

export const ToggleNav=(value)=>{
    return {
        type : TOGGLE_NAVBAR,
        value
    };
};

// reducers

const initialState = true;
export const changeNavbar = (state = initialState, action ) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
        state = action.value
        console.log(state);
      return state
    default:
      return state
  }
}
