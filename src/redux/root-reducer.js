import { combineReducers } from "redux";
// READ REDUX-PERSIST DOCS
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //defaults to local storage

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //pass reducer we want to persist. user is handled by firebase.
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
