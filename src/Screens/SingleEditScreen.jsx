import data from "../Data";
import { useParams } from "react-router-dom";
import UserDisplayCmp from "../Components/UserDisplayCmp";
import UserInputCmp from "../Components/UserInputCmp";
import { useState, useEffect } from "react";

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
  } = imageData;

  const handleInputChange = (value) => {
    setUserInput(value);
  };
  useEffect(() => {
    // console.log(userInput);
  }, [userInput]);
  return (
    <>
      <div className="bg-gray-800 h-screen overflow-y-auto no-scrollbar ">
        <div className="flex  pt-20 pb-10 justify-between">
          <div className="pl-44 bg-gray-800   ">
            <UserInputCmp
              onInputChange={handleInputChange}
              inputValue={userInput}
            />
          </div>
          <div className="pr-44 pt-10   fixed top-0 right-0">
            <UserDisplayCmp imageData={imageData} FileData={{ ...userInput }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEditScreen;
