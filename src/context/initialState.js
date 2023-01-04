import { fetchCart, fetchUser } from "../utils/fetchLocalStoragesData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  storeCollections: null,
  cartShow: false,
  cartItems: cartInfo,
};
