import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  productsInitialStateType,
  setProductListItemPayload,
} from "../../types/productsTypes";
import { HYDRATE } from "next-redux-wrapper";

const initialState: productsInitialStateType = {
  products: [],
  featuredProducts: [],
  bestSellersProducts: [],
  newArrivalsProducts: [],
  topRatedProducts: [],
  specialOffersProducts: [],
  isLoading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setFeaturedProducts(
      state,
      action: PayloadAction<setProductListItemPayload>
    ) {
      state.featuredProducts = action.payload.listArray;
    },
    setBestSellersProducts(
      state,
      action: PayloadAction<setProductListItemPayload>
    ) {
      state.bestSellersProducts = action.payload.listArray;
    },
    setNewArrivalsProducts(
      state,
      action: PayloadAction<setProductListItemPayload>
    ) {
      state.newArrivalsProducts = action.payload.listArray;
    },
    setTopRatedProducts(
      state,
      action: PayloadAction<setProductListItemPayload>
    ) {
      state.topRatedProducts = action.payload.listArray;
    },
    setSpecialOffersProducts(
      state,
      action: PayloadAction<setProductListItemPayload>
    ) {
      state.specialOffersProducts = action.payload.listArray;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload.products };
    },
  },
});

export const {
  setFeaturedProducts,
  setBestSellersProducts,
  setNewArrivalsProducts,
  setTopRatedProducts,
  setSpecialOffersProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
