import { PENDING, /* FULFILLED, REJECTED */ } from 'redux-promise-middleware';
import { PUT_COLLAPSED } from "./actionType";

const reducer = (state = { status: PENDING, collapsed: false }, action) => {
  switch (action.type) {
    case PUT_COLLAPSED: {
      return {
        ...state,
        collapsed: action.value
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
