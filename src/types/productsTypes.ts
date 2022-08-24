import { productItemType } from "./models";

export type productsInitialStateType = {
  isLoading: boolean;
  featuredProducts: Array<productItemType>;
  bestSellersProducts: Array<productItemType>;
  newArrivalsProducts: Array<productItemType>;
  topRatedProducts: Array<productItemType>;
  specialOffersProducts: Array<productItemType>;
  products: Array<productItemType>;
};

export type setProductListItemPayload = {
  listArray: Array<productItemType>;
};

export type getProductsListItemResultType = {
  productListDoc: {
    name: string;
  };
  products: Array<productItemType>;
};
