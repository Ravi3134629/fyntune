const intialState = {
  user: null,
  shops: null,
};

function AppReducer(state = intialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SHOPS":
      return { ...state, shops: action.shops };

    case "REMOVE_SHOP":
      return {
        ...state,
        shops: state.shops.filter((shop) => shop._id !== action.id),
      };
    default:
      return state;
  }
}

export default AppReducer;
