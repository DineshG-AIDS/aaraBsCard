import DisplayCmp from "../Components/DisplayCmp";
import InputComp from "../Components/InputComp";
import { useState } from "react";

const HomeSCreen = () => {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (value) => {
    setUserInput(value);
  };
  // console.log(userInput);
  return (
    <>
      <div className="bg-gray-800 h-screen overflow-y-auto no-scrollbar ">
        <div className="flex  pt-20 pb-10 justify-between">
          <div className="pl-44 bg-gray-800   ">
            <InputComp
              onInputChange={handleInputChange}
              inputValue={userInput}
            />
          </div>
          <div className="pr-44 pt-10   fixed top-0 right-0">
            <DisplayCmp userInput={userInput} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSCreen;
{
  /* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#16a34a"
                fill-opacity="1"
                d="M0,32L48,80C96,128,192,224,288,234.7C384,245,480,171,576,117.3C672,64,768,32,864,58.7C960,85,1056,171,1152,197.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg> */
}
