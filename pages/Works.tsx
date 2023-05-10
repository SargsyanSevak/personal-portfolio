import React from "react";
import { motion as m } from "framer-motion";
import Head from "next/head";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { PageImage } from "@/components/PageImage/PageImage";
const Works = () => {
  return (
    <section className="page">
      <Head>
        <title>Works</title>
        <meta name="description" content="sargsyan" />
      </Head>
      <m.div
        className="bg-blue-400 absolute top-0 left-0  w-full h-screen flex justify-center items-center"
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
       <PageImage url="https://clouddevs.com/3dbay/files/preview/1280x1066/11633020424wsfb9s7hnbsahzd1a4fbns4xz9yj0gr8evzbsm22wotsgflkdl3ofvzblqfozuxeeup23eihvydt7xmkwaqijzfdjiy2uobamjgu.png" />
      </m.div>
      
      <div className="bg-green-500">
      <SmoothScroll>
        
        </SmoothScroll>
      </div>
      
    </section>
  );
};

export default Works;
