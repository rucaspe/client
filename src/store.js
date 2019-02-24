import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import persistState from "redux-localstorage";
import thunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
// Actions
// import { main, settings, cart, form, version } from "./actions";
import logger from "redux-logger";

export const history = createHistory();

const redusers = combineReducers({
  router: routerReducer,
});

const initialState = {};
const enhancers = [];
let middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;
  middleware = middleware.concat(logger);

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  // persistState(["form", "cart"], {
  //   key: "root",
  // }),
  ...enhancers
);

export default createStore(redusers, initialState, composedEnhancers);
