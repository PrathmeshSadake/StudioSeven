// REDUX
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// REDUX SETUP
const middlewares = [logger]; //just to log actions of our apps from 'redux-logger'
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
