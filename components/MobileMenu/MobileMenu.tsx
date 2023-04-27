import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<FullScreenModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 modal flex justify-center items-center bg-gray-800 bg-opacity-50 mobile"
        >
          <motion.div
            initial={{ width: "90%", height: "1%" }}
            animate={{ width: "90%", height: "95%" }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            exit={{ width: "90%", height: "5%" }}
            className="bg-white w-16 h-16 "
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.75 }}
              className="relative w-full h-full overflow-hidden"
            >
              <div
                className="absolute top-4 right-6 cursor-pointer text-black text-4xl"
                onClick={onClose}
              >
                <AiOutlineClose />
              </div>
              <div className="mobile-menu  w-full h-3/5">
                <div className="menu-items h-full flex flex-col justify-end  items-center uppercase">
                  <Link
                    href="/"
                    className="text-xl  leading-6 text-black h-1/6 flex justify-center items-center"
                    onClick={onClose}
                  >
                    Home
                  </Link>
                  <Link
                    href="/Works"
                    className="text-xl  leading-6 text-black h-1/6 flex justify-center items-center"
                    onClick={onClose}
                  >
                    Works
                  </Link>
                  <Link
                    href="/About"
                    className="text-xl  leading-6 text-black h-1/6 flex justify-center items-center"
                    onClick={onClose}
                  >
                    About
                  </Link>
                  <Link
                    href="/Blog"
                    className="text-xl leading-6 text-black h-1/6 flex justify-center items-center"
                    onClick={onClose}
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="social-items text-black h-2/4 bg-gray-200 flex justify-center items-center flex-col">
                <h4 className="text-sm font-semibold text-center py-8 ">
                  GET IN TOUCH
                </h4>
                <div className="social__icons w-full">
                  <ul className="flex justify-evenly items-center w-full">
                    <li>
                      <Link href={"https://google.com"} target="_blank">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://google.com"} target="_blank">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://google.com"} target="_blank">
                        <FaGithub />
                      </Link>
                    </li>
                    <li>
                      <Link href={"https://google.com"} target="_blank">
                        <FaWhatsapp />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
