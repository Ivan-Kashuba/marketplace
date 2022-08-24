import "../src/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { wrapper } from "../src/store/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marketplace</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
