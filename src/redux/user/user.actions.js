import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  let action = {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
  return action;
};
