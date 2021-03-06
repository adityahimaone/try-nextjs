import React from "react";
import Head from "next/head";
import Header from "../components/Header/Nav";
import Footer from "../components/Footer/footer";
import styles from "./Mainlayout.module.css";

export default function mainLayout(props) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <div className={`mx-auto ${styles.container}`}>
        <Header />
        <div className={`container mx-auto max-w-screen-lg ${styles.content}`}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
