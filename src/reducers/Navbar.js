
// constant
const TOGGLE_NAVBAR = "toggle-navbar";

// action
export const ToggleNav=()=>{
    return {
        type : TOGGLE_NAVBAR
    };
};

// reducers

const StatusNavBar = true;

export const ReducerStatusNavBar = (state = StatusNavBar, action) => {
    switch (action.type) {
        case TOGGLE_NAVBAR:
            return !state;
        default:
            return state;
    };
};
