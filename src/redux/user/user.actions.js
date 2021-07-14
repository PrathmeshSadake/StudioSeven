export const setCurrentUser = (user) => {
  let action = {
    type: "SET_CURRENT_USER",
    payload: user,
  };
  return action;
};
