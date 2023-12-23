import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import AnimationData from "../assets/SucessAnimation1ForLogin.json";
import UserData from "../UserData";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axois from "axios";
const LoginCmpForR = () => {
  const [Hide, Sethide] = useState(true);
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Verfiying, SetVerfiying] = useState(false);
  const Navigate = useNavigate();
  const Data = {
    Email: Email,
    Password: Password,
    IsLogedIn: true,
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    for (const userId in UserData) {
      if (Object.prototype.hasOwnProperty.call(UserData, userId)) {
        const user = UserData[userId];
        if (user.email === Data.Email) {
          SetVerfiying(true);
          Cookies.set("user", Data);
          setTimeout(() => Navigate("/"), 1000);

          break; // Exit the loop once a match is found
        }
      }
    }
  };
  // fetch("https://business-app-d64r.onrender.com/swagger-ui.html").then(
  //   (res) => {
  //     console.log(res);
  //   }
  // );
  useEffect(() => {
    Axois.get(
      "https://business-app-d64r.onrender.com:443/api/v0/template/getAll"
    )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const InputHandler = (i, val) => {
    if (i === "email") {
      SetEmail(val);
    } else if (i === "password") {
      SetPassword(val);
    }
  };
  return (
    <>
      {Verfiying && (
        <div className="min-h-screen bg-gray-100  text-gray-900 flex justify-center  overflow-auto no-scrollbar">
          <div className="max-w-screen-xl m-0 sm:m-10  bg-white shadow sm:rounded-lg flex justify-center flex-1 no-scrollbar">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <Lottie
                animationData={AnimationData}
                className="pt-20"
                loop={true}
              />
            </div>
          </div>
        </div>
      )}

      {!Verfiying && (
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
                <h1 className="text-2xl xl:text-3xl font-extrabold">Sign In</h1>
                <div className="w-full flex-1 mt-8">
                  <div className="flex flex-col items-center">
                    <button className="w-full max-w-xs font-bold shadow-sm rounded-full py-1 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                      <div className="bg-white rounded-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="40"
                          height="40"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#fbc02d"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#e53935"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4caf50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1565c0"
                            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                      </div>
                      <span className="ml-4">Sign In with Google</span>
                    </button>
                  </div>

                  <div className="my-12 border-b text-center">
                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                      Or sign In with e-mail
                    </div>
                  </div>

                  <div className="mx-auto max-w-xs">
                    <form onSubmit={SubmitHandler}>
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type=""
                        placeholder="Email"
                        onChange={(e) => InputHandler("email", e.target.value)}
                      />
                      <div className="flex flex-row items-center bg-gray-100 border rounded-lg border-gray-200 text-sm focus:outline-none mt-5 relative">
                        <input
                          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                          type={Hide ? "password" : "text"}
                          placeholder="Password"
                          onChange={(e) =>
                            InputHandler("password", e.target.value)
                          }
                        />
                        <div
                          onClick={() => Sethide(!Hide)}
                          className="absolute right-0 top-0 mr-4 mt-4 bg-white cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            {Hide ? (
                              <>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </>
                            ) : (
                              <>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </>
                            )}
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-gray-500 font-semibold text-center mt-2 cursor-default">
                          or
                          <Link to="/forgetpassword">
                            <span className="text-[#16a34a] font-bold underline cursor-pointer">
                              {" "}
                              Forgot Password
                            </span>
                          </Link>{" "}
                        </h1>
                      </div>

                      <button
                        type="submit"
                        className="mt-10 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                      >
                        <span className="ml-3">Sign In</span>
                      </button>
                      {/* <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by{" "}
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>{" "}
                    and its
                    <a
                      href="#"
                      className="border-b pl-1 border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p> */}
                    </form>
                  </div>
                </div>
              </div>
              <div>
                <h1 className=" text-gray-500 font-semibold text-center mt-2 cursor-default">
                  Don&apos;t have an account?{" "}
                  <Link to="/register">
                    <span className="text-[#16a34a] font-bold underline cursor-pointer">
                      {" "}
                      Sign up
                    </span>
                  </Link>{" "}
                </h1>
              </div>
            </div>
            {/* <div className="flex-1 bg-indigo-100 rounded-3xl text-center hidden lg:flex"> */}
            {/* <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('../assets/LOGINBG.jpg')",
              }}
            >
              <img src={Iage} className="rounded-2xl" alt="" />
            </div> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginCmpForR;
