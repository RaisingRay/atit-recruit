import Layout from "@/component/Layout";
import React from "react";
import { StrictMode } from "react";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {

  return (

    <Layout>
      <Component {...pageProps} />
    </Layout >

  );
}
