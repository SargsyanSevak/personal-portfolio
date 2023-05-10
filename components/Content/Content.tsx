import React from "react";
import { motion as m } from "framer-motion";
import { PageImage } from "../PageImage/PageImage";
import Head from "next/head";
const Content = () => {
  return (
    <section className="page">
      <Head>
        <title>Home</title>
        <meta name="description" content="sargsyan" />
      </Head>
      <m.div
        className="bg-yellow-400 absolute top-0 left-0  w-full h-screen flex justify-center items-center"
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PageImage url="https://clouddevs.com/3dbay/files/preview/960x1152/11632331823h6pir0uj7m71aadwkcup7efglgbrnyesqchv7gu2weovjf62e3lurbqziakkof9yhjmonbtjlxcrjlye3oqcaav0w3e9moxusqdz.png" />
      </m.div>

      <m.div
        className="bg-green-500"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
      ></m.div>
    </section>
  );
};

export default Content;
