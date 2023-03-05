import redux, { createStore } from "redux";

const currentUserReducer = (state = { user: null }, action) => {
  if (action.type === "LOGIN-USER") {
    return {
      state,
    };
  }
  return state;
};

const store = createStore(currentUserReducer);

export default store;
