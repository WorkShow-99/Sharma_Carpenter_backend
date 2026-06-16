import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

import { thunk } from "redux-thunk";
// import logger from "redux-logger";
import { createLogger } from "redux-logger";

const logger = createLogger();
import rootReducer from "./combine_reducer";


// console.log(thunk);
// console.log(logger);
// console.log(middlewares);

const middlewares = [thunk];

if (import.meta.env.DEV) {
  middlewares.push(logger);
}

const composeEnhancers =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    import.meta.env.DEV)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

// store.subscribe(() => {
//   const state = store.getState();
//   console.log("State updated:", state);

//  if (state.user?.isAuthenticated) {
//     localStorage.setItem("user", JSON.stringify(state.user.user));
//   } else {
//     localStorage.removeItem("user");
//   }
// });

export default store;