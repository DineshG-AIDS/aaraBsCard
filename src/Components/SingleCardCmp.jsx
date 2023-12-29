// import data from "../Data";
import SampleImage from "../assets/womenprofes.jpg";
import UserData from "../UserData";
import Cookies from "js-cookie";
import { useEffect } from "react";
const SingleCardCmp = ({
  top,
  bg,
  bottom,
  logos,
  contactLogo,
  sampleLogo,
  ids,
  phone,
  web,
  mail,
  location,
  names,
  titles,
}) => {
  let TokenId = Cookies.get("user");
  const { designDetails } = UserData[TokenId];
  // const { contactDetails } = designDetails;
  // const { top, bg, bottom, logos, contactLogo, sampleLogo, ids } = data[1];
  console.log(names);

  useEffect(() => {
    // console.log(TokenId);
    // console.log(ids1);
  }, []);
  return (
    <>
      {/* <h1 className="text-white">my cards</h1> */}
      {/* <div className="w-96     rounded-t-lg border-black border-4 border-b-0 overflow-auto no-scrollbar"> */}
      {/* <div className="bg-black rounded-b-lg ">
          <h1 className="text-white font-semibold text-center p-4 cursor-default">
            Live Preview
          </h1>
        </div> */}
      {/* <div className="p-3 flex justify-between "> */}
      {/* <input
            type="text"
            className="bg-black w-full pr-4 p-4 font-semibold rounded-lg"
            placeholder={`https://aara/bscard/${
              names ? FileData.name : "UserName"
            }`}
            disabled
          /> */}
      {/* <div className="pl-2 pt-2 cursor-default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div> */}
      {/* </div> */}
      {/* </div> */}

      <div
        className={`w-[22rem]   h-[37rem] bg-gray-800 rounded-b-lg rounded-t-lg border-t-0 overflow-y-auto no-scrollbar  border-black border-4`}
      >
        {
          <div
            style={{ backgroundColor: bg }}
            className=" h-full rounded overflow-y-auto  no-scrollbar"
          >
            {/* <img src={bottom} className="" alt="" /> */}
            {ids === 1 && (
              <div className="-mt-2">
                <img src={bottom} alt="" />
              </div>
            )}
            {ids === 2 && (
              <div className="w-20">
                <img src={top} alt="" />
              </div>
            )}
            {ids === 3 && (
              <div className="-mt-2">
                <img src={bottom} alt="" />
              </div>
            )}
            {/* this ios seprations */}
            <div>
              <div className="flex justify-center">
                {ids === 1 && (
                  <img
                    src={sampleLogo}
                    className="w-28 h-20 -mt-20 ml-4   opacity-80"
                    alt=""
                  />
                )}
                {ids === 2 && (
                  <img
                    src={sampleLogo}
                    className="w-32 -mt-24 ml-60  opacity-75"
                    alt=""
                  />
                )}
                {ids === 3 && (
                  <img
                    src={sampleLogo}
                    className="w-20 h-20 -mt-40 ml-60   "
                    alt=""
                  />
                )}
              </div>
            </div>

            {/* This section for User Profile Area */}
            {ids === 3 ? (
              ""
            ) : (
              <>
                <div
                  className={`flex items-center ${
                    ids === 2 ? "justify-start " : "justify-center"
                  }  pl-4`}
                >
                  <div
                    className={` ${ids === 2 && "-mt-16 "} ${ids === 2 &&
                      "w-40 h-40"}   w-32 h-32 overflow-hidden rounded-full ${
                      ids === 2 ? "border-[#253964]" : "border-white"
                    } border-4    `}
                  >
                    <img
                      src={SampleImage}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </>
            )}

            {/* This section for User Title  Area */}
            {/* ${
                    ids === 3
                      ? "text-black uppercase text-start  -mt-16"
                      : "text-white "
                  }  cursor-default ${
                    ids === 2
                      ? "text-[#243863] font-custom1 capitalize text-start text-3xl"
                      : "text-black capitalize text-center "
                  }  */}
            {/* ${ids === 3 &&
                    "text-[#2c89db] uppercase text-start"} text-md  font-custom ${
                    ids === 2
                      ? "text-[#243863] text-start font-custom1 text-lg"
                      : "text-white text-center"
                  } */}
            <div
              className={`  ${ids === 2 &&
                "flex justify-start ml-2 mt-1 items-start"} ${
                ids === 3 ? "flex justify-start   items-start" : ""
              }  pl-4`}
            >
              <div className="mt-2 font-semibold  ">
                <h1
                  className={`font-semibold font-custom text-2xl ${ids == 1 &&
                    "text-white text-center"}  ${ids == 3 && "-mt-16"} ${ids ==
                    2 && "text-[#243863] text-start font-custom1"}
                  `}
                >
                  {ids === 3 && (
                    <>
                      <span className="text-black">Mr</span>
                    </>
                  )}{" "}
                  {names ?? "Your Name"}
                </h1>
                <h1
                  className={` ${ids == 1 && "text-white text-center"} ${ids ==
                    3 && "text-[#2c89db] uppercase text-center"}  ${ids == 2 &&
                    "text-[#243863] text-start font-custom1"} cursor-default uppercase whitespace-pre-line`}
                >
                  {titles ?? "Your Title"}
                </h1>
              </div>
            </div>

            {ids === 3 ? (
              <>
                {/* {!Social1 && (
                  <>
                    <div
                      className={`flex flex-col mb-2 mt-4 gap-y-2 ${
                        ids === 2 ? "pl-10 pt-4" : "pl-20 pt-4"
                      }  opacity-70`}
                    >
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[0]} className="w-8" alt="" />
                        <h1
                          className={`text-md  ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } ${
                            ids === 3 ? "text-[#2d8adc]" : "text-white"
                          } font-custom pt-1`}
                        >
                          +8300403272
                        </h1>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[1]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } ${
                            ids === 3 ? "text-[#2d8adc]" : "text-white"
                          } font-custom pt-1`}
                        >
                          www.aara.com
                        </h1>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[2]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } ${
                            ids === 3 ? "text-[#2d8adc]" : "text-white"
                          } font-custom pt-1`}
                        >
                          aara@email.com
                        </h1>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[3]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } ${
                            ids === 3 ? "text-[#2d8adc]" : "text-white"
                          } font-custom pt-1`}
                        >
                          Coimbatore
                        </h1>
                      </div>
                    </div>
                  </>
                )} */}
                {
                  <>
                    {/* <h1>phonwe</h1> */}
                    <div
                      className={`flex flex-col  mt-4  gap-y-2 ${
                        ids === 2 ? " pl-10 pt-4" : "pl-20 pt-8"
                      } `}
                    >
                      {
                        <>
                          {/* <h1>hello</h1> */}
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[0]} className="w-8" alt="" />
                            <h1 className={`text-md text-black font-custom`}>
                              {phone ?? "+xxxxxxxxx"}
                            </h1>
                          </div>
                        </>
                      }
                      {
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[1]} className="w-8" alt="" />
                            <h1
                              className={`text-md text-black font-custom pt-1`}
                            >
                              {web ?? "www.aara.in"}
                            </h1>
                          </div>
                        </>
                      }
                      {
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[2]} className="w-8" alt="" />
                            <h1
                              className={`text-md text-black font-custom pt-1`}
                            >
                              {mail ?? "aara@email.com"}
                            </h1>
                          </div>
                        </>
                      }
                      {
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[3]} className="w-8" alt="" />
                            <h1
                              className={`text-md text-black font-custom pt-1`}
                            >
                              {location ?? "onEarth"}
                            </h1>
                          </div>
                        </>
                      }
                    </div>
                  </>
                }
                {/* !Social && */}
                {
                  <>
                    <div className="flex flex-row gap-x-10 pl-4 pr-4 pt-4  opacity-80">
                      <div>
                        <img src={logos[0]} className="w-10" alt="" />
                      </div>
                      <div>
                        <img src={logos[1]} className="w-10" alt="" />
                      </div>
                      <div>
                        <img src={logos[2]} className="w-10" alt="" />
                      </div>
                      <div className="">
                        <div>
                          <img src={logos[3]} className="w-12 " alt="" />
                        </div>
                      </div>
                      <div>
                        <img src={logos[4]} className="w-10" alt="" />
                      </div>
                    </div>
                  </>
                }
                {/* {Social && (
                  <>
                    <div className="flex flex-row gap-x-10 pl-4 pr-4 pt-4 ">
                      {FileData.Testing[0] && (
                        <div>
                          <a
                            target="_blank"
                            href={`https://www.instagram.com/${Insta}`}
                          >
                            <img
                              src={logos[0]}
                              className="w-10 cursor-pointer"
                              alt=""
                              rel="noreferrer"
                            />
                          </a>
                        </div>
                      )}
                      {FileData.Testing[1] && (
                        <div>
                          <a
                            target="_blank"
                            href={`https://${FaceBook}`}
                            rel="noreferrer"
                          >
                            <img
                              src={logos[2]}
                              className="w-10 cursor-pointer"
                              alt=""
                            />
                          </a>
                        </div>
                      )}
                      {FileData.Testing[2] && (
                        <div>
                          <a
                            target="_blank"
                            href={`https://${X}`}
                            rel="noreferrer"
                          >
                            <img
                              src={logos[1]}
                              className="w-10 cursor-pointer"
                              alt=""
                            />
                          </a>
                        </div>
                      )}
                      {FileData.Testing[3] && (
                        <div>
                          <a target="_blank" href={`https://${Youtube}`}>
                            <img
                              src={logos[3]}
                              className="w-10 cursor-pointer"
                              alt=""
                            />
                          </a>
                        </div>
                      )}
                      {FileData.Testing[4] && (
                        <div>
                          <a
                            target="_blank"
                            href={`https://${LinkedIn}`}
                            rel="noreferrer"
                          >
                            <img
                              src={logos[4]}
                              className="w-10 cursor-pointer"
                              alt=""
                            />
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                )} */}
              </>
            ) : (
              <>
                {/* !Social && */}
                {
                  <>
                    {/* <div className="flex flex-row gap-x-10 pl-4 pr-4 pt-2  opacity-80">
                      <div>
                        <img src={logos[0]} className="w-10" alt="" />
                      </div>
                      <div>
                        <img src={logos[1]} className="w-10" alt="" />
                      </div>
                      <div>
                        <img src={logos[2]} className="w-10" alt="" />
                      </div>
                      <div className="">
                        <div>
                          <img src={logos[3]} className="w-12 " alt="" />
                        </div>
                      </div>
                      <div>
                        <img src={logos[4]} className="w-10" alt="" />
                      </div>
                    </div> */}
                  </>
                }
                {/* Social &&  */}
                {
                  <>
                    <div className="flex flex-row gap-x-10 pl-4 pr-4 pt-4 ">
                      {
                        <div>
                          <img
                            src={logos && logos[0]}
                            className="w-10 cursor-pointer"
                            alt=""
                            rel="noreferrer"
                          />
                        </div>
                      }
                      {
                        <div>
                          <img
                            src={logos && logos[2]}
                            className="w-10 cursor-pointer"
                            alt=""
                          />
                        </div>
                      }
                      {
                        <div>
                          <img
                            src={logos && logos[1]}
                            className="w-10 cursor-pointer"
                            alt=""
                          />
                        </div>
                      }
                      {
                        <div>
                          <img
                            src={logos && logos[3]}
                            className="w-10 cursor-pointer"
                            alt=""
                          />
                        </div>
                      }
                      {
                        <div>
                          <img
                            src={logos && logos[4]}
                            className="w-10 cursor-pointer"
                            alt=""
                          />
                        </div>
                      }
                    </div>
                  </>
                }
                {/* !Social1 && */}
                {
                  <>
                    {/* <div
                      className={`flex flex-col gap-y-2 cursor-default ${
                        ids === 2 ? "pl-10 pt-4" : "pl-20 pt-4"
                      }  opacity-70`}
                    >
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[0]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } font-custom pt-1`}
                        >
                          +8300403272
                        </h1>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[1]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } font-custom pt-1`}
                        >
                          www.aara.com
                        </h1>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[2]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } font-custom pt-1`}
                        >
                          aara@email.com
                        </h1>
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <img src={contactLogo[3]} className="w-8" alt="" />
                        <h1
                          className={`text-md ${
                            ids === 2 ? "text-[#243863]" : "text-white"
                          } font-custom pt-1`}
                        >
                          Coimbatore
                        </h1>
                      </div>
                    </div> */}
                  </>
                }
                {/* Social1 && */}
                {
                  <>
                    <div
                      className={`flex flex-col gap-y-2 cursor-default ${
                        ids === 2 ? " pl-10 pt-4" : "pl-20 pt-8"
                      } `}
                    >
                      {
                        <div className="flex flex-row gap-x-2">
                          <img
                            src={contactLogo && contactLogo[0]}
                            className="w-8"
                            alt=""
                          />
                          <h1
                            className={`text-md ${
                              ids === 2 ? "text-[#243863]" : "text-white"
                            } font-custom pt-1`}
                          >
                            {phone ?? "+xxxxxxxxx"}
                          </h1>
                        </div>
                      }
                      {
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img
                              src={contactLogo && contactLogo[1]}
                              className="w-8"
                              alt=""
                            />
                            <h1
                              className={`text-md ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {web ?? "www.aara.com"}
                            </h1>
                          </div>
                        </>
                      }
                      {
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img
                              src={contactLogo && contactLogo[2]}
                              className="w-8"
                              alt=""
                            />
                            <h1
                              className={`text-md ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {mail ?? "aara@email.com"}
                            </h1>
                          </div>
                        </>
                      }
                      {
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img
                              src={contactLogo && contactLogo[3]}
                              className="w-8"
                              alt=""
                            />
                            <h1
                              className={`text-md ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {location ?? "onEarth"}
                            </h1>
                          </div>
                        </>
                      }
                    </div>
                  </>
                }
              </>
            )}

            {ids === 1 && (
              <>
                <div className={`-mt-[2rem]`}>
                  {ids === 1 && <img src={top} alt="" />}
                </div>
              </>
            )}
            {ids === 2 && (
              <div className="-pt-[1rem] pl-[18.5rem] ">
                <div className="mt-5">
                  <img src={bottom} className="w-20" alt="" />
                </div>
              </div>
            )}
            {ids === 3 && (
              <div className=" bottom-[1.6rem] pl-">
                <div className="mt-2">
                  <img src={top} className="w-[23.5rem]" alt="" />
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
};

export default SingleCardCmp;
