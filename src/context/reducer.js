export const actionType = {
  SET_USER: "SET-USER",
  SET_STORE_COLLECTIONS: "SET_STORE_COLLECTIONS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CARTITEMS: "SET_CARTITEMS",
  SET_USERS: "SET_USERS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionType.SET_STORE_COLLECTIONS:
      return {
        ...state,
        storeCollections: action.storeCollections,
      };
    case actionType.SET_CART_SHOW:
      return {
        ...state,
        cartShow: action.cartShow,
      };
    case actionType.SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case actionType.SET_CARTITEMS:
      return {
        ...state,
        cartItems: action.cartItems,
      };

    default:
      return state;
  }
};

export default reducer;
