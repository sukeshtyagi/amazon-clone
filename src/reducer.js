export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket.reduce((amount, item) => amount + item.price, 0);
};

const reducer = (state, action) => {
  console.log("Current state:", state);
  console.log("Action:", action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Cannot remove as product is not in basket");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SIGN_IN":
      console.log("Signing in user:", action.user);
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
