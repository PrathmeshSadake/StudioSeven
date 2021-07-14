// REDUX
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { createStore, applyMiddleware } from "redux";

// REDUX SETUP
const middlewares = [logger]; //just to log actions of our apps from 'redux-logger'
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
