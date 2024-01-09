import data from "../Data";
import { useParams } from "react-router-dom";
import UserDisplayCmp from "../Components/UserDisplayCmp";
import UserInputCmp from "../Components/UserInputCmp";
import { useState, useEffect } from "react";
import FrameLoader from "../Components/FrameLoader";
import Navbar from "../Components/NavBar";
import { Link } from "react-router-dom";
// import Footer from "../Components/Footer";
const SingleEditScreen = () => {
  const [userInput, setUserInput] = useState("");
  const { id } = useParams();
  const imageData = data[id];
  const {
    name,
    imageR,
    text,
    top,
    bg,
    bottom,
    ids,
    logos,
    contactLogo,
    sampleLogo,
  } = imageData;

  const handleInputChange = (value) => {
    setUserInput(value);
  };
  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);
  useEffect(() => {}, [userInput]);
  return (
    <>
      <div className="bg-gray-800 h-screen overflow-y-auto no-scrollbar ">
        <div className="pt-4">
          <Navbar />
        </div>
        <div className="flex  pt-12 pb-10 justify-between">
          <div className="pl-44 bg-gray-800    mb-10">
            <UserInputCmp
              onInputChange={handleInputChange}
              inputValue={userInput}
            />
          </div>
          <div className="pr-44 pt-12    top-0 right-0">
            <UserDisplayCmp imageData={imageData} FileData={{ ...userInput }} />
            <h1 className="text-[#16a34a] capitalize font-custom2 text-center pt-1 cursor-default">
              The Created Design will Available on{" "}
              <Link to="/mycards">
                <span className="text-white pl-1 hover:text-gray-400 cursor-pointer">
                  Mycard
                </span>
              </Link>
            </h1>
          </div>
        </div>
        {/* <div></div>
        <Footer /> */}
      </div>
    </>
  );
};

export default SingleEditScreen;
