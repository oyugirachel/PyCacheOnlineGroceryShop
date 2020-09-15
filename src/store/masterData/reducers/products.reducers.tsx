import { Product } from "../modals/modal";
import { FETCH_ALL_PRODUCTS } from "./../actions/product.types";

const initialState = {
  products: [],
};

const productReducer = (
  state = initialState,
  action: {
    type: string;
    payload: Product[];
  }
) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_PRODUCTS:
      console.log(`*** ${type} ***`);
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};
export default productReducer;
