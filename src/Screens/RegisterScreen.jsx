import LoginCmp from "../Components/LoginCmp";
import { useEffect, useState } from "react";
import LoaderCmp from "../Components/LoaderCmp";

const LoginScreen = () => {
  const [Timer, SetTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => SetTimer(true), 1000);
  }, []);
  return (
    <>
      <div className="overflow-auto no-scrollbar">
        {Timer ? <LoginCmp /> : <LoaderCmp />}
      </div>
    </>
  );
};

export default LoginScreen;
