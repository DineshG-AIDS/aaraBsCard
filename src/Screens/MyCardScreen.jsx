import SingleCardCmp from "../Components/SingleCardCmp";
import UserData from "../UserData";
import Cookies from "js-cookie";
// import { useEffect } from "react";

const MyCardScreen = () => {
  const tokenId = Cookies.get("user");
  const { count } = UserData[tokenId];
  console.log(count);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black overflow-x-hidden no-scrollbar h-screen">
        {count > 0 && (
          <>
            {[...Array(count)].map((_, index) => (
              <SingleCardCmp key={index} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default MyCardScreen;
