import React from "react";
import { motion as m } from "framer-motion";
import Head from "next/head";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import { PageImage } from "@/components/PageImage/PageImage";
const About = () => {
  return (
    <section className="page">
      <Head>
        <title>About</title>
        <meta name="description" content="sargsyan" />
      </Head>
      <m.div
        className="bg-orange-600 absolute top-0 left-0  w-full h-screen flex justify-center items-center page"
        animate={{ x: "0%" }}
        exit={{ opacity: 1 }}
        initial={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
         <PageImage url="https://clouddevs.com/3dbay/files/preview/1280x939/11674070814enwth4ztjsllsdy9ehhklhgktxciwwbuqwkdf2avit9kw7mq9wsedu4zgyeyvz8fvdf5jew0rbkqvnkwmn1n74nlxwd3ycsyjq8t.png" />
      </m.div>
      <SmoothScroll>
        <div className="bg-green-500">
         
        </div>
      </SmoothScroll>
    </section>
  );
};

export default About;
