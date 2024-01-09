import data from "../Data";
import { useParams, useNavigate } from "react-router-dom";
import UserDisplayCmp from "../Components/UserDisplayCmp";
import UserInputCmp from "../Components/UserInputCmp";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AnimationData from "../assets/poper2.json";
import Navbar from "../Components/NavBar";

// import Footer from "../Components/Footer";
const EditScreen = () => {
  const [userInput, setUserInput] = useState("");
  const { id } = useParams();
  const [SaveBtn, setSaveBtn] = useState(false);
  const [ctBtn, setCtBtn] = useState(false);
  const handleButtonClick = () => {
    setCtBtn((prevCtBtn) => !prevCtBtn);
  };
  const Navigate = useNavigate();
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
  // console.log("hello");
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

  let vv = setTimeout(() => {
    if (SaveBtn) {
      Navigate("/mycards");
    }
  }, 2500);
  console.log(vv);
  useEffect(() => {
    if (SaveBtn) {
      window.scrollTo({ top: 10, behavior: "smooth" });
    }
  }, [SaveBtn]);
  useEffect(() => {}, [userInput]);
  return (
    <>
      <div className="bg-gray-800 h-screen overflow-y-auto no-scrollbar ">
        <div className="pt-4">
          <Navbar />
        </div>
        {SaveBtn && (
          <>
            <div className="w-1/2 ml-96">
              <div>
                {" "}
                <h1 className="text-center text-white font-custom2">
                  {` you will be redirected in ${Math.floor(vv / 60)} sec.....`}
                </h1>
                <Lottie animationData={AnimationData} />
              </div>
            </div>
          </>
        )}
        {!SaveBtn && (
          <div className="flex  pt-12 pb-10 justify-between">
            <div className="pl-44 bg-gray-800    mb-10">
              <UserInputCmp
                onInputChange={handleInputChange}
                inputValue={userInput}
              />
              <div>
                <div className="flex flex-row pt-6 pl-3">
                  <div className="-mt-0.5">
                    {" "}
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div
                        onClick={handleButtonClick}
                        className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-12"
                      ></div>
                    </label>
                  </div>
                  <h1 className="text-[1.1rem] pl-2 font-custom2 text-white cursor-default">
                    Your should mark verified for your changes
                  </h1>
                </div>
              </div>
              <div className="flex justify-between pl-3">
                {!ctBtn ? (
                  <button
                    className={`w-[100px] ${!ctBtn &&
                      "cursor-not-allowed"} bg-black h-[40px] my-4 flex text-xl font-custom2 items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 text-[#fff]`}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setSaveBtn(true)}
                    className={`w-[100px]  bg-black h-[40px] my-4 flex text-xl font-custom2 items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 text-[#fff]`}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
            <div className="pr-44 pt-12    top-0 right-0">
              <UserDisplayCmp
                imageData={imageData}
                FileData={{ ...userInput }}
              />
            </div>
          </div>
        )}
        {/* <div></div>
        <Footer /> */}
      </div>
    </>
  );
};

export default EditScreen;
