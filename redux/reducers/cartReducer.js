let defaultState = {
  selectedItems: { items: [], restaurantName: "" },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action, "🍒");
      let newState = { ...state };
      newState.selectedItems = {
        items: [...state.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState, "👉");
      return newState;
    case "REMOVE_FROM_CART":
      let newState2 = { ...state };
      newState2.selectedItems = {
        items: state.selectedItems.items.filter(
          (item) => item.title !== action.payload.title
        ),
        restaurantName: action.payload.restaurantName,
      };
      console.log(newState2, "❌");
      return newState2;
    case "CLEAR_CART":
      return { ...state, selectedItems: { items: [], restaurantName: "" } };
    default:
      return state;
  }
};

export default cartReducer;
