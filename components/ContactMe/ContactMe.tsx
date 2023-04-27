import { motion, AnimatePresence } from "framer-motion";

interface FullScreenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullScreenModal: React.FC<FullScreenModalProps> = ({
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
          className="fixed inset-0 modal flex justify-center items-center bg-gray-800 bg-opacity-50"
        >
          <motion.div
            initial={{ width: "90%", height: "1%" }}
            animate={{ width: "90%", height: "90%" }}
            
            transition={{ duration: 0.5,ease:'easeIn'}}
            exit={{ width: "90%",height:'5%' }}
            className="bg-white w-16 h-16 "
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.75 }}
              className="relative"
            >
              <div
                className="absolute top-4 right-6 text-2xl cursor-pointer"
                onClick={onClose}
              >
                X
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic tenetur quibusdam incidunt eos nesciunt doloremque reprehenderit exercitationem enim totam.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
