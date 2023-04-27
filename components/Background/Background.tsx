import React,{ useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Social from "../Social/Social";
import Header from "../TailHeader/TailHeader";
import ScrollIcon from "../UI/ScrollIcon/ScrollIcon";
 import { FullScreenModal } from "../ContactMe/ContactMe";
 
const Background = () => {
 


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg  w-full h-screen">
      <Social/>
      <ScrollIcon/>
      
      {/* <button onClick={handleOpenModal} className=" text-white px-4 py-2  fixed z-50 top-0 right-0">
        Open Modal
      </button>
      <FullScreenModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  );
};

export default Background;
