import { RootState } from "../store";

export const getFeaturedProductsSelector = (state: RootState) => {
  return state.products.featuredProducts;
};

export const getBestSellersProductsSelector = (state: RootState) => {
  return state.products.bestSellersProducts;
};

export const getNewArrivalsProductsSelector = (state: RootState) => {
  return state.products.newArrivalsProducts;
};

export const getTopRatedProductsSelector = (state: RootState) => {
  return state.products.topRatedProducts;
};

export const getSpecialOffersProductsSelector = (state: RootState) => {
  return state.products.specialOffersProducts;
};
