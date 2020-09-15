import {
  FETCH_ALL_PRODUCTS,
  FETCH_BEST_PRODUCTS,
  FETCH_TOP_PRODUCTS,
  UPDATE_FILTER,
} from "./product.types";
import { Product } from "../modals/modal";
import { getAllProducts } from "../services/product.service";

export const fetchAllProducts = () => async (
  dispatch: (arg: { type: string; payload: Product[] }) => void
) => {
  const products = getAllProducts();
  dispatch({ type: FETCH_ALL_PRODUCTS, payload: products });
};
