import styles from "../src/styles/Auth.module.scss";
import { GetServerSideProps, NextPage } from "next";
import { authAPI, productsAPI } from "../src/api/api";
import { useProducts } from "../src/hooks/store/useProducts";
import { wrapper } from "../src/store/store";
import {
  getBestSellersProducts,
  getFeaturedProducts,
  getNewArrivalsProducts,
  getSpecialOffersProducts,
  getTopRatedProducts,
} from "../src/store/thunks/productsThunks";

const Home: NextPage = () => {
  const products = useProducts();
  console.log("products:", products);

  const setRedux = () => {
    getFeaturedProducts();
  };

  const getSubCategories = () => {
    productsAPI.getFeatureProducts().then((res) => {
      console.log("response:", res);
    });
  };

  const addSomething = () => {
    productsAPI.addProduct();
  };

  const quitAccount = async () => {
    await authAPI.logout();
  };

  return (
    <div className={styles.container}>
      <div>Hello!!!</div>
      <button onClick={addSomething}>Add</button>
      <button onClick={getSubCategories}>Get info</button>
      <button onClick={quitAccount}>Quit</button>
      <button onClick={setRedux}>Set to Redux</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    await store.dispatch(getFeaturedProducts());
    await store.dispatch(getBestSellersProducts());
    await store.dispatch(getNewArrivalsProducts());
    await store.dispatch(getTopRatedProducts());
    await store.dispatch(getSpecialOffersProducts());

    return {
      props: {},
    };
  });

export default Home;
