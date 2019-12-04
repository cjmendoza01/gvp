import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const devTools =
  process.env.NODE_ENV === "production"
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...middleware));
// window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {};
const store = createStore(
  rootReducer,
  initialState,
  devTools
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
