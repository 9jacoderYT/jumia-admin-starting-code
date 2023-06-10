import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>ADMIN </title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
