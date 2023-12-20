import Logo from "../assets/10logo-removebg-preview.png";
import LogoWhite from "../assets/logorewamped.png";
import SampleImage from "../assets/womenprofes.jpg";
import { useEffect, useState } from "react";
import SecondLogo from "../assets/11logo.png";
import ThirLogo from "../assets/logo3.png";
import LazyLoading from "../Components/LazyLoadingCmp";

const UserDisplayCmp = ({ imageData, FileData }) => {
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
  const [names, SetName] = useState(false);
  const [Titles, SetTitle] = useState(false);
  const [Social, SetSocial] = useState(false);
  const [Insta, SetInsta] = useState("");
  const [FaceBook, SetFaceBook] = useState("");
  const [X, SetX] = useState("");
  const [Youtube, SetYoutube] = useState("");
  const [LinkedIn, SetLinkedIn] = useState("");
  const [Social1, SetSocial1] = useState(false);
  const [Timer, SetTimer] = useState(false);
  useEffect(() => {
    setTimeout(() => SetTimer(true), 1000);
  }, []);
  useEffect(() => {
    // console.log(FileData.title);
    if (FileData.name && FileData.name.length > 0) {
      SetName(true);
    } else {
      SetName(false);
    }
    if (
      FileData.ContactState &&
      FileData.ContactState.length > 0 &&
      FileData.ContactState[0]
    ) {
      SetSocial1(true);
    }

    if (
      FileData.social &&
      FileData.social.length > 0 &&
      FileData.social[0] === "valid"
    ) {
      SetSocial(true);
    }

    if (FileData.title && FileData.title.length > 0) {
      SetTitle(true);
    } else {
      SetTitle(false);
    }
    if (FileData.FiledValue && FileData.FiledValue[0].length > 0) {
      SetInsta(FileData.FiledValue[0]);
    }
    if (FileData.FiledValue && FileData.FiledValue[1].length > 0) {
      SetFaceBook(FileData.FiledValue[1]);
    }
    if (FileData.FiledValue && FileData.FiledValue[2].length > 0) {
      SetX(FileData.FiledValue[2]);
    }
    if (FileData.FiledValue && FileData.FiledValue[3].length > 0) {
      SetYoutube(FileData.FiledValue[3]);
    }
    if (FileData.FiledValue && FileData.FiledValue[4].length > 0) {
      SetLinkedIn(FileData.FiledValue[4]);
    }

    // console.log(logos[0]);
    // console.log(FileData.Testing);
    // console.log(false && FileData.FiledValue[0]);
    console.log(FileData.ContactState);
  }, [FileData.Testing, FileData.ContactInfo]);

  return (
    <>
      <div className="w-96  bg-gray-800   rounded-t-lg border-black border-4 border-b-0 overflow-auto no-scrollbar">
        <div className="bg-black rounded-b-lg ">
          <h1 className="text-white font-semibold text-center p-4 cursor-default">
            Live Preview
          </h1>
        </div>
        <div className="p-3 flex justify-between ">
          <input
            type="text"
            className="bg-black w-full pr-4 p-4 font-semibold rounded-lg"
            placeholder={`https://aara/bscard/${
              names ? FileData.name : "UserName"
            }`}
            disabled
          />
          <div className="pl-2 pt-2 cursor-default">
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
          </div>
        </div>
      </div>

      <div
        className={`w-96   h-[37rem] bg-gray-800 rounded-b-lg border-t-0 overflow-y-auto no-scrollbar  border-black border-4`}
      >
        {!Timer && <LazyLoading />}

        {Timer && (
          <div
            style={{ backgroundColor: bg }}
            className=" h-full rounded overflow-y-auto  no-scrollbar"
          >
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
                    src={Logo}
                    className="w-28 h-20 -mt-20 ml-4   opacity-80"
                    alt=""
                  />
                )}
                {ids === 2 && (
                  <img
                    src={SecondLogo}
                    className="w-32 -mt-24 ml-60  opacity-75"
                    alt=""
                  />
                )}
                {ids === 3 && (
                  <img
                    src={ThirLogo}
                    className="w-20 h-20 -mt-44 ml-60   "
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

            <div
              className={`  ${ids === 2 &&
                "flex justify-start ml-2 mt-1 items-start"} ${
                ids === 3 ? "flex justify-start   items-start" : ""
              }  pl-4`}
            >
              <div className="mt-2 font-semibold  text-white ">
                <h1
                  className={`font-semibold font-custom text-2xl ${
                    ids === 3
                      ? "text-[#2c89db] uppercase text-start  -mt-16"
                      : ""
                  }  cursor-default ${
                    ids === 2
                      ? "text-[#243863] font-custom1 capitalize text-start text-3xl"
                      : "text-white capitalize text-center "
                  } `}
                >
                  {ids === 3 && (
                    <>
                      <span className="text-black">MR</span>
                    </>
                  )}{" "}
                  {names ? FileData.name : "Your Name"}
                </h1>
                <h1
                  className={` ${
                    ids === 3 ? "text-[#2c89db] uppercase text-start" : ""
                  } text-md  font-custom ${
                    ids === 2
                      ? "text-[#243863] text-start font-custom1 text-lg"
                      : "text-white text-center"
                  } cursor-default capitalize whitespace-pre-line`}
                >
                  {Titles ? FileData.title : "Your Title"}
                </h1>
              </div>
            </div>

            {ids === 3 ? (
              <>
                {!Social1 && (
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
                )}
                {Social1 && (
                  <>
                    <div
                      className={`flex flex-col  mt-4  gap-y-2 ${
                        ids === 2 ? " pl-10 pt-4" : "pl-20 pt-8"
                      } `}
                    >
                      {FileData.ContactState[0] && (
                        <div className="flex flex-row gap-x-2">
                          <img src={contactLogo[0]} className="w-8" alt="" />
                          <h1
                            className={`text-md ${
                              ids === 3 ? "text-[#2d8adc]" : "text-white"
                            } ${
                              ids === 2 ? "text-[#243863]" : "text-white"
                            } font-custom pt-1`}
                          >
                            {FileData.ContactInfo[1]
                              ? FileData.ContactInfo[1]
                              : "+xxxxxxxxx"}
                          </h1>
                        </div>
                      )}
                      {FileData.ContactState[1] && (
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[1]} className="w-8" alt="" />
                            <h1
                              className={`text-md ${
                                ids === 3 ? "text-[#2d8adc]" : "text-white"
                              } ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {FileData.ContactInfo[2]
                                ? FileData.ContactInfo[2]
                                : "www.aara.com"}
                            </h1>
                          </div>
                        </>
                      )}
                      {FileData.ContactState[2] && (
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[2]} className="w-8" alt="" />
                            <h1
                              className={`text-md ${
                                ids === 3 ? "text-[#2d8adc]" : "text-white"
                              } ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {FileData.ContactInfo[3]
                                ? FileData.ContactInfo[3]
                                : "aara@email.com"}
                            </h1>
                          </div>
                        </>
                      )}
                      {FileData.ContactState[3] && (
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[3]} className="w-8" alt="" />
                            <h1
                              className={`text-md ${
                                ids === 3 ? "text-[#2d8adc]" : "text-white"
                              } ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {FileData.ContactInfo[4]
                                ? FileData.ContactInfo[4]
                                : "onEarth"}
                            </h1>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
                {!Social && (
                  <>
                    <div className="flex flex-row gap-x-10 pl-4 pr-4 pt-2  opacity-80">
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
                )}
                {Social && (
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
                )}
              </>
            ) : (
              <>
                {!Social && (
                  <>
                    <div className="flex flex-row gap-x-10 pl-4 pr-4 pt-2  opacity-80">
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
                )}
                {Social && (
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
                )}
                {!Social1 && (
                  <>
                    <div
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
                    </div>
                  </>
                )}
                {Social1 && (
                  <>
                    <div
                      className={`flex flex-col gap-y-2 cursor-default ${
                        ids === 2 ? " pl-10 pt-4" : "pl-20 pt-8"
                      } `}
                    >
                      {FileData.ContactState[0] && (
                        <div className="flex flex-row gap-x-2">
                          <img src={contactLogo[0]} className="w-8" alt="" />
                          <h1
                            className={`text-md ${
                              ids === 2 ? "text-[#243863]" : "text-white"
                            } font-custom pt-1`}
                          >
                            {FileData.ContactInfo[1]
                              ? FileData.ContactInfo[1]
                              : "+xxxxxxxxx"}
                          </h1>
                        </div>
                      )}
                      {FileData.ContactState[1] && (
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[1]} className="w-8" alt="" />
                            <h1
                              className={`text-md ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {FileData.ContactInfo[2]
                                ? FileData.ContactInfo[2]
                                : "www.aara.com"}
                            </h1>
                          </div>
                        </>
                      )}
                      {FileData.ContactState[2] && (
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[2]} className="w-8" alt="" />
                            <h1
                              className={`text-md ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {FileData.ContactInfo[3]
                                ? FileData.ContactInfo[3]
                                : "aara@email.com"}
                            </h1>
                          </div>
                        </>
                      )}
                      {FileData.ContactState[3] && (
                        <>
                          <div className="flex flex-row gap-x-2">
                            <img src={contactLogo[3]} className="w-8" alt="" />
                            <h1
                              className={`text-md ${
                                ids === 2 ? "text-[#243863]" : "text-white"
                              } font-custom pt-1`}
                            >
                              {FileData.ContactInfo[4]
                                ? FileData.ContactInfo[4]
                                : "onEarth"}
                            </h1>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}
              </>
            )}

            {ids === 1 && (
              <>
                <div className={`pt-[5rem]`}>
                  {ids === 1 && <img src={top} alt="" />}
                </div>
              </>
            )}
            {ids === 2 && (
              <div className="-pt-[10rem] bottom-8 right-[11.5rem] fixed">
                <div className="-mt-8">
                  <img src={bottom} className="w-20" alt="" />
                </div>
              </div>
            )}
            {ids === 3 && (
              <div className="fixed bottom-[1.6rem] pl-1">
                <div className="-mt-2">
                  <img src={top} className="w-2/3" alt="" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserDisplayCmp;
