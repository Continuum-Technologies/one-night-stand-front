import { useEffect } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>One Night Stand</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
