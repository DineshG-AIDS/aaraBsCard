import data from "../Data";
import FloatingBtn from "../Components/FloatingBtn";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineGppGood } from "react-icons/md";
import { useState, useEffect } from "react";
import TestingFooterCmp from "../Components/TestingFooterCmp";
import Navbar from "../Components/NavBar";
const CardsListScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [Timer, SetTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => SetTimer(true), 1700);
  }, []);
  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <>
      {!Timer && <TestingFooterCmp />}
      {Timer && (
        <>
          <div className="bg-gradient-to-br from-gray-900 to-black">
            <div className="pt-3">
              <Navbar />
            </div>

            <div className="grid pl-24k pt-10 sm:grid-cols-3 gap-x-10 gap-y-16 no-scrollbar">
              <FloatingBtn />
              {Object.keys(data).map((id) => (
                <div key={id} className="rounded-xl p-10">
                  <img
                    src={data[id].image}
                    alt=""
                    onClick={() => openModal(id)}
                    className="w-4/5  bg-white p-2 rounded-2xl cursor-pointer no-scrollbar"
                  />
                </div>
              ))}
              <SpringModal
                isOpen={!!selectedImage}
                setIsOpen={closeModal}
                image={selectedImage}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
const SpringModal = ({ isOpen, setIsOpen, image }) => {
  if (!image) {
    return null;
  }

  const { name, text, image: imageUrl } = data[image];
  console.log(imageUrl);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className=" b p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer no-scrollbar"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <MdOutlineGppGood className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-20" />
            <div className="relative z-10">
              <div className="text-indigo-600 grid place-items-center mx-auto">
                <img src={imageUrl} className="w-2/5 rounded-xl" alt="" />
              </div>

              <h3 className="text-3xl font-bold text-center mb-2 mt-2">
                {name}
              </h3>
              <p className="text-center mb-6">{text}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  <div className="flex gap-3 justify-center items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.8}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />{" "}
                      </svg>
                    </span>
                    <span className="sm:text-lg text-md">Go Back</span>
                  </div>
                </button>
                {console.log(image)}
                <Link to={`/recreate/${image}`}>
                  <button
                    to={`/recreate/${image}`}
                    className="bg-white hover:opacity-90 sm:px-16 px-8 py-3 transition-opacity text-indigo-600 font-semibold w-full  rounded"
                  >
                    Recreate
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default CardsListScreen;
