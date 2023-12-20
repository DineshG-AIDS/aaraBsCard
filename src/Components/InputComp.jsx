import { useState } from "react";
import { Sketch } from "@uiw/react-color";

const InputComp = ({ onInputChange }) => {
  const [op1, setOpt1] = useState(false);
  const [op2, setOpt2] = useState(false);
  const [op3, setOpt3] = useState(false);
  const [op4, setOpt4] = useState(false);
  const [op5, setOpt5] = useState(false);
  const [files, setFile] = useState("");
  const [hex, setHex] = useState("#047857");
  const [colorSelected, setColorSelected] = useState(false);
  const [InoutFiled, SetInoutField] = useState(true);

  // let v = "hello";
  const handleChange = (optionNumber, file) => {
    let selectedOption, selectedOptionValue;
    if (optionNumber === 1) {
      selectedOption = "op1";
      selectedOptionValue = !op1;
      setOpt1(selectedOptionValue);
    } else if (optionNumber === 2) {
      selectedOption = "op2";
      selectedOptionValue = !op2;
      setOpt2(selectedOptionValue);
    } else if (optionNumber === 3) {
      selectedOption = "op3";
      selectedOptionValue = !op3;
      setOpt3(selectedOptionValue);
    } else if (optionNumber === 4) {
      selectedOption = "op4";
      selectedOptionValue = !op4;
      setOpt4(selectedOptionValue);
    } else if (optionNumber === 6) {
      console.log("file", file);
      setFile(file);
    } else if (optionNumber === 5) {
      selectedOption = "op5";
      selectedOptionValue = !op5;
      setOpt5(selectedOptionValue);
    }
    console.log(files);

    onInputChange({ selectedOption, files, hex });
    // if (file) {
    //   // Handle the file change separately if needed
    //   console.log("Selected file:", file);
    // }
  };

  // const handleFileChange = (file) => {
  //   // e.preventDefault();
  //   console.log("Selected file:", file);
  //   onInputChange(file);
  // };

  return (
    <div>
      <div className="">
        <div>
          {!colorSelected && (
            <>
              <h1 className="font-bold mb-6 pl-2 text-lg text-white">
                Select the BackGround color
              </h1>
              <div className="mb-4">
                <Sketch
                  style={{ marginLeft: 20 }}
                  color={hex}
                  onChange={(color) => {
                    setHex(color.hex);
                  }}
                />
              </div>
            </>
          )}
          {!colorSelected ? (
            <>
              <button
                onClick={() => {
                  setColorSelected(true);
                  handleChange(0);
                }}
                className={`px-4 py-2 ml-4 mb-4 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
                  op1 ? "bg-green-500" : "hover:shadow-lg"
                }`}
              >
                Set color
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setColorSelected(false);
                handleChange(0);
              }}
              className={`px-4 py-2 mb-4 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
                op1 ? "bg-green-500" : "hover:shadow-lg"
              }`}
            >
              New color 🎨
            </button>
          )}
        </div>
        <h1 className="font-bold mb-6 pl-2 text-lg text-white">
          Select the Layout
        </h1>
        <div className="flex gap-x-8">
          <button
            onClick={() => handleChange(1)}
            className={`px-4 py-2 bg-gradient-to-r text-xl from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
              op1 ? "bg-green-500" : "hover:shadow-lg"
            }`}
          >
            1
          </button>
          <button
            onClick={() => handleChange(2)}
            className={`px-4 py-2 bg-gradient-to-r text-xl from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
              op2 ? "bg-green-500" : "hover:shadow-lg"
            }`}
          >
            2
          </button>
          <button
            onClick={() => handleChange(3)}
            className={`px-4 py-2 bg-gradient-to-r text-xl from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
              op3 ? "bg-green-500" : "hover:shadow-lg"
            }`}
          >
            3
          </button>
          <button
            onClick={() => handleChange(4)}
            className={`px-4 py-2 bg-gradient-to-r text-xl from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
              op3 ? "bg-green-500" : "hover:shadow-lg"
            }`}
          >
            4
          </button>
          <button
            onClick={() => handleChange(5)}
            className={`px-4 py-2 bg-gradient-to-r text-xl from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 ${
              op3 ? "bg-green-500" : "hover:shadow-lg"
            }`}
          >
            5
          </button>
        </div>
        <div>
          <h1 className="font-bold mt-10 pl-2 text-lg text-white">
            Add your custom logo
          </h1>

          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="group cursor-pointer relative inline-block  w-28 text-center">
              <div className="rounded-md pt-2 pl-8 w-36">
                <label
                  htmlFor="upload"
                  className="flex flex-col  cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 fill-white stroke-indigo-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </label>
                <input
                  id="upload"
                  onChange={(e) => handleChange(6, e.target.files[0])}
                  type="file"
                  className="hidden"
                />
              </div>
              <div className="opacity-0 w-32 bg-gradient-to-r  from-blue-500 to-purple-500 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
                Use transprent BG
                <svg
                  className="absolute text-purple-600 h-2 w-full left-0 top-full"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                  xmlSpace="preserve"
                >
                  <polygon
                    className="fill-current"
                    points="0,0 127.5,127.5 255,0"
                  />
                </svg>
              </div>
            </div>
          </div>

          {InoutFiled && (
            <div>
              <h1 className="font-bold mt-4 pl-2 text-lg text-white">
                Add the title sections
              </h1>
              <div className="pl-8 pt-4 " onClick={() => SetInoutField(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-16 w-16 fill-white stroke-indigo-500 cursor-pointer "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputComp;
