import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
