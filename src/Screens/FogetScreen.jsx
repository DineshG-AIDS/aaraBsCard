import { useEffect, useState } from "react";
import LoaderCmp from "../Components/LoaderCmp";
import ForgetpasCmp from "../Components/ForgetPassCmp";

const Forgetpassword = () => {
  const [Timer, SetTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => SetTimer(true), 1000);
  }, []);
  return (
    <>
      <div className="overflow-auto no-scrollbar">
        {Timer ? <ForgetpasCmp /> : <LoaderCmp />}
      </div>
    </>
  );
};

export default Forgetpassword;
