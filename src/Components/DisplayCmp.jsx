import PropImage from "../assets/6up-removebg-preview.png";
import PropImage1 from "../assets/6down-removebg-preview.png";
import PropImage2 from "../assets/11down-removebg-preview.png";
import PropImage3 from "../assets/11top-removebg-preview.png";
import PropImage4 from "../assets/9down-removebg-preview.png";
import PropImage5 from "../assets/9down-removebg-preview2.png";

import { useState, useEffect } from "react";

const DisplayCmp = ({ userInput, v }) => {
  const [op1, setOpt1] = useState(false);
  const [op2, setOpt2] = useState(false);
  const [op3, setOpt3] = useState(false);
  const [op4, setOpt4] = useState(false);
  const [op5, setOpt5] = useState(false);
  const [file, setFile] = useState("");
  const [hex, setHex] = useState("#047857");
  useEffect(() => {
    setHex(userInput.hex);
  }, [userInput.hex]);
  useEffect(() => {
    if (userInput.selectedOption === "op1") {
      setOpt1(true);
      setOpt2(false);
      setOpt3(false);
      setOpt4(false);
      setOpt5(false);
    } else if (userInput.selectedOption === "op2") {
      setOpt1(false);
      setOpt2(true);
      setOpt3(false);
      setOpt4(false);
      setOpt5(false);
    } else if (userInput.selectedOption === "op3") {
      setOpt1(false);
      setOpt2(false);
      setOpt3(true);
      setOpt4(false);
      setOpt5(false);
    } else if (userInput.selectedOption === "op4") {
      setOpt1(false);
      setOpt2(false);
      setOpt3(false);
      setOpt4(true);
      setOpt5(false);
    } else if (userInput.selectedOption === "op5") {
      setOpt1(false);
      setOpt2(false);
      setOpt3(false);
      setOpt4(false);
      setOpt5(true);
    } else if (userInput.files) {
      setFile(userInput.files.name);
    }

    console.log(
      "Input change:",
      userInput.selectedOption,
      hex,
      userInput.files
    );
  }, [userInput.selectedOption]);

  return (
    <>
      <div className="w-96  bg-gray-800   rounded-t-lg border-black border-4 border-b-0 overflow-auto no-scrollbar">
        <div className="bg-black rounded-b-lg ">
          <h1 className="text-white font-semibold text-center p-4 cursor-default">
            Live Preview
          </h1>
        </div>
        <div className="p-3 flex justify-between ">
          <input
            type="text"
            className="bg-black w-full pr-4 p-4 font-semibold rounded-lg"
            placeholder="https://aara/bscard/username"
            disabled
          />
          <div className="pl-2 pt-2 cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="w-96 h-[35rem] bg-gray-800 rounded-b-lg border-t-0 overflow-y-auto no-scrollbar  border-black border-4">
        <div className="bg-white h-full rounded overflow-y-auto  no-scrollbar">
          <div
            style={{ backgroundColor: hex }}
            className={` clip-triangle  w-full rounded-b ${op4 && ``} ${op1 &&
              `h-16 rounded-b-lg`} border-b-2    ${
              op3 ? ` bg-blue-950 ` : ""
            } ${op2 ? `h-12` : ""} overflow-y-auto  no-scrollbar`}
          >
            {/* <div className="flex justify-center pt-4">
              <img src={PropImage} className="w-4/5 " alt="" />
            </div> */}
          </div>
          {op2 && (
            <div className="-mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,256L480,160L960,96L1440,256L1440,0L960,0L480,0L0,0Z"
                ></path>
              </svg>
            </div>
          )}
          {op1 && (
            <div className="-mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,160L60,144C120,128,240,96,360,85.3C480,75,600,85,720,106.7C840,128,960,160,1080,149.3C1200,139,1320,85,1380,58.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
              </svg>
            </div>
          )}
          {op4 && (
            <div className="-mt-1 ">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,160L120,149.3C240,139,480,117,720,117.3C960,117,1200,139,1320,149.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg> */}
              <img src={PropImage3} alt="" />{" "}
            </div>
          )}
          {op3 && (
            <>
              <div className="-mt-1  bg-blue-950 h-fit overflow-hidden">
                {/* <img src={PropImage5} className="w-40 -pt-32" alt="" />{" "} */}
                <img src={PropImage4} className="pt-[25rem] " alt="" />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,32L48,74.7C96,117,192,203,288,213.3C384,224,480,160,576,154.7C672,149,768,203,864,192C960,181,1056,107,1152,64C1248,21,1344,11,1392,5.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
              </svg> */}
                {/* <div className="bg-blue-800 w-full h-1/2"></div> */}
              </div>
              {/* <div className="-mt-1 bg-blue-800 w-full h-1/2 rounded-b-full "></div> */}
            </>
          )}
          {op5 && (
            <div className="-mt-1 ">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg> */}
              <img src={PropImage} alt="" />{" "}
              {file && <img src={URL.createObjectURL(file)} alt="" />}
            </div>
          )}
          <div className=" fixed bottom-20 pl-4 no-scrollbar"></div>
          <div>
            {op5 && (
              <div className="mt-[12rem]">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg> */}
                <img src={PropImage1} alt="" />{" "}
              </div>
            )}
            {op4 && (
              <div className="mt-[12rem] flex justify-end">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill={hex}
                  fillOpacity="1"
                  d="M0,224L120,192C240,160,480,96,720,96C960,96,1200,160,1320,192L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                ></path>
              </svg> */}
                <img src={PropImage2} alt="" />{" "}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCmp;
