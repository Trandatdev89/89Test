const ReducerUser = (state = false, action) => {
  switch (action.type) {
    case "User":
      return action.status;
    default:
      return state;
  }
};

export default ReducerUser;
