import React, { ReactNode } from "react";
import AsideMenu from "../AsideMenu/AsideMenu";
import Background from "../Background/Background";
import Header from "../TailHeader/TailHeader";
import { AnimatePresence,motion } from "framer-motion";
import { useRouter } from "next/router";
interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  return (
    <>
      <Header />
      <Background />
    
      <AnimatePresence initial={false}
      >
        <motion.main
          key={router.route}
          initial={{ opacity: 1}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0.8}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >{children}</motion.main>
      </AnimatePresence>
    </>
  );
};

export default Layout;
