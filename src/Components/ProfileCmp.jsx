import Modal from "./Modal";
import { useState, useEffect } from "react";
import TabsRender from "./TabCmp";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import UserData from "../UserData";

const ProfileCmp = () => {
  const [EditMode, SetEditMode] = useState(false);
  const [Job, SetJob] = useState("");
  const [Location, SetLocation] = useState("");
  const [Description, SetDescription] = useState("");
  const [Name, Setname] = useState("");
  const [FaceBookUrl, SetFaceBookUrl] = useState("");
  const [XUrl, SetXUrl] = useState("");
  const [GithubUrl, SetGithubUrl] = useState("");
  const [YtUrl, SetYtUrl] = useState("");
  const [LkUrl, SetLkUrl] = useState("");
  const [InstaUrl, SetInstaUrl] = useState("");
  const [IsAdmin, SetIsAdmin] = useState(false);
  const [IsAdminArrow, SetIsAdminArrow] = useState(false);
  const DataForLS = {
    Name: Name,
    Job: Job,
    Location: Location,
    Description: Description,
    FaceBookUrl: FaceBookUrl,
    XUrl: XUrl,
    GithubUrl: GithubUrl,
    InstaUrl: InstaUrl,
    YtUrl: YtUrl,
    LkUrl: LkUrl,
  };

  const SubmitHandler = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(Job, Location, Description);
  };
  const tokenId = Cookies.get("user");
  const { details } = UserData[tokenId];

  useEffect(() => {
    if (details.isAdmin) {
      SetIsAdmin(true);
    }
    console.log(details);

    console.log(tokenId);
  }, []);
  const InputHandler = (i, val) => {
    if (i === "job") {
      SetJob(val);
    } else if (i === "loc") {
      SetLocation(val);
    } else if (i === "des") {
      SetDescription(val);
    } else if (i === "name") {
      Setname(val);
    } else if (i === "fb") {
      SetFaceBookUrl(val);
    } else if (i === "tw") {
      SetXUrl(val);
    } else if (i === "git") {
      SetGithubUrl(val);
    } else if (i === "insta") {
      SetInstaUrl(val);
    } else if (i === "yt") {
      SetYtUrl(val);
    } else if (i === "link") {
      SetLkUrl(val);
    }
  };
  return (
    <>
      <div className="flex justify-center mb-10 sm:pt-20 pt-20 sm:p-0 p-3">
        <div className="bg-white w-full  sm:w-1/2 h-fit rounded-xl ">
          <div className="flex ">
            <div>
              <div className="flex flex-row ">
                {!EditMode && (
                  <h1 className="pl-6 cursor-default font-custom2 capitalize font-semibold text-3xl p-4">
                    {Name ? Name : details.name}
                  </h1>
                )}
                <div className="mt-4 -ml-2">
                  {" "}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="yellow"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                  </svg> */}
                  {!IsAdmin && !EditMode && (
                    <img
                      width="40"
                      height="40"
                      src="https://img.icons8.com/color/48/sparkling.png"
                      alt="sparkling"
                    />
                  )}
                  {IsAdmin && !EditMode && (
                    <img
                      width="28"
                      height="30"
                      src="https://img.icons8.com/flat-round/64/000000/star--v1.png"
                      alt="star--v1"
                      className="mt-1"
                    />
                  )}
                </div>
              </div>
              {EditMode && (
                <>
                  <div className="pl-6 p-4 flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="green"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="green"
                      className="w-10 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <input
                      type="text"
                      onChange={(e) => InputHandler("name", e.target.value)}
                      placeholder="Enter You Name"
                      className="text-black font-custom2 ml-1 p-1  pl-2 rounded-lg focus:ring-0.5 border-[#16a34a] border-2 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    />
                  </div>
                </>
              )}
              <hr className="w-80 h-0.5 ml-6  bg-[#16a34a] border-0 rounded-3xl "></hr>
            </div>

            {!EditMode && (
              <div
                className="ml-[23.5rem] pt-6 cursor-pointer"
                title="Edit Details"
              >
                <svg
                  onClick={() => SetEditMode(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="green"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
            )}
            {EditMode && (
              <div className="ml-[22rem] pt-6">
                <h1
                  onClick={() => {
                    SetEditMode(false);
                    SubmitHandler();
                  }}
                  className="font-custom2  text-white text-lg px-2 py- cursor-pointer bg-[#16a34a] h-8 rounded-full"
                >
                  Save
                </h1>
              </div>
            )}
          </div>

          <div className="pl-2">
            <div className="flex flex-row p-4">
              <svg
                className="h-[1.4rem] fill-[#16a34a] text-green-700 pr-2 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              {!EditMode && (
                <h1 className="cursor-default font-custom2 f text-lg capitalize">
                  {Job ? Job : "What You Do?"}
                </h1>
              )}
              {EditMode && (
                <>
                  <input
                    type="text"
                    onChange={(e) => InputHandler("job", e.target.value)}
                    placeholder="Enter You Role 💼"
                    className="text-black font-custom2 ml-1 p-1 rounded-lg focus:ring-0.5 border-[#16a34a] border-2 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                  />
                </>
              )}
            </div>
            {/* This is Second sec */}
            <div className="flex flex-row pl-4">
              <svg
                className="h-[1.4rem] fill-[#16a34a] text-green-700 pr-2 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>

              {!EditMode && (
                <h1 className="cursor-default font-custom2 f text-lg capitalize">
                  {Location ? Location : "Location"}
                </h1>
              )}
              {EditMode && (
                <>
                  <input
                    type="text"
                    onChange={(e) => InputHandler("loc", e.target.value)}
                    placeholder="Enter Your Location 🌍"
                    className="text-black font-custom2 ml-1 p-1 rounded-lg focus:ring-0.5 border-[#16a34a] border-2 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                  />
                </>
              )}
            </div>
          </div>
          <div className="pt-4 pl-6">
            {!EditMode && (
              <h1 className="font-custom2 text-lg text-gray-500 cursor-default">
                {Description ??
                  "Totally optional short description about yourself, what you do and so on"}
              </h1>
            )}
            {EditMode && (
              <>
                <input
                  type="text"
                  onChange={(e) => InputHandler("des", e.target.value)}
                  placeholder="Your Short and Sweet Descriptions"
                  className="text-black font-custom2 ml-1 p-1 rounded-lg w-1/2 focus:ring-0.5 border-[#16a34a] border-2 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                />
              </>
            )}
          </div>

          <div className="pt-2 pb-2 pl-4 ">
            {/* {EditMode && (
              <h1 className="bg-[#16a34a] w-20 px-1 py-1  text-center text-white rounded-lg text-center font-semibold hover:-translate-y-1 ">
                Save
              </h1>
            )} */}
            <div>
              <h1 className=" cursor-default font-custom2 mt-2  text-xl ">
                Connect with me
              </h1>

              <hr className="w-52 h-0.5   bg-[#16a34a] border-0 rounded-full "></hr>
            </div>
          </div>

          <div className="pt-8 pb-2 lg:pb-0 w-4/5 gap-y-4 lg:w-full mx-auto mb-2 flex flex-wrap items-center sm:gap-x-10 gap-x-4 md:gap-x-10  sm:justify-start sm:pl-6 sm:pt-4">
            {EditMode && (
              <>
                <div className="flex flex-row">
                  <div className="bg-green-600  rounded-tl-xl rounded-bl-xl p-2">
                    <label htmlFor="inputfiled">
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-green-700"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Facebook</title>
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                      </svg>{" "}
                    </label>
                  </div>

                  <input
                    type="text"
                    id="inputfiled"
                    className="rounded-tr-2xl bg-white text-gray-900 border-green-500 border-2 font-custom2 rounded-br-2xl pl-3 w-1/2 focus:ring-0.5 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    placeholder="URL"
                    onChange={(e) => {
                      InputHandler("fb", e.target.value);
                    }}
                  />
                </div>
              </>
            )}

            {!EditMode && (
              <a href={`${FaceBookUrl ?? "#"}`} target="blank">
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
            )}
            {EditMode && (
              <>
                <div className="flex flex-row">
                  <div className="bg-green-600  rounded-tl-xl rounded-bl-xl p-2">
                    <label htmlFor="inputfiled">
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-green-700"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                      </svg>
                    </label>
                  </div>

                  <input
                    type="text"
                    id="inputfiled"
                    className="rounded-tr-2xl bg-white text-gray-900 border-green-500 border-2 font-custom2 rounded-br-2xl pl-3 w-1/2 focus:ring-0.5 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    placeholder="URL"
                    onChange={(e) => {
                      InputHandler("tw", e.target.value);
                    }}
                  />
                </div>
              </>
            )}
            {!EditMode && (
              <a href={`${XUrl ?? "#"}`} target="blank">
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
            )}
            {EditMode && (
              <>
                <div className="flex flex-row">
                  <div className="bg-green-600  rounded-tl-xl rounded-bl-xl p-2">
                    <label htmlFor="inputfiled">
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-green-700"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>GitHub</title>
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </label>
                  </div>

                  <input
                    type="text"
                    id="inputfiled"
                    className="rounded-tr-2xl bg-white text-gray-900 border-green-500 border-2 font-custom2 rounded-br-2xl pl-3 w-1/2 focus:ring-0.5 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    placeholder="URL"
                    onChange={(e) => {
                      InputHandler("git", e.target.value);
                    }}
                  />
                </div>
              </>
            )}

            {!EditMode && (
              <a href={`${GithubUrl ?? "#"}`} target="blank">
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            )}
            {/* <a href="#">
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Unsplash</title>
                <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
              </svg>
            </a> */}
            {/* <a href="#">
              <svg
                className="h-6 fill-current text-gray-600 hover:text-green-700"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Dribbble</title>
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
            </a> */}
            {EditMode && (
              <>
                <div className="flex flex-row">
                  <div className="bg-green-600  rounded-tl-xl rounded-bl-xl p-2">
                    <label htmlFor="inputfiled">
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-green-700"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </label>
                  </div>

                  <input
                    type="text"
                    id="inputfiled"
                    className="rounded-tr-2xl bg-white text-gray-900 border-green-500 border-2 font-custom2 rounded-br-2xl pl-3 w-1/2 focus:ring-0.5 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    placeholder="URL"
                    onChange={(e) => {
                      InputHandler("insta", e.target.value);
                    }}
                  />
                </div>
              </>
            )}
            {!EditMode && (
              <a href={`${InstaUrl ?? "#"}`} target="blank">
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700 "
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            )}
            {/*  */}
            {EditMode && (
              <>
                <div className="flex flex-row">
                  <div className="bg-green-600  rounded-tl-xl rounded-bl-xl p-2">
                    <label htmlFor="inputfiled">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 fill-current text-gray-600 hover:text-green-700"
                        role="img"
                        viewBox="0 0 50 50"
                      >
                        <title>LinkedIn</title>
                        <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                      </svg>
                    </label>
                  </div>

                  <input
                    type="text"
                    id="inputfiled"
                    className="rounded-tr-2xl bg-white text-gray-900 border-green-500 border-2 font-custom2 rounded-br-2xl pl-3 w-1/2 focus:ring-0.5 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    placeholder="Youtube URL"
                    onChange={(e) => {
                      InputHandler("link", e.target.value);
                    }}
                  />
                </div>
              </>
            )}
            {!EditMode && (
              <a href={`${YtUrl ?? "#"}`} target="blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 50 50"
                >
                  <title>LinkedIn</title>
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                </svg>
              </a>
            )}
            {EditMode && (
              <>
                <div className="flex flex-row">
                  <div className="bg-green-600  rounded-tl-xl rounded-bl-xl p-2">
                    <label htmlFor="inputfiled">
                      <svg
                        className="h-6 fill-current text-gray-600 hover:text-green-700"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>YouTube</title>
                        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                      </svg>
                    </label>
                  </div>

                  <input
                    type="text"
                    id="inputfiled"
                    className="rounded-tr-2xl bg-white text-gray-900 border-green-500 border-2 font-custom2 rounded-br-2xl pl-3 w-1/2 focus:ring-0.5 focus:outline-none focus:ring-green-400 dark:focus:ring-green-500"
                    placeholder="Youtube URL"
                    onChange={(e) => {
                      InputHandler("yt", e.target.value);
                    }}
                  />
                </div>
              </>
            )}
            {!EditMode && (
              <a href={`${YtUrl ?? "#"}`} target="blank">
                <svg
                  className="h-8 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube</title>
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            )}
            {/* <a href="#">
              <svg
                className="h-8 fill-current text-gray-600 hover:text-green-700"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>YouTube</title>
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
              </svg>
            </a> */}
          </div>
          {/* <div className=" pr-2 flex  gap-x-0.5 flex-row justify-end underline ">
            <h1
              className="text-[#16a34a] font-semibold underline cursor-pointer"
              title="Really want to Reset?"
            >
              Reset password
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="w-4 mt-1.5 h-4 underline cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div> */}

          {/* <div className="sm:mb-2 ">
            <Modal />
          </div> */}

          {!EditMode && (
            <div className="flex justify-between">
              <div className="pt-4 pl-2">
                <Link to="/mycards">
                  <div
                    className={` ${
                      IsAdmin ? "w-36" : "w-28"
                    } p-2 px-2 m-2 gap-x-0.5  hover:-translate-y-1 flex flex-row cursor-pointer bg-[#16a34a] rounded-full`}
                  >
                    <h1 className="font-custom2   text-white ">
                      {IsAdmin ? "Owned Cards" : "My Card"}
                    </h1>
                    <div className="mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="sm:mb-2 pt-10 ">
                <Modal />
              </div>
            </div>
          )}
          {IsAdmin && !EditMode && !IsAdminArrow && (
            <div className="flex justify-center pt-2 pb-2">
              <svg
                onClick={() => SetIsAdminArrow(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="green"
                className="w-8 h-8 cursor-pointer hover:translate-y-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            </div>
          )}
          {IsAdmin && !EditMode && IsAdminArrow && (
            <>
              {" "}
              <hr className=" h-0.5 mt-4 mx-6 bg-[#16a34a] border-0 rounded-3xl "></hr>
              <div className="p-4">
                <TabsRender />
              </div>
            </>
          )}
          {IsAdmin && !EditMode && IsAdminArrow && (
            <div className="flex justify-center  pb-4">
              <svg
                onClick={() => SetIsAdminArrow(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="green"
                className="w-8 h-8 cursor-pointer hover:-translate-y-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 18.75 7.5-7.5 7.5 7.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileCmp;
