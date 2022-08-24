import useAppDispatch from "../useAppDispatch";
import { getFeaturedProducts } from "../../store/thunks/productsThunks";
import {
  getBestSellersProductsSelector,
  getFeaturedProductsSelector,
  getNewArrivalsProductsSelector,
  getSpecialOffersProductsSelector,
  getTopRatedProductsSelector,
} from "../../store/selectors/productsSelectors";
import useAppSelector from "../useAppSelector";

export const useProducts = () => {
  const dispatch = useAppDispatch();

  const featuredProducts = useAppSelector(getFeaturedProductsSelector);
  const bestSellersProducts = useAppSelector(getBestSellersProductsSelector);
  const newArrivalsProducts = useAppSelector(getNewArrivalsProductsSelector);
  const topRatedProducts = useAppSelector(getTopRatedProductsSelector);
  const specialOffersProducts = useAppSelector(
    getSpecialOffersProductsSelector
  );

  const _getFeaturedProducts = () => {
    return dispatch(getFeaturedProducts());
  };

  return {
    featuredProducts,
    bestSellersProducts,
    newArrivalsProducts,
    topRatedProducts,
    specialOffersProducts,
    getFeaturedProducts: _getFeaturedProducts,
  };
};
