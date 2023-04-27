import { useState, useEffect } from "react";
import { motion as m } from "framer-motion";

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
  
  return (
    <m.div
      
    >
      <img
        src={url}
        alt="Home image"
        style={{
          transform: `translate(-${position.x}px, -${position.y}px)`,
          transition: ".1s ease",
        }}
      />
    </m.div>
  );
};
