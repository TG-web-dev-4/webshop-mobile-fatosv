import { ADD_TO_CART } from "../actions/cart";

const initialState = {
  products: [],
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
  }
  return state;
};