import React from "react";
import {motion as m} from 'framer-motion'
import Head from "next/head";
import { PageImage } from "@/components/PageImage/PageImage";
const Blog = () => {
  return (
    <section className="page">
      <Head>
        <title>Blog</title>
        <meta name="description" content="sargsyan" />
      </Head>
      <m.div className="bg-purple-700 absolute top-0 left-0  w-full h-screen flex justify-center items-center page"
       animate={{ x: "0%" }}
       exit={{ opacity: 1 }}
       initial={{ x: "100%" }}
       transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <PageImage url="https://clouddevs.com/3dbay/files/preview/1281x854/11641573542yne6mvcwwlr5wfxpesdi8kmtil3otiucfyxwxx2dsmvlbetsspuiro5cw8hncjd1iktt5dwsn3pfkhpqs3qr9h2kn0pj2laya8aa.png" />
      </m.div>
      <div className="bg-green-500">
        
      </div>
    </section>
  );
};

export default Blog;
