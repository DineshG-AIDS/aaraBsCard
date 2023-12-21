import { Link } from "react-router-dom";
import Iage from "../assets/FrogetBG.jpg";

const ForgetPassCmp = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center  overflow-auto no-scrollbar">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1 no-scrollbar">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              {/* <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
                alt="Logo"
              /> */}
              <h1 className="text-xl text-green-600 text-center font-extrabold">
                AARA
              </h1>
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">
                Forget Password
              </h1>
              <div className="w-full flex-1 mt-8">
              

                <div className="mx-auto max-w-xs pt-10">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />

                  <button className="mt-10 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Reset Password</span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h1 className=" text-gray-500 font-semibold text-center mt-2 cursor-default">
                Or{" "}
                <Link to="/login">
                  <span className="text-[#16a34a] font-bold underline cursor-pointer">
                    {" "}
                    Login
                  </span>
                </Link>{" "}
              </h1>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 rounded-3xl text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('../assets/LOGINBG.jpg')",
              }}
            >
              <img src={Iage} className="rounded-2xl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassCmp;
