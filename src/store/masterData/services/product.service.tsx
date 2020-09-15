import { Product } from "../modals/modal";
import PRODUCTS_DATA from "../masterData";

export const getAllProducts = (): Product[] => {
  return PRODUCTS_DATA;
};
