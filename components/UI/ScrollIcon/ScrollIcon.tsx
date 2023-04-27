import React from "react";
import { motion as m } from "framer-motion";

const ScrollIcon = ({ y, hasScrolled }: any) => {
  return (
    <m.div
      className="icon-scroll"
      style={{
        y: y,
        opacity: hasScrolled ? 0 : 1,
        transition: "all 0.5s ease-in-out",
      }}
    ></m.div>
  );
};

export default ScrollIcon;