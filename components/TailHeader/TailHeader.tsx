import { useState } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { motion as m } from "framer-motion";

const headerAnim = {
  hidden: {
    y: -70,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: "spring",
      mass: 0.4,
      damping: 4,
    },
  },
};
const navAnim = {};
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <m.header
      className="bg-inherit absolute top-0 left-0 right-0 text-white header"
      variants={headerAnim}
      initial="hidden"
      animate="visible"
    >
      <nav
        className="mx-auto flex items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={handleOpenModal}
          >
            <Bars2Icon className="h-12 w-12 font-bold" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-12">
          <m.ul className="md:flex md:gap-x-12">
            <m.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, staggerChildren: 0.5 }}
            >
              <Link
                href="/"
                className="text-sm font-semibold leading-6 text-white"
              >
                Home
              </Link>
            </m.li>

            <m.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, staggerChildren: 0.5 }}
            >
              <Link
                href="/Works"
                className="text-sm font-semibold leading-6 text-white"
              >
                Works
              </Link>
            </m.li>

            <m.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1, staggerChildren: 0.5 }}
            >
              <Link
                href="/About"
                className="text-sm font-semibold leading-6 text-white"
              >
                About
              </Link>
            </m.li>

            <m.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1, staggerChildren: 0.5 }}
            >
              <Link
                href="/Blog"
                className="text-sm font-semibold leading-6 text-white"
              >
                Blog
              </Link>
            </m.li>
          </m.ul>
        </Popover.Group>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <MobileMenu isOpen={isModalOpen} onClose={handleCloseModal} />
    </m.header>
  );
}
