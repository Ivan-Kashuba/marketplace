import { productsAPI } from "../../api/api";
import {
  setBestSellersProducts,
  setFeaturedProducts,
  setNewArrivalsProducts,
  setSpecialOffersProducts,
  setTopRatedProducts,
} from "../slices/productsSlice";
import { productItemType } from "../../types/models";
import { AppDispatch, AppThunk } from "../store";

export const getFeaturedProducts = () => async (dispatch: AppDispatch) => {
  const response = await productsAPI.getFeatureProducts();
  const featuredProducts: Array<productItemType> = response.products;
  dispatch(setFeaturedProducts({ listArray: featuredProducts }));
};

export const getBestSellersProducts = () => async (dispatch: AppDispatch) => {
  const response = await productsAPI.getBestSellersProducts();
  const bestSellersProducts: Array<productItemType> = response.products;
  dispatch(setBestSellersProducts({ listArray: bestSellersProducts }));
};

export const getNewArrivalsProducts = () => async (dispatch: AppDispatch) => {
  const response = await productsAPI.getNewArrivalsProducts();
  const newArrivalProducts: Array<productItemType> = response.products;
  dispatch(setNewArrivalsProducts({ listArray: newArrivalProducts }));
};

export const getTopRatedProducts = () => async (dispatch: AppDispatch) => {
  const response = await productsAPI.getTopRatedProducts();
  const topRatedProducts: Array<productItemType> = response.products;
  dispatch(setTopRatedProducts({ listArray: topRatedProducts }));
};

export const getSpecialOffersProducts = () => async (dispatch: AppDispatch) => {
  const response = await productsAPI.getSpecialOffersProducts();
  const specialOffersProducts: Array<productItemType> = response.products;
  dispatch(setSpecialOffersProducts({ listArray: specialOffersProducts }));
};
