import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>one night stand</title>
        <style>
          @import
          url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap");
          
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
