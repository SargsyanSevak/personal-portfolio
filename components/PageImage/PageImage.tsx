import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { useTransform } from "framer-motion";
import { useMotionValue } from "framer-motion";
export const PageImage = ({ url }: any) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: (event.clientX / window.innerWidth) * 50,
        y: (event.clientY / window.innerHeight) * 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollY = useMotionValue(0);
  const y = useTransform(scrollY, [0, 100], ["0%", "-100%"]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <m.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: "-100%", opacity: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
      }}
      style={{
        y: y,
        opacity: hasScrolled ? 0 : 1,
        transition: "all 0.2s ease",
      }}
    >
      <img
        src={url}
        alt="Example image"
        style={{
          transform: `translate(-${position.x}px, -${position.y}px)`,
          transition: ".1s ease",
        }}
      />
    </m.div>
  );
};
