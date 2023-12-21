import { useLocation } from "react-router";
import { useState, useEffect } from "react";

const LoaderCmp = () => {
  const [Pos, SetPos] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      SetPos(true);
    } else {
      SetPos(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="relative inline-flex">
          <div
            className={`w-8 h-8 ${
              Pos ? "bg-[#16a34a]" : "bg-blue-500"
            } rounded-full`}
          ></div>
          <div
            className={`w-8 h-8 ${
              Pos ? "bg-[#16a34a]" : "bg-blue-500"
            } rounded-full absolute top-0 left-0 animate-ping`}
          ></div>
          <div
            className={`w-8 h-8 ${
              Pos ? "bg-[#16a34a]" : "bg-blue-500"
            } rounded-full absolute top-0 left-0 animate-pulse`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LoaderCmp;
