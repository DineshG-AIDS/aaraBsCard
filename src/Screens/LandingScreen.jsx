import { Link } from "react-router-dom";
import LoaderCmp from "../Components/LoaderCmp";
import { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import Footer from "../Components/Footer";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";

const LandingScreen = () => {
  const [Timer, SetTimer] = useState(false);
  const [Verifying, SetVerifying] = useState(false);
  // const [Logout, SetLogout] = useState(false);
  // const Navigate = useNavigate();
  // const Logouthandler = () => {
  //   if (Cookies.get("user")) {
  //     Cookies.remove("user");
  //     Navigate("/login");
  //   }
  // };
  useEffect(() => {
    setTimeout(() => SetTimer(true), 1000);
    if (Cookies.get("user")) {
      SetVerifying(true);
    }
  }, []);
  // console.log(Logout);
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black overflow-y-hidden no-scrollbar">
        {!Timer && <LoaderCmp />}
        {Timer && (
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className=" text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12"
          >
            <NavBar />
            {/* <div className="flex justify-between">
              <h1 className="text-3xl  text-green-600 text-center font-extrabold">
                AARA
              </h1>
              {Verifying ? (
                <>
                  <div
                    onClick={Logouthandler}
                    className=" bg-[#16a34a] rounded-2xl  ml-4 mb-4 p-1 text-sm  text-white font-bold  hover:-translate-y-1 "
                  >
                    <h1 className=" cursor-pointer text-xl font-bold px-6 py-1 text-white ">
                      Logout
                    </h1>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <div className="bg-[#16a34a] rounded-2xl  ml-4 mb-4 p-1 text-sm  text-white font-bold  hover:-translate-y-1 ">
                    <h1 className=" cursor-pointer text-xl font-bold px-6 py-1 text-white ">
                      Login
                    </h1>
                  </div>
                </Link>
              )}
            </div> */}

            <div className="h-32 md:h-26"></div>

            <p className="font-sans cursor-default text-4xl font-bold text-gray-200 max-w-5xl lg:text-7xl lg:pr-24 md:text-6xl">
              Spend less <span className="text-[#16a34a]">On</span> Creating
              your Business card
            </p>
            <div className="h-6"></div>
            <p className="max-w-2xl font-serif text-xl text-gray-400 md:text-2xl"></p>
            <div className="pt-4">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#16a34a] via-[#16a34a] to-[#16a34a] rounded-full blur-full group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                {Verifying ? (
                  <Link to="/alltemp">
                    {" "}
                    <div
                      onClick={() => {}}
                      title="view templates"
                      className="relative inline-flex items-center justify-center p-2 px-6 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Browse Templates
                    </div>
                  </Link>
                ) : (
                  <Link to="/register">
                    {" "}
                    <div
                      onClick={() => {}}
                      title="Register"
                      className="relative inline-flex items-center justify-center p-2 px-6 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Get Started
                    </div>
                  </Link>
                )}
              </div>
            </div>

            <div className="h-32 md:h-40"></div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-green-600">
                  Simple and easy
                </p>
                <h2 className="text-4xl font-bold">Made for Everyone</h2>
                <div className="h-6"></div>
                <p className="font-serif text-xl text-gray-400 md:pr-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam autem, a recusandae vero praesentium qui impedit
                  doloremque molestias necessitatibus.
                </p>
                <div className="h-8"></div>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
                  <div>
                    <p className="font-semibold text-gray-400">
                      Made with love
                    </p>
                    <div className="h-4"></div>
                    <p className="font-serif text-gray-400">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus labor.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-400">
                      Its easy to build
                    </p>
                    <div className="h-4"></div>
                    <p className="font-serif text-gray-400">
                      Ipsum dolor sit, amet consectetur adipisicing elit.
                      Delectus amet consectetur.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div>
              <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-96"></div>
            </div> */}
            </div>

            {/* <div className="h-32 md:h-40"></div> */}

            {/* <p className="font-serif text-4xl">
            <span className="text-gray-400">If we work all together</span>

            <span className="text-gray-600">
              consectetur adipisicing elit. Consectetur atque molestiae omnis
              excepturi enim!
            </span>
          </p> */}

            {/* <div className="h-32 md:h-40"></div> */}

            {/* <div className="grid gap-4 md:grid-cols-3"> */}
            {/* <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-br from-gray-900 to-black">
              <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
                1
              </p>
              <div className="h-6"></div>
              <p className="font-serif text-3xl">
                We build products with UX in mind
              </p>
            </div> */}
            {/* <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-b from-gray-900 to-black">
              <p className="flex items-center justify-center text-4xl font-semibold text-indigo-400 bg-indigo-800 rounded-full shadow-lg w-14 h-14">
                2
              </p>
              <div className="h-6"></div>
              <p className="font-serif text-3xl">
                You can trust us to deliver super fast
              </p>
            </div> */}
            {/* <div className="flex-col p-8 py-16 rounded-lg shadow-2xl md:p-12 bg-gradient-to-bl from-gray-900 to-black">
              <p className="flex items-center justify-center text-4xl font-semibold text-teal-400 bg-teal-800 rounded-full shadow-lg w-14 h-14">
                3
              </p>
              <div className="h-6"></div>
              <p className="font-serif text-3xl">
                We made it simple and easy to do
              </p>
            </div> */}
            {/* </div> */}

            {/* <div className="h-40"></div> */}

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col justify-center md:col-span-2">
                {/* <p className="self-start inline font-sans text-xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-teal-400 to-teal-600">
                We are humans
              </p>
              <h2 className="text-4xl font-bold">We could work together</h2>
              <div className="h-6"></div>
              <p className="font-serif text-xl text-gray-400 md:pr-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                autem, a recusandae vero praesentium qui impedit doloremque
                molestias.
              </p> */}
                {/* <div className="h-8"></div> */}
                <div className="grid gap-6 pt-8 border-t border-gray-800 lg:grid-cols-3">
                  {/* <div>
                  <p className="font-semibold text-gray-400">Made with love</p>
                  <div className="h-4"></div>
                  <p className="font-serif text-gray-400">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus labor.
                  </p>
                </div> */}
                  {/* <div>
                  <p className="font-semibold text-gray-400">
                    Its easy to build
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div> */}
                  {/* <div>
                  <p className="font-semibold text-gray-400">
                    Its easy to build
                  </p>
                  <div className="h-4"></div>
                  <p className="font-serif text-gray-400">
                    Ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                    amet consectetur.
                  </p>
                </div> */}
                </div>
              </div>
              <div>
                <div className="-mr-24 rounded-lg md:rounded-l-full bg-gradient-to-br from-gray-900 to-black h-72"></div>
              </div>
            </div>

            {/* <div className="h-10 md:h-40"></div> */}

            <div className="grid gap-4 md:grid-cols-4">
              {/* <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Social networks</li>
              <li>
                <a
                  href="https://twitter.com/victormustar"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
            </ul> */}
              {/* <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Locations</li>
              <li>
                <a href="#" className="hover:underline">
                  Paris
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New York
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  London
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Singapore
                </a>
              </li>
            </ul> */}
              {/* <ul className="space-y-1 text-gray-400">
              <li className="pb-4 font-serif text-gray-400">Company</li>
              <li>
                <a href="#" className="hover:underline">
                  The team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Join us
                </a>
              </li>
            </ul> */}
            </div>
            <div className="h-12"></div>
            <Footer />
          </m.div>
        )}
      </div>
    </>
  );
};

export default LandingScreen;
