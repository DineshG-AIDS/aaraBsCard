import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import UserData from "../UserData";
import Cookies from "js-cookie";
import Lottie from "lottie-react";
import AnimationData from "../assets/poer.json";

const UserInputCmp = ({ onInputChange }) => {
  const Locations = useLocation();
  const { id } = useParams();
  const [LocaForEditScreen, SetLocaForEditScreen] = useState(false);

  const UserId = Cookies.get("user");

  const { Username, Usertitle, phone, mail, web, locations, links } = UserData[
    UserId
  ].designDetails.ids[id - 1];
  // console.log(locations);

  const [file, SetFile] = useState("");
  const [file1, SetFile1] = useState("");
  const [name, SetName] = useState("");
  const [tilte, SetTitle] = useState("");
  const [InoutFiled, SetInoutField] = useState(true);
  const [Insta, SetInsta] = useState(false);
  const [FaceBook, SetFaceBook] = useState(false);
  const [X, SetX] = useState(false);
  const [Youtube, SetYoutube] = useState(false);
  const [LinkedIn, SetLinkedIn] = useState(false);
  const [CDisplayCmp, SetCDisplayCmp] = useState("invalid");
  const [CDisplayCmp1, SetCDisplayCmp1] = useState("invalid");
  const [Testing, SetTesting] = useState(false);
  const [Testing1, SetTesting1] = useState(false);
  const [Testing2, SetTesting2] = useState(false);
  const [Testing3, SetTesting3] = useState(false);
  const [Testing4, SetTesting4] = useState(false);

  const [InstaInput, SetInstaInput] = useState("");
  const [FaceBookInput, SetFaceBookInput] = useState("");
  const [XInput, SetXInput] = useState("");
  const [YoutubeInput, SetYoutubeInput] = useState("");
  const [LinkedInInput, SetLinkedInInput] = useState("");

  const [InoutFiled1, SetInoutField1] = useState(true);
  const [Phone, SetPhone] = useState(false);
  const [Web, SetWeb] = useState(false);
  const [Email, SetEmail] = useState(false);
  const [Location, SetLocation] = useState(false);

  const [PhoneValue, SetPhoneValue] = useState("");
  const [WebValue, SetWebValue] = useState("");
  const [EmailValue, SetEmailValue] = useState("");
  const [LoactionValue, SetLocationValue] = useState("");
  const [ctBtn, setCtBtn] = useState(false);
  const [SaveBtn, setSaveBtn] = useState(false);
  const handleButtonClick = () => {
    // Toggle the state between true and false
    setCtBtn((prevCtBtn) => !prevCtBtn);
  };
  console.log(InstaInput);
  const Data = {
    Logo: file,
    Profile: file1,
    name: name,
    title: tilte,
    social: [CDisplayCmp, FaceBook, X, Youtube, LinkedIn],
    Testing: [Testing, Testing1, Testing2, Testing3, Testing4],
    FiledValue: [
      InstaInput,
      FaceBookInput,
      XInput,
      YoutubeInput,
      LinkedInInput,
    ],
    ContactState: [Phone, Web, Email, Location],
    ContactInfo: [
      CDisplayCmp1,
      PhoneValue,
      WebValue,
      EmailValue,
      LoactionValue,
    ],
  };
  const Loca = String(Locations.pathname).substring(0, 6);
  // console.log(Loca);

  const DataHandler = () => {
    onInputChange(Data);
  };
  useEffect(() => {
    if (Loca === "/edit/") {
      SetLocaForEditScreen(true);
      // SetInoutField(false);
    }
  }, [Locations.pathname, id]);
  useEffect(() => {
    DataHandler();
  }, [
    Testing,
    Testing1,
    Testing2,
    Testing3,
    Testing4,
    InstaInput,
    FaceBookInput,
    XInput,
    YoutubeInput,
    LinkedInInput,
    InoutFiled1,
    name,
    tilte,
    PhoneValue,
    EmailValue,
    WebValue,
    LoactionValue,
    Phone,
    Email,
    Web,
    Location,
  ]);
  const firstWord = file.name?.substring(0, 5);
  const InputHandler = (i, v) => {
    if (i === "file") {
      SetFile(v);
    } else if (i === "file1") {
      const reader = new FileReader();
      reader.onloadend = () => {
        SetFile1(reader.result);
      };
      reader.readAsDataURL(v);
    } else if (i === "name") {
      SetName(v);
    } else if (i === "title") {
      SetTitle(v);
    } else if (i === "link") {
      SetLinkedInInput(v);
    } else if (i === "facebook") {
      SetFaceBookInput(v);
    } else if (i === "insta") {
      SetInstaInput(v);
    } else if (i === "yt") {
      SetYoutubeInput(v);
    } else if (i === "x") {
      SetXInput(v);
    } else if (i === "phone") {
      SetPhoneValue(v);
    } else if (i === "web") {
      SetWebValue(v);
    } else if (i == "email") {
      SetEmailValue(v);
    } else if (i === "loc") {
      SetLocationValue(v);
    }
    onInputChange(Data);
  };
  const hideSelectText = Insta && FaceBook && X && Youtube && LinkedIn;
  const hideSelectTextForContactInfo = Phone && Email && Web && Location;
  useEffect(() => {
    if (LocaForEditScreen) {
      SetPhoneValue(phone);
      SetWebValue(web);
      SetEmailValue(mail);
      SetLocationValue(locations);
    }
  }, [PhoneValue, phone]);
  useEffect(() => {
    if (LocaForEditScreen) {
      SetName(Username);
    }

    if (LocaForEditScreen) {
      SetTitle(Usertitle);
      SetLinkedInInput(links.linkedin);
      SetInstaInput(links.insta);
      SetFaceBookInput(links.facebook);
      SetXInput(links.X);
      SetYoutubeInput(links.youtube);
      SetLinkedInInput(links.linkedin);
      SetPhoneValue(phone);
    }
    console.log("LocaForEditScreen:", LocaForEditScreen);
    console.log("PhoneValue in useEffect:", PhoneValue);
    if (LocaForEditScreen) {
      SetInoutField(false);
      SetInoutField1(false);
      SetCDisplayCmp("valid");
      SetInsta(true);
      SetFaceBook(true);
      SetX(true);
      SetYoutube(true);
      SetLinkedIn(true);
      SetPhone(true);
      SetWeb(true);
      SetEmail(true);
      SetLocation(true);
    }
  }, [LocaForEditScreen, Username, Usertitle, PhoneValue]);

  return (
    <>
      {SaveBtn && (
        <>
          <Lottie animationData={AnimationData} />
        </>
      )}
      {!SaveBtn && (
        <div>
          <div>
            <h1 className="font-extrabold  pl-2 text-xl text-white">
              {LocaForEditScreen ? "Edit Your Pictures" : "Add Your Pictures"}
            </h1>
          </div>
          <div
            className="border-white border-2 rounded-xl p- mt-4 mb-8
      "
          >
            <div className="flex flex-row gap-x-32  mb-8 justify-center">
              <div>
                <h1 className="font-bold mt-4 pl-2 text-lg text-white">
                  Add Company Logo
                </h1>
                <div className="pl-8 pt-4 ">
                  <label
                    htmlFor="upload"
                    className="flex flex-col  cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-16 w-16 fill-white stroke-indigo-500 cursor-pointer "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </label>

                  <input
                    id="upload"
                    type="file"
                    onChange={(e) => InputHandler("file", e.target.files[0])}
                    className="hidden"
                  />
                  {/* File Name */}
                  <h1 className="text-white pl-2 lowercase font-semibold ">
                    {firstWord}
                  </h1>
                </div>
                <div className="fill-white stroke-indigo-500 "></div>
              </div>

              <div>
                <h1 className="font-bold mt-4 pl-2 text-lg text-white">
                  Add your Image
                </h1>
                <div className="pl-8 pt-4 ">
                  <label
                    htmlFor="upload"
                    className="flex flex-col  cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-16 w-16 fill-white stroke-indigo-500 cursor-pointer "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </label>
                  <input
                    id="upload"
                    type="file"
                    onChange={(e) => InputHandler("file1", e.target.files[0])}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Inuot Sectrion */}
          <div>
            <h1 className="font-extrabold  pl-2 text-xl text-white">
              {LocaForEditScreen ? "Edit Your Details" : "Add Your Details"}
            </h1>
          </div>
          <div className="border-white border-2  rounded-xl pl-10 pr-4 p-1 mt-4 mb-8">
            <div className="flex flex-row gap-x">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-white mb-2 text-lg font-semibold pl-2"
                >
                  Name{" "}
                </label>
                <div className="flex items-center border-white border-2 rounded-xl p-1 ml-2 w-3/4">
                  <input
                    type="text"
                    id="name"
                    className="text-lg pt-1 pb-1 pl-2 font-semibold w-full rounded-xl outline-none bg-gray-950 text-white"
                    placeholder={LocaForEditScreen ? Username : "Your Name"}
                    onChange={(e) => {
                      InputHandler("name", e.target.value);
                      DataHandler();
                    }}
                    maxLength={10}
                    value={name}
                  />
                </div>
                {/* <h1 className="pl-4 text-white font-semibold p-2 text-md capitalize">
              Max Character : <span className=" font-bold "> 12</span>{" "}
            </h1> */}
              </div>

              {/* sECON iNPUT fiel called tilte */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-white mb-2 text-lg font-semibold pl-2"
                >
                  Title{" "}
                </label>
                <div className="flex items-center border-white border-2 rounded-xl p-1 ml-10 w-4/5">
                  <input
                    type="text"
                    id="name"
                    className="text-lg pt-1 pb-1 pl-2 font-semibold w-full rounded-xl outline-none bg-gray-950 text-white"
                    placeholder={LocaForEditScreen ? "New Title" : "Your Title"}
                    onChange={(e) => InputHandler("title", e.target.value)}
                    value={tilte}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center pr-20 pt-10">
              {/* <button
            onClick={() => {
              DataHandler();
            }}
            className={`px-4 py-2 ml-4 mb-4 bg-gradient-to-r text-sm bg-indigo-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
          >
            Save my Details
          </button> */}
            </div>
          </div>
          <div>
            <h1 className="font-extrabold mt-4 mb-4 pl-2 text-xl text-white">
              {LocaForEditScreen
                ? "Edit Your SocialMedia"
                : " Add Your SocialMedia"}
            </h1>
          </div>
          <div>
            <div
              className={`border-white border-2 rounded-xl ${InoutFiled &&
                `flex justify-center`} `}
            >
              {InoutFiled && (
                <div className="">
                  <div>
                    <h1 className="font-bold mt-4 pl-2 text-lg text-white">
                      Connect with you
                    </h1>
                    <div
                      className="pl-12 mb-2 pt-4 "
                      onClick={() => {
                        SetInoutField(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => {
                          SetCDisplayCmp("valid");
                        }}
                        className="h-16 w-16 fill-white stroke-indigo-500 cursor-pointer "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              {Insta && (
                <>
                  <div className="pl-8 pt-8 mb-2">
                    <div className="flex flex-row">
                      <div className="bg-white rounded-tl-xl rounded-bl-xl">
                        <label htmlFor="inputfiled">
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KPHBhdGggZmlsbD0iIzRlNWZkOCIgZD0iTTgyLDMxdjM4YzAsMi4wMS0wLjQ2LDMuOTItMS4yNyw1LjYyYy0xLjEyLDIuMzMtMi45Miw0LjI5LTUuMTUsNS41OEM3My42NSw4MS4zNSw3MS40LDgyLDY5LDgySDMxIGMtMS40NywwLTIuODktMC4yNS00LjIxLTAuN2gtMC4wMWMtMi40My0wLjgzLTQuNTItMi4zNS02LjA1LTQuMzRDMTkuMDIsNzQuNzYsMTgsNzIsMTgsNjlWMzFjMC0wLjU5LDAuMDQtMS4xNywwLjEyLTEuNzQgYzAuMS0wLjc3LDAuMjctMS41MiwwLjUxLTIuMjRDMjAuMywyMS43OSwyNS4yMSwxOCwzMSwxOGgzOGMwLjQzLDAsMC44NSwwLjAyLDEuMjYsMC4wNmgwLjAzYzAuNzcsMC4wOCwxLjUxLDAuMjIsMi4yMywwLjQzIGM0LjcsMS4zMiw4LjMzLDUuMjEsOS4yNCwxMC4wN2MwLjA5LDAuNDUsMC4xNSwwLjkxLDAuMTksMS4zOEM4MS45OSwzMC4yOSw4MiwzMC42NCw4MiwzMXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNzU1MGNjIiBkPSJNODEuNzYsMjguNTZjLTAuOTEtNC44Ni00LjU0LTguNzUtOS4yNC0xMC4wN2MtMC43NC0wLjE2LTEuNDgtMC4zLTIuMjMtMC40M2gtMC4wMyBjLTAuMTMtMC4wMjMtMC4yNjItMC4wMzgtMC4zOTEtMC4wNkg0Ni4xYy0xMC4yNCwxLjcyLTE5LjczLDUuNjQtMjcuOTgsMTEuMjZDMTguMDQsMjkuODMsMTgsMzAuNDEsMTgsMzF2MzggYzAsMywxLjAyLDUuNzYsMi43Myw3Ljk2YzEuNTMsMS45OSwzLjYyLDMuNTEsNi4wNSw0LjM0aDAuMDFDMjguMTEsODEuNzUsMjkuNTMsODIsMzEsODJoMzhjMi40LDAsNC42NS0wLjY1LDYuNTgtMS44IGMyLjIzLTEuMjksNC4wMy0zLjI1LDUuMTUtNS41OEM4MS41NCw3Mi45Miw4Miw3MS4wMSw4Miw2OVYzMWMwLTAuMzYtMC4wMS0wLjcxLTAuMDUtMS4wNkM4MS45MSwyOS40Nyw4MS44NSwyOS4wMSw4MS43NiwyOC41NnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjOWMzMmM4IiBkPSJNODIsMzF2MzhjMCwyLjAxLTAuNDYsMy45Mi0xLjI3LDUuNjJjLTEuMTIsMi4zMy0yLjkyLDQuMjktNS4xNSw1LjU4QzczLjY1LDgxLjM1LDcxLjQsODIsNjksODJIMzEgYy0xLjQ3LDAtMi44OS0wLjI1LTQuMjEtMC43aC0wLjAxYy0yLjQzLTAuODMtNC41Mi0yLjM1LTYuMDUtNC4zNEMxOS4wMiw3NC43NiwxOCw3MiwxOCw2OVYzOC4wM0MyOC45NSwyOS4yNSw0Mi44NiwyNCw1OCwyNCBjOC40LDAsMTYuNDIsMS42MiwyMy43Niw0LjU2YzAuMDksMC40NSwwLjE1LDAuOTEsMC4xOSwxLjM4QzgxLjk5LDMwLjI5LDgyLDMwLjY0LDgyLDMxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNkNTE1YTMiIGQ9Ik04MiwzNi4yOVY2OWMwLDIuMDEtMC40NiwzLjkyLTEuMjcsNS42MmMtMS4xMiwyLjMzLTIuOTIsNC4yOS01LjE1LDUuNThDNzMuNjUsODEuMzUsNzEuNCw4Miw2OSw4MiBIMzFjLTEuNDcsMC0yLjg5LTAuMjUtNC4yMS0wLjdoLTAuMDFjLTIuNDMtMC44My00LjUyLTIuMzUtNi4wNS00LjM0QzE5LjAyLDc0Ljc2LDE4LDcyLDE4LDY5VjQ3LjQxQzI4LjI4LDM3LjI2LDQyLjQxLDMxLDU4LDMxIEM2Ni41NywzMSw3NC43MSwzMi44OSw4MiwzNi4yOXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZWMwMDdhIiBkPSJNODIsNDQuMTRWNjljMCwyLjAxLTAuNDYsMy45Mi0xLjI3LDUuNjJjLTEuMTIsMi4zMy0yLjkyLDQuMjktNS4xNSw1LjU4QzczLjY1LDgxLjM1LDcxLjQsODIsNjksODIgSDMxYy0xLjQ3LDAtMi44OS0wLjI1LTQuMjEtMC43aC0wLjAxYy0yLjQzLTAuODMtNC41Mi0yLjM1LTYuMDUtNC4zNEMxOS4wMiw3NC43NiwxOCw3MiwxOCw2OVY1OC4wMUMyNy4xMiw0NS44Niw0MS42NCwzOCw1OCwzOCBDNjYuNjksMzgsNzQuODcsNDAuMjIsODIsNDQuMTR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmNDkyZSIgZD0iTTgyLDY2LjA3VjY5YzAsMy0xLjAyLDUuNzYtMi43Myw3Ljk2Yy0xLjUzLDEuOTktMy42MiwzLjUxLTYuMDUsNC4zNGgtMC4wMSBDNzEuODksODEuNzUsNzAuNDcsODIsNjksODJIMzFjLTIuNCwwLTQuNjUtMC42NS02LjU4LTEuOGMtMi4yMy0xLjI5LTQuMDMtMy4yNS01LjE1LTUuNThDMTguNDYsNzIuOTIsMTgsNzEuMDEsMTgsNjlWNTQuNTQgQzI1LjM4LDQ4LjU3LDM0Ljc3LDQ1LDQ1LDQ1QzYwLjc0LDQ1LDc0LjUsNTMuNDUsODIsNjYuMDd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmN2EwMiIgZD0iTTc5LjI3LDc2Ljk2Yy0xLjUzLDEuOTktMy42MiwzLjUxLTYuMDUsNC4zNGgtMC4wMUM3MS44OSw4MS43NSw3MC40Nyw4Miw2OSw4MkgzMSBjLTIuNCwwLTQuNjUtMC42NS02LjU4LTEuOGMtMi4yMy0xLjI5LTQuMDMtMy4yNS01LjE1LTUuNThDMTguNDYsNzIuOTIsMTgsNzEuMDEsMTgsNjl2LTQuODFDMjQuNiw1Ni43MiwzNC4yNSw1Miw0NSw1MiBDNjEuMDMsNTIsNzQuNjEsNjIuNDgsNzkuMjcsNzYuOTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmYTgyMyIgZD0iTTczLjIxLDgxLjNDNzEuODksODEuNzUsNzAuNDcsODIsNjksODJIMzFjLTIuNCwwLTQuNjUtMC42NS02LjU4LTEuOCBjLTIuMjMtMS4yOS00LjAzLTMuMjUtNS4xNS01LjU4QzI0LjEsNjUuMzQsMzMuODEsNTksNDUsNTlDNTguNzEsNTksNzAuMiw2OC41MSw3My4yMSw4MS4zeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmNhNTgiIGQ9Ik02Ni4xNyw4MkgzMWMtMi40LDAtNC42NS0wLjY1LTYuNTgtMS44QzI3LjU3LDcxLjksMzUuNiw2Niw0NSw2NkM1NS4wNyw2Niw2My41Niw3Mi43Nyw2Ni4xNyw4MnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZkYjczIiBkPSJNNTguNzUsODJoLTI3LjVjMi4zMi01LjMsNy42LTksMTMuNzUtOVM1Ni40Myw3Ni43LDU4Ljc1LDgyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02MCwyNi41SDQwYy03LjQ0NCwwLTEzLjUsNi4wNTYtMTMuNSwxMy41djIwYzAsNy40NDQsNi4wNTYsMTMuNSwxMy41LDEzLjVoMjAgYzcuNDQ0LDAsMTMuNS02LjA1NiwxMy41LTEzLjVWNDBDNzMuNSwzMi41NTYsNjcuNDQ0LDI2LjUsNjAsMjYuNXogTTY5LjUsNjBjMCw1LjIzOC00LjI2Miw5LjUtOS41LDkuNUg0MCBjLTUuMjM4LDAtOS41LTQuMjYyLTkuNS05LjVWNDBjMC01LjIzOCw0LjI2Mi05LjUsOS41LTkuNWgyMGM1LjIzOCwwLDkuNSw0LjI2Miw5LjUsOS41VjYweiBNNTAsNjEuNSBjLTYuMzQxLDAtMTEuNS01LjE1OS0xMS41LTExLjVTNDMuNjU5LDM4LjUsNTAsMzguNVM2MS41LDQzLjY1OSw2MS41LDUwUzU2LjM0MSw2MS41LDUwLDYxLjV6IE01MCw0Mi41IGMtNC4xMzYsMC03LjUsMy4zNjUtNy41LDcuNXMzLjM2NCw3LjUsNy41LDcuNXM3LjUtMy4zNjUsNy41LTcuNVM1NC4xMzYsNDIuNSw1MCw0Mi41eiBNNjUuNSwzNy41YzAsMS42NTctMS4zNDMsMy0zLDMgcy0zLTEuMzQzLTMtM3MxLjM0My0zLDMtM1M2NS41LDM1Ljg0Myw2NS41LDM3LjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTYwLDc0SDQwYy03LjcyLDAtMTQtNi4yOC0xNC0xNFY0MGMwLTcuNzIsNi4yOC0xNCwxNC0xNGgyMGM3LjcyLDAsMTQsNi4yOCwxNCwxNHYyMAlDNzQsNjcuNzIsNjcuNzIsNzQsNjAsNzR6IE00MCwyN2MtNy4xNjgsMC0xMyw1LjgzMi0xMywxM3YyMGMwLDcuMTY4LDUuODMyLDEzLDEzLDEzaDIwYzcuMTY4LDAsMTMtNS44MzIsMTMtMTNWNDAJYzAtNy4xNjgtNS44MzItMTMtMTMtMTNINDB6IE02MCw3MEg0MGMtNS41MTQsMC0xMC00LjQ4Ni0xMC0xMFY0MGMwLTUuNTE0LDQuNDg2LTEwLDEwLTEwaDIwYzUuNTE0LDAsMTAsNC40ODYsMTAsMTB2MjAJQzcwLDY1LjUxNCw2NS41MTQsNzAsNjAsNzB6IE00MCwzMWMtNC45NjMsMC05LDQuMDM3LTksOXYyMGMwLDQuOTYzLDQuMDM3LDksOSw5aDIwYzQuOTYzLDAsOS00LjAzNyw5LTlWNDBjMC00Ljk2My00LjAzNy05LTktOUg0MAl6IE01MCw2MmMtNi42MTcsMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiwxMi0xMnMxMiw1LjM4MywxMiwxMlM1Ni42MTcsNjIsNTAsNjJ6IE01MCwzOWMtNi4wNjUsMC0xMSw0LjkzNS0xMSwxMXM0LjkzNSwxMSwxMSwxMQlzMTEtNC45MzUsMTEtMTFTNTYuMDY1LDM5LDUwLDM5eiBNNTAsNThjLTQuNDExLDAtOC0zLjU4OS04LThzMy41ODktOCw4LThzOCwzLjU4OSw4LDhTNTQuNDExLDU4LDUwLDU4eiBNNTAsNDMJYy0zLjg1OSwwLTcsMy4xNDEtNyw3czMuMTQxLDcsNyw3czctMy4xNDEsNy03UzUzLjg1OSw0Myw1MCw0M3ogTTYyLjUsNDFjLTEuOTMsMC0zLjUtMS41Ny0zLjUtMy41czEuNTctMy41LDMuNS0zLjUJczMuNSwxLjU3LDMuNSwzLjVTNjQuNDMsNDEsNjIuNSw0MXogTTYyLjUsMzVjLTEuMzc5LDAtMi41LDEuMTIxLTIuNSwyLjVzMS4xMjEsMi41LDIuNSwyLjVzMi41LTEuMTIxLDIuNS0yLjVTNjMuODc5LDM1LDYyLjUsMzV6IE02OSw4M0gzMWMtNy43MiwwLTE0LTYuMjgtMTQtMTRWMzFjMC03LjcyLDYuMjgtMTQsMTQtMTRoMzhjNy43MiwwLDE0LDYuMjgsMTQsMTR2MzhDODMsNzYuNzIsNzYuNzIsODMsNjksODN6IE0zMSwxOQljLTYuNjE3LDAtMTIsNS4zODMtMTIsMTJ2MzhjMCw2LjYxNyw1LjM4MywxMiwxMiwxMmgzOGM2LjYxNywwLDEyLTUuMzgzLDEyLTEyVjMxYzAtNi42MTctNS4zODMtMTItMTItMTJIMzF6Ij48L3BhdGg+Cjwvc3ZnPg=="
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        id="inputfiled"
                        className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl pl-4 w-1/2 p-2"
                        placeholder={
                          LocaForEditScreen
                            ? "New Link please"
                            : "https://www.instagram.com/aara"
                        }
                        onChange={(e) => {
                          InputHandler("insta", e.target.value);
                        }}
                        value={InstaInput}
                      />
                      <div
                        className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                        onClick={() => {
                          SetInsta(false);
                          SetTesting(false);
                          DataHandler();
                        }}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}{" "}
              {FaceBook && (
                <>
                  <div className="pl-8 pt-8 mb-2">
                    <div className="flex flex-row">
                      <div className="bg-indigo-600 rounded-tl-xl rounded-bl-xl">
                        <label htmlFor="inputfiled">
                          {/* <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iTGQ2c3FydGN4TXlja0VsNnhlRGRNYV91TFdWNUE5dlhJUHVfZ3IxIiB4MT0iOS45OTMiIHgyPSI0MC42MTUiIHkxPSI5Ljk5MyIgeTI9IjQwLjYxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhYTRmNCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwN2FkOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNMZDZzcXJ0Y3hNeWNrRWw2eGVEZE1hX3VMV1Y1QTl2WElQdV9ncjEpIiBkPSJNMjQsNEMxMi45NTQsNCw0LDEyLjk1NCw0LDI0czguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwUzM1LjA0Niw0LDI0LDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2LjcwNywyOS4zMDFoNS4xNzZsMC44MTMtNS4yNThoLTUuOTg5di0yLjg3NGMwLTIuMTg0LDAuNzE0LTQuMTIxLDIuNzU3LTQuMTIxaDMuMjgzVjEyLjQ2IGMtMC41NzctMC4wNzgtMS43OTctMC4yNDgtNC4xMDItMC4yNDhjLTQuODE0LDAtNy42MzYsMi41NDItNy42MzYsOC4zMzR2My40OThIMTYuMDZ2NS4yNThoNC45NDh2MTQuNDUyIEMyMS45ODgsNDMuOSwyMi45ODEsNDQsMjQsNDRjMC45MjEsMCwxLjgyLTAuMDg0LDIuNzA3LTAuMjA0VjI5LjMwMXoiPjwvcGF0aD4KPC9zdmc+"
                      /> */}
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDYuMDE2IDQuNDMyLDEwLjk4NCAxMC4yMDYsMTEuODUydi04LjY3MmgtMi45Njl2LTMuMTU0aDIuOTY5di0yLjA5OWMwLC0zLjQ3NSAxLjY5MywtNSA0LjU4MSwtNWMxLjM4MywwIDIuMTE1LDAuMTAzIDIuNDYxLDAuMTQ5djIuNzUzaC0xLjk3Yy0xLjIyNiwwIC0xLjY1NCwxLjE2MyAtMS42NTQsMi40NzN2MS43MjRoMy41OTNsLTAuNDg3LDMuMTU0aC0zLjEwNnY4LjY5N2M1Ljg1NywtMC43OTQgMTAuMzc2LC01LjgwMiAxMC4zNzYsLTExLjg3N2MwLC02LjYyNyAtNS4zNzMsLTEyIC0xMiwtMTJ6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        id="inputfiled"
                        className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl w-1/2 pl-4 p-2"
                        placeholder={
                          LocaForEditScreen
                            ? "New Link please"
                            : "https://www.facebook.com/aara"
                        }
                        onChange={(e) => {
                          InputHandler("facebook", e.target.value);
                        }}
                        value={FaceBookInput}
                      />
                      <div
                        className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                        onClick={() => {
                          SetFaceBook(false);
                          SetTesting1(false);
                          DataHandler();
                        }}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}{" "}
              {X && (
                <>
                  <div className="pl-8 pt-8 mb-2">
                    <div className="flex flex-row">
                      <div className="bg-[#1da1f2] rounded-tl-xl rounded-bl-xl pl-1 pr-1 pt-1 pb-1">
                        <label htmlFor="inputfiled">
                          {/* <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iTGQ2c3FydGN4TXlja0VsNnhlRGRNYV91TFdWNUE5dlhJUHVfZ3IxIiB4MT0iOS45OTMiIHgyPSI0MC42MTUiIHkxPSI5Ljk5MyIgeTI9IjQwLjYxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhYTRmNCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwN2FkOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNMZDZzcXJ0Y3hNeWNrRWw2eGVEZE1hX3VMV1Y1QTl2WElQdV9ncjEpIiBkPSJNMjQsNEMxMi45NTQsNCw0LDEyLjk1NCw0LDI0czguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwUzM1LjA0Niw0LDI0LDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2LjcwNywyOS4zMDFoNS4xNzZsMC44MTMtNS4yNThoLTUuOTg5di0yLjg3NGMwLTIuMTg0LDAuNzE0LTQuMTIxLDIuNzU3LTQuMTIxaDMuMjgzVjEyLjQ2IGMtMC41NzctMC4wNzgtMS43OTctMC4yNDgtNC4xMDItMC4yNDhjLTQuODE0LDAtNy42MzYsMi41NDItNy42MzYsOC4zMzR2My40OThIMTYuMDZ2NS4yNThoNC45NDh2MTQuNDUyIEMyMS45ODgsNDMuOSwyMi45ODEsNDQsMjQsNDRjMC45MjEsMCwxLjgyLTAuMDg0LDIuNzA3LTAuMjA0VjI5LjMwMXoiPjwvcGF0aD4KPC9zdmc+"
                      /> */}
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTUwLjA2MjUsMTAuNDM3NWMtMS44NDc2NiwwLjgyMDMxIC0zLjgyODEyLDEuMzcxMDkgLTUuOTEwMTYsMS42MjEwOWMyLjEyNSwtMS4yNzM0NCAzLjc1NzgxLC0zLjI4OTA2IDQuNTIzNDQsLTUuNjg3NWMtMS45ODQzNywxLjE3NTc4IC00LjE5MTQxLDIuMDMxMjUgLTYuNTMxMjUsMi40OTIxOWMtMS44NzUsLTIgLTQuNTQ2ODcsLTMuMjQ2MDkgLTcuNTAzOTEsLTMuMjQ2MDljLTUuNjc5NjksMCAtMTAuMjg1MTYsNC42MDE1NiAtMTAuMjg1MTYsMTAuMjgxMjVjMCwwLjgwNDY5IDAuMDkzNzUsMS41ODk4NCAwLjI2OTUzLDIuMzQzNzVjLTguNTQ2ODcsLTAuNDI5NjkgLTE2LjEyMTA5LC00LjUyMzQ0IC0yMS4xOTUzMSwtMTAuNzQ2MDljLTAuODg2NzIsMS41MjM0NCAtMS4zOTA2MiwzLjI4OTA2IC0xLjM5MDYyLDUuMTcxODdjMCwzLjU2NjQxIDEuODEyNSw2LjcxNDg0IDQuNTc0MjIsOC41NjI1Yy0xLjY4NzUsLTAuMDU0NjkgLTMuMjczNDQsLTAuNTE5NTMgLTQuNjYwMTYsLTEuMjg5MDZjMCwwLjA0Mjk3IDAsMC4wODU5NCAwLDAuMTI4OTFjMCw0Ljk4NDM4IDMuNTQ2ODgsOS4xMzY3MiA4LjI0NjA5LDEwLjA4NTk0Yy0wLjg1OTM3LDAuMjM0MzggLTEuNzY5NTMsMC4zNTkzOCAtMi43MDcwMywwLjM1OTM4Yy0wLjY2NDA2LDAgLTEuMzA4NTksLTAuMDYyNSAtMS45Mzc1LC0wLjE4NzVjMS4zMTI1LDQuMDgyMDMgNS4xMDkzOCw3LjA2MjUgOS42MDU0Nyw3LjE0NDUzYy0zLjUxNTYyLDIuNzU3ODEgLTcuOTQ5MjIsNC4zOTg0NCAtMTIuNzY5NTMsNC4zOTg0NGMtMC44MzIwMywwIC0xLjY0ODQ0LC0wLjA0Njg3IC0yLjQ0OTIyLC0wLjE0NDUzYzQuNTQ2ODcsMi45MjE4OCA5Ljk1MzEyLDQuNjIxMDkgMTUuNzYxNzIsNC42MjEwOWMxOC45MTQwNiwwIDI5LjI1NzgxLC0xNS42Njc5NyAyOS4yNTc4MSwtMjkuMjUzOTFjMCwtMC40NDUzMSAtMC4wMTE3MiwtMC44OTQ1MyAtMC4wMjczNCwtMS4zMzIwM2MyLjAwNzgxLC0xLjQ0OTIyIDMuNzUsLTMuMjYxNzIgNS4xMjg5MSwtNS4zMjQyMnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        id="inputfiled"
                        className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl w-1/2 pl-4 p-2"
                        placeholder={
                          LocaForEditScreen
                            ? "New Link Please"
                            : "https://www.X.com/aara"
                        }
                        onChange={(e) => {
                          InputHandler("x", e.target.value);
                        }}
                        value={XInput}
                      />
                      <div
                        className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                        onClick={() => {
                          SetX(false);
                          SetTesting2(false);
                          DataHandler();
                        }}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}{" "}
              {Youtube && (
                <>
                  <div className="pl-8 pt-8 mb-2">
                    <div className="flex flex-row">
                      <div className="bg-[#ff0000] rounded-tl-xl rounded-bl-xl pl-1 ">
                        <label htmlFor="inputfiled">
                          {/* <img
                        alt="svgImg"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iTGQ2c3FydGN4TXlja0VsNnhlRGRNYV91TFdWNUE5dlhJUHVfZ3IxIiB4MT0iOS45OTMiIHgyPSI0MC42MTUiIHkxPSI5Ljk5MyIgeTI9IjQwLjYxNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhYTRmNCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwN2FkOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNMZDZzcXJ0Y3hNeWNrRWw2eGVEZE1hX3VMV1Y1QTl2WElQdV9ncjEpIiBkPSJNMjQsNEMxMi45NTQsNCw0LDEyLjk1NCw0LDI0czguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwUzM1LjA0Niw0LDI0LDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2LjcwNywyOS4zMDFoNS4xNzZsMC44MTMtNS4yNThoLTUuOTg5di0yLjg3NGMwLTIuMTg0LDAuNzE0LTQuMTIxLDIuNzU3LTQuMTIxaDMuMjgzVjEyLjQ2IGMtMC41NzctMC4wNzgtMS43OTctMC4yNDgtNC4xMDItMC4yNDhjLTQuODE0LDAtNy42MzYsMi41NDItNy42MzYsOC4zMzR2My40OThIMTYuMDZ2NS4yNThoNC45NDh2MTQuNDUyIEMyMS45ODgsNDMuOSwyMi45ODEsNDQsMjQsNDRjMC45MjEsMCwxLjgyLTAuMDg0LDIuNzA3LTAuMjA0VjI5LjMwMXoiPjwvcGF0aD4KPC9zdmc+"
                      /> */}
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQ0Ljg5ODQ0LDE0LjVjLTAuMzk4NDQsLTIuMTk5MjIgLTIuMjk2ODcsLTMuODAwNzggLTQuNSwtNC4zMDA3OGMtMy4yOTY4NywtMC42OTkyMiAtOS4zOTg0NCwtMS4xOTkyMiAtMTYsLTEuMTk5MjJjLTYuNTk3NjYsMCAtMTIuNzk2ODcsMC41IC0xNi4wOTc2NiwxLjE5OTIyYy0yLjE5OTIyLDAuNSAtNC4xMDE1NiwyIC00LjUsNC4zMDA3OGMtMC40MDIzNCwyLjUgLTAuODAwNzgsNiAtMC44MDA3OCwxMC41YzAsNC41IDAuMzk4NDQsOCAwLjg5ODQ0LDEwLjVjMC40MDIzNCwyLjE5OTIyIDIuMzAwNzgsMy44MDA3OCA0LjUsNC4zMDA3OGMzLjUsMC42OTkyMiA5LjUsMS4xOTkyMiAxNi4xMDE1NiwxLjE5OTIyYzYuNjAxNTYsMCAxMi42MDE1NiwtMC41IDE2LjEwMTU2LC0xLjE5OTIyYzIuMTk5MjIsLTAuNSA0LjA5NzY2LC0yIDQuNSwtNC4zMDA3OGMwLjM5ODQ0LC0yLjUgMC44OTg0NCwtNi4xMDE1NiAxLC0xMC41Yy0wLjIwMzEyLC00LjUgLTAuNzAzMTIsLTggLTEuMjAzMTIsLTEwLjV6TTE5LDMydi0xNGwxMi4xOTkyMiw3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        id="inputfiled"
                        onChange={(e) => {
                          InputHandler("yt", e.target.value);
                        }}
                        className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl w-1/2 pl-4 p-2"
                        placeholder={
                          LocaForEditScreen
                            ? "New Link Please"
                            : "https://www.youtube.com/aara"
                        }
                        value={YoutubeInput}
                      />
                      <div
                        className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                        onClick={() => {
                          SetYoutube(false);
                          SetTesting3(false);
                          DataHandler();
                        }}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}{" "}
              {LinkedIn && (
                <>
                  <div className="pl-8 pt-8 mb-8">
                    <div className="flex flex-row">
                      <div className="bg-[#0077b5] rounded-tl-xl rounded-bl-xl pl-1 pr-1 ">
                        <label htmlFor="inputfiled">
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTQxLDRoLTMyYy0yLjc2LDAgLTUsMi4yNCAtNSw1djMyYzAsMi43NiAyLjI0LDUgNSw1aDMyYzIuNzYsMCA1LC0yLjI0IDUsLTV2LTMyYzAsLTIuNzYgLTIuMjQsLTUgLTUsLTV6TTE3LDIwdjE5aC02di0xOXpNMTEsMTQuNDdjMCwtMS40IDEuMiwtMi40NyAzLC0yLjQ3YzEuOCwwIDIuOTMsMS4wNyAzLDIuNDdjMCwxLjQgLTEuMTIsMi41MyAtMywyLjUzYy0xLjgsMCAtMywtMS4xMyAtMywtMi41M3pNMzksMzloLTZjMCwwIDAsLTkuMjYgMCwtMTBjMCwtMiAtMSwtNCAtMy41LC00LjA0aC0wLjA4Yy0yLjQyLDAgLTMuNDIsMi4wNiAtMy40Miw0LjA0YzAsMC45MSAwLDEwIDAsMTBoLTZ2LTE5aDZ2Mi41NmMwLDAgMS45MywtMi41NiA1LjgxLC0yLjU2YzMuOTcsMCA3LjE5LDIuNzMgNy4xOSw4LjI2eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        id="inputfiled"
                        onChange={(e) => {
                          InputHandler("link", e.target.value);
                        }}
                        className="rounded-tr-2xl bg-gray-900 rounded-br-2xl w-1/2 text-white pl-4 p-2"
                        placeholder={
                          LocaForEditScreen
                            ? "New Link Please"
                            : "https://www.linkedin.com/aara"
                        }
                        value={LinkedInInput}
                      />
                      <div
                        className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                        onClick={() => {
                          SetLinkedIn(false);
                          SetTesting4(false);
                          DataHandler();
                        }}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}{" "}
              {/*  */}
              {/*  */}
              {/*  */}
              {/* The Rounded Icon filed */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/* The Rounded Icon filed */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/* The Rounded Icon filed */}
              {/*  */}
              {/*  */}
              {/*  */}
              {/* The Rounded Icon filed */}
              {!InoutFiled && (
                <div>
                  <div>
                    {!hideSelectText && (
                      <h1 className="font-bold  text-sm mt-3 pt-2 pl-8 pb-4 text-white">
                        Select The Medium
                      </h1>
                    )}
                  </div>
                  <div className="flex flex-row gap-2">
                    {!Insta && (
                      <div className="pl-4 mb-2">
                        <button
                          onClick={() => {
                            SetInsta(true);
                            DataHandler();
                            SetTesting(true);
                          }}
                          className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxkZWZzPjxyYWRpYWxHcmFkaWVudCBjeD0iMTkuMzgiIGN5PSI0Mi4wMzUiIHI9IjQ0Ljg5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xX1h5MTBKY3UxTDJTdV9ncjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZGQ1NSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMC4zMjgiIHN0b3AtY29sb3I9IiNmZjU0M2YiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMzQ4IiBzdG9wLWNvbG9yPSIjZmM1MjQ1Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjUwNCIgc3RvcC1jb2xvcj0iI2U2NDc3MSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMC42NDMiIHN0b3AtY29sb3I9IiNkNTNlOTEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNzYxIiBzdG9wLWNvbG9yPSIjY2MzOWE0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjg0MSIgc3RvcC1jb2xvcj0iI2M4MzdhYiI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIxMS43ODYiIGN5PSI1LjU0MDMiIHI9IjI5LjgxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yX1h5MTBKY3UxTDJTdV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzQxNjhjOSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMC45OTkiIHN0b3AtY29sb3I9IiM0MTY4YzkiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iIzBkMGMwYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjU2di0yNTZoMjU2djI1NnoiIGlkPSJiZ1JlY3RhbmdsZSI+PC9wYXRoPjwvZz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDUuMzMzMzMsNS4zMzMzMykiPjxwYXRoIGQ9Ik0zNC4wMTcsNDEuOTlsLTIwLDAuMDE5Yy00LjQsMC4wMDQgLTguMDAzLC0zLjU5MiAtOC4wMDgsLTcuOTkybC0wLjAxOSwtMjBjLTAuMDA0LC00LjQgMy41OTIsLTguMDAzIDcuOTkyLC04LjAwOGwyMCwtMC4wMTljNC40LC0wLjAwNCA4LjAwMywzLjU5MiA4LjAwOCw3Ljk5MmwwLjAxOSwyMGMwLjAwNSw0LjQwMSAtMy41OTIsOC4wMDQgLTcuOTkyLDguMDA4eiIgZmlsbD0idXJsKCNjb2xvci0xX1h5MTBKY3UxTDJTdV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTM0LjAxNyw0MS45OWwtMjAsMC4wMTljLTQuNCwwLjAwNCAtOC4wMDMsLTMuNTkyIC04LjAwOCwtNy45OTJsLTAuMDE5LC0yMGMtMC4wMDQsLTQuNCAzLjU5MiwtOC4wMDMgNy45OTIsLTguMDA4bDIwLC0wLjAxOWM0LjQsLTAuMDA0IDguMDAzLDMuNTkyIDguMDA4LDcuOTkybDAuMDE5LDIwYzAuMDA1LDQuNDAxIC0zLjU5Miw4LjAwNCAtNy45OTIsOC4wMDh6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfWHkxMEpjdTFMMlN1X2dyMikiPjwvcGF0aD48cGF0aCBkPSJNMjQsMzFjLTMuODU5LDAgLTcsLTMuMTQgLTcsLTdjMCwtMy44NiAzLjE0MSwtNyA3LC03YzMuODU5LDAgNywzLjE0IDcsN2MwLDMuODYgLTMuMTQxLDcgLTcsN3pNMjQsMTljLTIuNzU3LDAgLTUsMi4yNDMgLTUsNWMwLDIuNzU3IDIuMjQzLDUgNSw1YzIuNzU3LDAgNSwtMi4yNDMgNSwtNWMwLC0yLjc1NyAtMi4yNDMsLTUgLTUsLTV6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGNpcmNsZSBjeD0iMzEuNSIgY3k9IjE2LjUiIHI9IjEuNSIgZmlsbD0iI2ZmZmZmZiI+PC9jaXJjbGU+PHBhdGggZD0iTTMwLDM3aC0xMmMtMy44NTksMCAtNywtMy4xNCAtNywtN3YtMTJjMCwtMy44NiAzLjE0MSwtNyA3LC03aDEyYzMuODU5LDAgNywzLjE0IDcsN3YxMmMwLDMuODYgLTMuMTQxLDcgLTcsN3pNMTgsMTNjLTIuNzU3LDAgLTUsMi4yNDMgLTUsNXYxMmMwLDIuNzU3IDIuMjQzLDUgNSw1aDEyYzIuNzU3LDAgNSwtMi4yNDMgNSwtNXYtMTJjMCwtMi43NTcgLTIuMjQzLC01IC01LC01eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </button>
                      </div>
                    )}
                    {!FaceBook && (
                      <div className="pl-4 mb-2">
                        <button
                          onClick={() => {
                            SetFaceBook(true);
                            SetTesting1(true);
                            DataHandler();
                          }}
                          className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMzliZTUiIGQ9Ik0yNCA1QTE5IDE5IDAgMSAwIDI0IDQzQTE5IDE5IDAgMSAwIDI0IDVaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI2LjU3MiwyOS4wMzZoNC45MTdsMC43NzItNC45OTVoLTUuNjl2LTIuNzNjMC0yLjA3NSwwLjY3OC0zLjkxNSwyLjYxOS0zLjkxNWgzLjExOXYtNC4zNTljLTAuNTQ4LTAuMDc0LTEuNzA3LTAuMjM2LTMuODk3LTAuMjM2Yy00LjU3MywwLTcuMjU0LDIuNDE1LTcuMjU0LDcuOTE3djMuMzIzaC00LjcwMXY0Ljk5NWg0LjcwMXYxMy43MjlDMjIuMDg5LDQyLjkwNSwyMy4wMzIsNDMsMjQsNDNjMC44NzUsMCwxLjcyOS0wLjA4LDIuNTcyLTAuMTk0VjI5LjAzNnoiPjwvcGF0aD4KPC9zdmc+"
                          />
                        </button>
                      </div>
                    )}
                    {!X && (
                      <div className="pl-4 mb-2">
                        <button
                          onClick={() => {
                            SetX(true);
                            DataHandler();
                            SetTesting2(true);
                          }}
                          className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxsaW5lYXJHcmFkaWVudCBpZD0iVThZZzBRNWd6cFJiUURCU25TQ2ZQYV95b1FhYlM4bDBxcHJfZ3IxIiB4MT0iNC4zMzgiIHgyPSIzOC45ODQiIHkxPSItMTAuMDU2IiB5Mj0iNDkuOTU0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNGI0YjRiIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuMjQ3IiBzdG9wLWNvbG9yPSIjM2UzZTNlIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuNjg2IiBzdG9wLWNvbG9yPSIjMmIyYjJiIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjUyNTI1Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1U4WWcwUTVnenBSYlFEQlNuU0NmUGFfeW9RYWJTOGwwcXByX2dyMSkiIGQ9Ik0zOCw0MkgxMGMtMi4yMDksMC00LTEuNzkxLTQtNFYxMGMwLTIuMjA5LDEuNzkxLTQsNC00aDI4YzIuMjA5LDAsNCwxLjc5MSw0LDR2MjgJQzQyLDQwLjIwOSw0MC4yMDksNDIsMzgsNDJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM0LjI1NywzNGgtNi40MzdMMTMuODI5LDE0aDYuNDM3TDM0LjI1NywzNHogTTI4LjU4NywzMi4zMDRoMi41NjNMMTkuNDk5LDE1LjY5NmgtMi41NjMgTDI4LjU4NywzMi4zMDR6Ij48L3BhdGg+PHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIxNS44NjYsMzQgMjMuMDY5LDI1LjY1NiAyMi4xMjcsMjQuNDA3IDEzLjgyMywzNCI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMjQuNDUsMjEuNzIxIDI1LjM1NSwyMy4wMSAzMy4xMzYsMTQgMzEuMTM2LDE0Ij48L3BvbHlnb24+Cjwvc3ZnPg=="
                          />
                        </button>
                      </div>
                    )}
                    {!Youtube && (
                      <div className="pl-4 mb-2">
                        <button
                          onClick={() => {
                            SetYoutube(true);
                            SetTesting3(true);
                            DataHandler();
                          }}
                          className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik00My4yLDMzLjljLTAuNCwyLjEtMi4xLDMuNy00LjIsNGMtMy4zLDAuNS04LjgsMS4xLTE1LDEuMWMtNi4xLDAtMTEuNi0wLjYtMTUtMS4xYy0yLjEtMC4zLTMuOC0xLjktNC4yLTRDNC40LDMxLjYsNCwyOC4yLDQsMjRjMC00LjIsMC40LTcuNiwwLjgtOS45YzAuNC0yLjEsMi4xLTMuNyw0LjItNEMxMi4zLDkuNiwxNy44LDksMjQsOWM2LjIsMCwxMS42LDAuNiwxNSwxLjFjMi4xLDAuMywzLjgsMS45LDQuMiw0YzAuNCwyLjMsMC45LDUuNywwLjksOS45QzQ0LDI4LjIsNDMuNiwzMS42LDQzLjIsMzMuOXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjAgMzFMMjAgMTcgMzIgMjR6Ij48L3BhdGg+Cjwvc3ZnPg=="
                          />
                        </button>
                      </div>
                    )}

                    {!LinkedIn && (
                      <div className="pl-4 mb-2">
                        <button
                          onClick={() => {
                            SetLinkedIn(true);
                            DataHandler();
                            SetTesting4(true);
                          }}
                          className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNQlWMzd6Ij48L3BhdGg+PHBhdGggZD0iTTMwLDM3VjI2LjkwMWMwLTEuNjg5LTAuODE5LTIuNjk4LTIuMTkyLTIuNjk4Yy0wLjgxNSwwLTEuNDE0LDAuNDU5LTEuNzc5LDEuMzY0CWMtMC4wMTcsMC4wNjQtMC4wNDEsMC4zMjUtMC4wMzEsMS4xMTRMMjYsMzdoLTdWMThoN3YxLjA2MUMyNy4wMjIsMTguMzU2LDI4LjI3NSwxOCwyOS43MzgsMThjNC41NDcsMCw3LjI2MSwzLjA5Myw3LjI2MSw4LjI3NAlMMzcsMzdIMzB6IE0xMSwzN1YxOGgzLjQ1N0MxMi40NTQsMTgsMTEsMTYuNTI4LDExLDE0LjQ5OUMxMSwxMi40NzIsMTIuNDc4LDExLDE0LjUxNCwxMWMyLjAxMiwwLDMuNDQ1LDEuNDMxLDMuNDg2LDMuNDc5CUMxOCwxNi41MjMsMTYuNTIxLDE4LDE0LjQ4NSwxOEgxOHYxOUgxMXoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMC41LDM2LjV2LTkuNTk5YzAtMS45NzMtMS4wMzEtMy4xOTgtMi42OTItMy4xOThjLTEuMjk1LDAtMS45MzUsMC45MTItMi4yNDMsMS42NzcJYy0wLjA4MiwwLjE5OS0wLjA3MSwwLjk4OS0wLjA2NywxLjMyNkwyNS41LDM2LjVoLTZ2LTE4aDZ2MS42MzhjMC43OTUtMC44MjMsMi4wNzUtMS42MzgsNC4yMzgtMS42MzgJYzQuMjMzLDAsNi43NjEsMi45MDYsNi43NjEsNy43NzRMMzYuNSwzNi41SDMwLjV6IE0xMS41LDM2LjV2LTE4aDZ2MThIMTEuNXogTTE0LjQ1NywxNy41Yy0xLjcxMywwLTIuOTU3LTEuMjYyLTIuOTU3LTMuMDAxCWMwLTEuNzM4LDEuMjY4LTIuOTk5LDMuMDE0LTIuOTk5YzEuNzI0LDAsMi45NTEsMS4yMjksMi45ODYsMi45ODljMCwxLjc0OS0xLjI2OCwzLjAxMS0zLjAxNSwzLjAxMUgxNC40NTd6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMTloNXYxN2gtNVYxOXogTTE0LjQ4NSwxN2gtMC4wMjhDMTIuOTY1LDE3LDEyLDE1Ljg4OCwxMiwxNC40OTlDMTIsMTMuMDgsMTIuOTk1LDEyLDE0LjUxNCwxMgljMS41MjEsMCwyLjQ1OCwxLjA4LDIuNDg2LDIuNDk5QzE3LDE1Ljg4NywxNi4wMzUsMTcsMTQuNDg1LDE3eiBNMzYsMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgJYy0xLjUwMSwwLTIuMzEzLDEuMDEyLTIuNzA3LDEuOTlDMjQuOTU3LDI1LjU0MywyNSwyNi41MTEsMjUsMjd2OWgtNVYxOWg1djIuNjE2QzI1LjcyMSwyMC41LDI2Ljg1LDE5LDI5LjczOCwxOQljMy41NzgsMCw2LjI2MSwyLjI1LDYuMjYxLDcuMjc0TDM2LDM2TDM2LDM2eiI+PC9wYXRoPgo8L3N2Zz4="
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* This is for Caontact details */}
            <div>
              <h1 className="font-extrabold mt-4 mb-4 pl-2 text-2xl text-white">
                {LocaForEditScreen ? "Edit Your Contact" : " Add Your Contact"}
              </h1>
            </div>
            <div>
              <div
                className={`border-white border-2 rounded-xl ${InoutFiled1 &&
                  `flex justify-center`} `}
              >
                {InoutFiled1 && (
                  <div className="">
                    <div>
                      <h1 className="font-bold mt-4 pl-2 text-lg text-white">
                        Contact Information
                      </h1>
                      <div
                        className="pl-14 mb-2 pt-4 "
                        onClick={() => {
                          SetInoutField1(false);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          onClick={() => SetCDisplayCmp1("valid")}
                          stroke="currentColor"
                          className="h-16 w-16 fill-white stroke-indigo-500 cursor-pointer "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* This is where the input file are present  */}
                {Phone && (
                  <>
                    <div className="pl-8 pt-8 mb-2">
                      <div className="flex flex-row">
                        <div className="bg-white rounded-tl-xl rounded-bl-xl">
                          <label htmlFor="inputfiled">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACF0lEQVR4nO2YTWsUQRCGa0Xw5heinkz0Z4gQPKs/wA/YVE1Va4yL4CmCsAcxePEeFPHsQVAk6o8IUcFARMSrglWzKjFqICO9iUJkheykZ6YD/UDB0N3T877TNT01A5BIJBKJmHDu6wFkm0TWJyg674NEH/s23wfxUrSI9RqxfSGxYlAgW4/ErkJ8FC0UffA/4QOM3PfnQCwQ243Niv8T42LXIQaIbARZfwxrgMSWnbMjTesHZJ0uIX4tlURvNq0f1naZ0gbmmtYP6ztLOQOsFoOBpfIGbCmGFHpXPoXsbQxb6L0trMBM0/oBnZ0oa2Bc9DjEAIo+KmHgIcRCu53vJbaFIXL/zfnO590QE1nW209iLzZhYHZiorcPYiXL7AyJPvWlwl/RbN99G7Kdhu1D0Wpf/nTYR1SVZyKR2MaQy08S2zMUWyTR9yED+3PaLDk7VYn4TOwKia6WrXuGCrZOUPGIvWMbXkzVxzJzfjSYAX9HahRfrJfak8EMoLOp2g04mwpmIHN2rv4V0LPhDGQfDyHrr/oM6M8Ll74dhJCg2N0a838GQuOc7SHRl5WLF53314Iq6KeS6OvKDLC+Cp46/9LpFLtQ7DayrgR8YFf8nH5uqPWnrtgdEs238LDm/TnIRqAput1iJ4qNoegtZHtOrB8Glxy66vv8mP5YsTF/LsRIt1vs8B/u7Yv5qA9/7Nua1pVIJCA+fgPJhNzSPENRwQAAAABJRU5ErkJggg==" />{" "}
                          </label>
                        </div>

                        <input
                          type="text"
                          id="inputfiled"
                          onChange={(e) => {
                            InputHandler("phone", e.target.value);
                          }}
                          className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl pl-4 w-1/2 p-2"
                          placeholder="+XXXXXXXXXX"
                          // inputMode="numeric"
                          // pattern="[0-9]*"
                          // onKeyPress={(e) => {
                          //   const keyCode = e.charCode || e.keyCode;
                          //   const validKey = keyCode >= 48 && keyCode <= 57;
                          //   if (!validKey) {
                          //     e.preventDefault();
                          //   }
                          // }}
                          value={PhoneValue}
                        />

                        <div
                          className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                          onClick={() => {
                            SetPhone(false);
                            DataHandler();
                          }}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {Web && (
                  <>
                    <div className="pl-8 pt-8 mb-2">
                      <div className="flex flex-row">
                        <div className="bg-white rounded-tl-xl rounded-bl-xl p-1.5">
                          <label htmlFor="inputfiled">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGN0lEQVR4nN1Ya4hVVRS+0/ttURQ9BI3MsgwKyySo0B9l9iSGIh/37n3W3jfHxrAC7cX0Q7MgkMoie1kaFJZUIEYPSkMqJSWM3tmklDres9YZm2Qy0xvfPvvMHM89d5yradGGDfeuvc/Z317rW69TKPzfhrUyQFu5XAWRUpbv1sTTtZEWbaMbta4MLRSqTQcMTBBsPkUbvkeTrNKG/9JGqnUncYcyPL9E0ej9BtLa307ShudqI93+0NWaeKa2Mg7amTy58wRMa7ecShReGhguayOvKZIu7FeG1yjDY/9RUKWAb9HEoTa8SxleXLIyfHfQ1UNLJR6I30p1nplemzBh09GapFUb3uIAkizCBfYJUFtb9SBN/HiPhiyPgjwIOs9SRq5wQGw4UhvZoIzcj/8wrzL8RHNz9WCtK8cqim4CcPfb8CxnfuJ2VQ6H7TUoZfgVf8tXm6dtOBLmVIbnK5L1uHXJVC7WRn6PTZUASzjGC91/kgeU4Z8UybXuUpavViSdyjBrHV3YMLBeTclsEBfel5ijRHIDTKSMfJcAqQXmLjTJaY5krZc939xcPaxoK+coko3KyOZiORrUf1CGb000BVCB5WZteLsH8LUDGoeGap/AjGyGpgGwFyx/CBkcBI6kjKwE2P55H4hOvBov0JrPBxhteB2mIpnU1lY9RJF8ksjiKS3+UikZr4Pj4GBl+POUfE5sVik6sFZm9Edbc+F9CdH399DEy8DTCbd3nbyH4An18mL8Vyacpo3MS02nlcDIHRn5vFLA18QX213u1ko8kCganJVDFgThJU4Rjsv10COig9xWhoOgNZHdP6yNbMhG+TyOpeZEpC9FvDPjHC84BZAsAR9BkTpqlVXglgc5p/aA8Gai8Iy8w/sERvJ0bAH5NrPWXSxGx8fOJVVtozE1oLDBB7+ZHuQv2QOItpwdBHJdo8CUkU+9Zt6op00fmGfVasvFKaCWcUgreQcAvCK2jWuM22Ng/FSONp/zilirSZbm8CvUjl/lrUNA5JqDif9E/FJWHmwYmJHu2JT8UM5zK3q0Sfx9Dr/4LmycOGXriSC/C6CpqaxMxb4SRaOza2768JK7RjwdxHYpLPteYuuBPaOIK3nAXCQf3xoeV/gXhiJ+Ejk0Z0GmOPXqymlJSsq4tntIGXmkYfIT74QD5D/HazywBSgOaoC5ctiRn0e5mfOS1tbq4T7oNgqsgpm/Jos8sOWa5LNaYLoy1L/Euhzpk3Z6TiqHpwdWbtuLcPFlDE7WZ4Nsyci9vsTixEMzo9qE6Ity2JvsvewBQcCX+aqgQa/kt7zGkIomKuIdve8Mz9W2c4R7RxCpfALGRWCXL4fH1xxuZSrM2VP391djVmYkwLAH9Zwi/kORbIMVwFtoErk6F5gLBXHQa3XlMPGPGa4s8Npc0QiwIIiuTAPznB4DJaC6dd0UyZJcUIk5fffTgRrd2l+PSrofTMgKvsFIyzGLxfYjsJaVYzoOZYBhgBaKWPo0Y8qcY70bu7wVl8Fsk1ksR4MQLDWxScuT+j0tc3LbOcLLa4BhBIFcoEk2gfxobPoGR7IISRWNg6s+iT9IEfllf9DbezYl73JZRFeGem+sAdbbdfHPMG3cHNcZzmzE7dpwBI25xoP4TX/YdheEnSf11mt1OPZ6LOMX/f9cYBiunCL5xjvW9fW1Vg6HOfWSbAQXHE+cd8k2RfyS19rDdYERd6BcJuLzUjGxBljcT9QE5B2obuuCA298bOtG4xDfLBqMQIgKBJ7b03umgLlgasORcaaQZ1Fgxp18DAzNMuKXv9xyV4uhakmSu5E799g5gexosbwWlqFGhxyg4h3VJngU8qsHNi/pFZM9PpNEWIszhytIv3CtoS880X0VGh1OM1ZmxF0370LMQTmMyrP+U9WmuMyRR5M8qQz/EIOSTS4dEV8Vhyj5CoXiXn8RAmc0yWxv3qo/ZK0vmef51m9h3JI5DSV7loKb/v/HqPkcOJL300XqPn8NakMcQ+Q2PEuRvIMmI3YUFyzxgWUlPBEmxmcpPOP2EC9vaek4xoEhuc9pzUYXxR9fpAthqXCgh7UyIN2eIST5lLQGnu959m7hvzA0yWPehB+hCTqgn0b7Gu6DX3nrkHob/gZtIs+WfDwnawAAAABJRU5ErkJggg==" />{" "}
                          </label>
                        </div>

                        <input
                          type="text"
                          id="inputfiled"
                          className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl pl-4 w-1/2 p-2"
                          placeholder="www.aara.com"
                          onChange={(e) => {
                            InputHandler("web", e.target.value);
                          }}
                          value={WebValue}
                        />
                        <div
                          className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                          onClick={() => {
                            SetWeb(false);
                            DataHandler();
                          }}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {Email && (
                  <>
                    <div className="pl-8 pt-8 mb-2">
                      <div className="flex flex-row">
                        <div className="bg-white rounded-tl-xl rounded-bl-xl p-0.5">
                          <label htmlFor="inputfiled">
                            <img
                              alt="svgImg"
                              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiM2MjY1ZWUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4zMzMzMyw1LjMzMzMzKSI+PHBhdGggZD0iTTQ1LDE2LjJsLTUsMi43NWwtNSw0Ljc1djE2LjNoN2MxLjY1NywwIDMsLTEuMzQzIDMsLTN6Ij48L3BhdGg+PHBhdGggZD0iTTMsMTYuMmwzLjYxNCwxLjcxbDYuMzg2LDUuNzl2MTYuM2gtN2MtMS42NTcsMCAtMywtMS4zNDMgLTMsLTN6Ij48L3BhdGg+PHBhdGggZD0iTTM1LDExLjJsLTExLDguMjVsLTExLC04LjI1bC0xLDUuOGwxLDYuN2wxMSw4LjI1bDExLC04LjI1bDEsLTYuN3oiPjwvcGF0aD48cGF0aCBkPSJNMywxMi4yOTh2My45MDJsMTAsNy41di0xMi41bC0zLjEyNCwtMi4zNDFjLTAuNzQ0LC0wLjU1OCAtMS42NDgsLTAuODU5IC0yLjU3OCwtMC44NTl2MGMtMi4zNzQsMCAtNC4yOTgsMS45MjQgLTQuMjk4LDQuMjk4eiI+PC9wYXRoPjxwYXRoIGQ9Ik00NSwxMi4yOTh2My45MDJsLTEwLDcuNXYtMTIuNWwzLjEyNCwtMi4zNDFjMC43NDQsLTAuNTU4IDEuNjQ4LC0wLjg1OSAyLjU3OCwtMC44NTl2MGMyLjM3NCwwIDQuMjk4LDEuOTI0IDQuMjk4LDQuMjk4eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                            />
                          </label>
                        </div>

                        <input
                          type="text"
                          id="inputfiled"
                          className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl pl-4 w-1/2 p-2"
                          placeholder="aara@email.com"
                          onChange={(e) => {
                            InputHandler("email", e.target.value);
                          }}
                          value={EmailValue}
                        />
                        <div
                          className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                          onClick={() => {
                            SetEmail(false);
                            DataHandler();
                          }}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {Location && (
                  <>
                    <div className="pl-8 pt-8 mb-4">
                      <div className="flex flex-row">
                        <div className="bg-white rounded-tl-xl rounded-bl-xl p-0.5">
                          <label htmlFor="inputfiled">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEdUlEQVR4nO1ZW4gcRRStFTVIVNSARnyBBlGEINkoik/0Q/THD12IZLLTt/pWaXadVSEiKrJ+KPinXyISMCAGyU/wga8PESQmPtCIIAnqT/Kx2Uzf251Eorsmabk9r9rZTXfvTM/sLsyBgWW7+lbdqlOnzq1WaoABBigEvh9dBsijGvltMPQTGD6skU8C0iwgVWv/o/cAg8e1rl6klgs85HsAabc2NKMNx3l+gPQvIH3smeptSzdwj64B5C/zDnrhH50B5F2+H63rewJCh/bBaOQ9nuEXfT+8f/TJ4KqR5w5dYG18nu8fucL36S4w/LJG/iFpO2dF+ISH/GhfE9BIL9Tp8J82vH0xszhqoxu04Z2AdNqh1WmN/JJS8ZDqD+IhxOAOa/naTiMgRsNg+OCclUySWEHYXAku1oY+cVei73TqFpOT8blg+KtmEoaPC80K60AjvQaGD2jkzapH2Lo1urSNTh8WEtj3g9udmTmoegjEaLilUHRG22hj10Frh1STnztUj6EN73Tk9dMC7AHNNmbE94Obs96pVOJVYHlCI+/Thv+WHxjeq5Er8ixHn+sa8ioSXR6bXttxAhpDz5G3PVntEYOrwdCvZz15kfZLm6w4gPR1cxX8EDpOAAy/63T+fObMpw2+dWL/MjISn58WSxvaVghtxUE6G/i+1LZCG8esCWVEWRJ1sTyR/K/+3Df8dEasu51YP3acgEaeagSy9uiVqZ0a/t6hW2XecwyfdSZjb1qs8tj0WieBascJuLOWtQHFkDXayqwvJAjuQZUWq1KJV7mr2XECdRVJApVKU6tTEzB8PC2BLePH1uRNYGxs+kLXqXaRAP3VDATR9alta7JZa2t5IpVCyN9lSaluicefHScgHeXdxML7OZvY8DNCm9pZIoNvVWyAPJ4ay/K9i5HvXDIKhl7N5C3S/sxy0tDPWTIKll9x3tnecQLaBI/lVQ6BHFKi82mDl0ots1/kb5uSa2mk4wTK5fCSesVVtxK8PusdmV2hiNBPNqBs2Prf41kzLyjb6k2tSo1OCQVVNxBb63D3A9VjANIOZy/t7jpgGcNbHYt7Slu6U/UI2kYbWyvOcWHXLoD0kcPjP0SnVcEolaZWuwUNIH9eWPDEZSKxE3zX5GR8TmEdqMR3ve4YvlBrvq7I+HKobWpzlW8WGR+Q33G4/0SRsZ1O6K22JLYVFXvL+LE1YPgN33JZ9Q7xkDb0ftvV4KhaSajUTtxvnCRmtA0fXGwcD8MHZEVF91W/kRxwhn9z3aXcXuR930N6qFFrQzcFSzeo2QY+5LjGAJFuyX4vGnZrB234C7VUSGyvU7VppGnEozeerb1YcjB8xFm5w3JNr5YSng03AHLk+veFyk8xcfLMXbHyUvB/IYi9cKs32R8ii43npadOXA6Gf3c8/kn5XqCWEzyfHmldgiWD3Cf7RC5p5wze0AwYelgtR2hDm9yPFvPqAaTZZX91Dkg2ca3zE/hHvlCqlQDPhhs08meJAUQK5ItknnvVAQYYQC0a/wPAzM06cJYSdQAAAABJRU5ErkJggg==" />
                          </label>
                        </div>

                        <input
                          type="text"
                          id="inputfiled"
                          className="rounded-tr-2xl bg-gray-900 text-white rounded-br-2xl pl-4 w-1/2 p-2"
                          placeholder="onEarth"
                          onChange={(e) => {
                            InputHandler("loc", e.target.value);
                          }}
                          value={LoactionValue}
                        />
                        <div
                          className="pl-1 ml-2 pt-2 cursor-pointer hover:bg-indigo-500/60 p-1 rounded-lg"
                          onClick={() => {
                            SetLocation(false);
                            DataHandler();
                          }}
                        >
                          <img
                            alt="svgImg"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE0Ljk4NDM4LDIuNDg2MzNjLTAuNTUxNTIsMC4wMDg2MiAtMC45OTE5MywwLjQ2MjE0IC0wLjk4NDM3LDEuMDEzNjd2MC41aC01LjVjLTAuMjY3NTcsLTAuMDAzNjMgLTAuNTI1NDMsMC4xMDAxMiAtMC43MTU5MywwLjI4ODA1Yy0wLjE5MDUsMC4xODc5MyAtMC4yOTc3NCwwLjQ0NDM2IC0wLjI5Nzc0LDAuNzExOTVoLTEuNDg2MzNjLTAuMzYwNjQsLTAuMDA1MSAtMC42OTYwOCwwLjE4NDM4IC0wLjg3Nzg5LDAuNDk1ODdjLTAuMTgxODEsMC4zMTE1IC0wLjE4MTgxLDAuNjk2NzYgMCwxLjAwODI1YzAuMTgxODEsMC4zMTE1IDAuNTE3MjUsMC41MDA5NyAwLjg3Nzg5LDAuNDk1ODdoMThjMC4zNjA2NCwwLjAwNTEgMC42OTYwOCwtMC4xODQzOCAwLjg3Nzg5LC0wLjQ5NTg3YzAuMTgxODEsLTAuMzExNSAwLjE4MTgxLC0wLjY5Njc2IDAsLTEuMDA4MjVjLTAuMTgxODEsLTAuMzExNSAtMC41MTcyNSwtMC41MDA5NyAtMC44Nzc4OSwtMC40OTU4N2gtMS40ODYzM2MwLC0wLjI2NzU5IC0wLjEwNzI0LC0wLjUyNDAzIC0wLjI5Nzc0LC0wLjcxMTk1Yy0wLjE5MDUsLTAuMTg3OTMgLTAuNDQ4MzYsLTAuMjkxNjggLTAuNzE1OTMsLTAuMjg4MDVoLTUuNXYtMC41YzAuMDAzNywtMC4yNzAzIC0wLjEwMjE4LC0wLjUzMDU5IC0wLjI5MzUxLC0wLjcyMTU1Yy0wLjE5MTMzLC0wLjE5MDk3IC0wLjQ1MTgyLC0wLjI5NjM0IC0wLjcyMjEyLC0wLjI5MjEyek02LDlsMS43OTI5NywxNS4yMzQzOGMwLjExOCwxLjAwNyAwLjk3MDM3LDEuNzY1NjMgMS45ODQzOCwxLjc2NTYzaDEwLjQ0NTMxYzEuMDE0LDAgMS44NjUzOCwtMC43NTg2MiAxLjk4NDM4LC0xLjc2NTYybDEuNzkyOTcsLTE1LjIzNDM3eiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* this area for contact info */}
                {!InoutFiled1 && (
                  <div>
                    <div>
                      {!hideSelectTextForContactInfo && (
                        <h1 className="font-bold  text-sm mt-3 pt-2 pl-8 pb-4 text-white">
                          Select The Medium
                        </h1>
                      )}
                    </div>
                    <div className="flex flex-row gap-2 mb-2 pl-3 ">
                      {!Phone && (
                        <div className="pl-4 mb-2">
                          {/* <button
                        onClick={() => {
                          SetInsta(true);
                          DataHandler();
                          SetTesting(true);
                        }}
                        className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxkZWZzPjxyYWRpYWxHcmFkaWVudCBjeD0iMTkuMzgiIGN5PSI0Mi4wMzUiIHI9IjQ0Ljg5OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xX1h5MTBKY3UxTDJTdV9ncjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZGQ1NSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMC4zMjgiIHN0b3AtY29sb3I9IiNmZjU0M2YiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuMzQ4IiBzdG9wLWNvbG9yPSIjZmM1MjQ1Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjUwNCIgc3RvcC1jb2xvcj0iI2U2NDc3MSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMC42NDMiIHN0b3AtY29sb3I9IiNkNTNlOTEiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjAuNzYxIiBzdG9wLWNvbG9yPSIjY2MzOWE0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIwLjg0MSIgc3RvcC1jb2xvcj0iI2M4MzdhYiI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIxMS43ODYiIGN5PSI1LjU0MDMiIHI9IjI5LjgxMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yX1h5MTBKY3UxTDJTdV9ncjIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzQxNjhjOSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMC45OTkiIHN0b3AtY29sb3I9IiM0MTY4YzkiIHN0b3Atb3BhY2l0eT0iMCI+PC9zdG9wPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGwtb3BhY2l0eT0iMCIgZmlsbD0iIzBkMGMwYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMjU2di0yNTZoMjU2djI1NnoiIGlkPSJiZ1JlY3RhbmdsZSI+PC9wYXRoPjwvZz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48ZyB0cmFuc2Zvcm09InNjYWxlKDUuMzMzMzMsNS4zMzMzMykiPjxwYXRoIGQ9Ik0zNC4wMTcsNDEuOTlsLTIwLDAuMDE5Yy00LjQsMC4wMDQgLTguMDAzLC0zLjU5MiAtOC4wMDgsLTcuOTkybC0wLjAxOSwtMjBjLTAuMDA0LC00LjQgMy41OTIsLTguMDAzIDcuOTkyLC04LjAwOGwyMCwtMC4wMTljNC40LC0wLjAwNCA4LjAwMywzLjU5MiA4LjAwOCw3Ljk5MmwwLjAxOSwyMGMwLjAwNSw0LjQwMSAtMy41OTIsOC4wMDQgLTcuOTkyLDguMDA4eiIgZmlsbD0idXJsKCNjb2xvci0xX1h5MTBKY3UxTDJTdV9ncjEpIj48L3BhdGg+PHBhdGggZD0iTTM0LjAxNyw0MS45OWwtMjAsMC4wMTljLTQuNCwwLjAwNCAtOC4wMDMsLTMuNTkyIC04LjAwOCwtNy45OTJsLTAuMDE5LC0yMGMtMC4wMDQsLTQuNCAzLjU5MiwtOC4wMDMgNy45OTIsLTguMDA4bDIwLC0wLjAxOWM0LjQsLTAuMDA0IDguMDAzLDMuNTkyIDguMDA4LDcuOTkybDAuMDE5LDIwYzAuMDA1LDQuNDAxIC0zLjU5Miw4LjAwNCAtNy45OTIsOC4wMDh6IiBmaWxsPSJ1cmwoI2NvbG9yLTJfWHkxMEpjdTFMMlN1X2dyMikiPjwvcGF0aD48cGF0aCBkPSJNMjQsMzFjLTMuODU5LDAgLTcsLTMuMTQgLTcsLTdjMCwtMy44NiAzLjE0MSwtNyA3LC03YzMuODU5LDAgNywzLjE0IDcsN2MwLDMuODYgLTMuMTQxLDcgLTcsN3pNMjQsMTljLTIuNzU3LDAgLTUsMi4yNDMgLTUsNWMwLDIuNzU3IDIuMjQzLDUgNSw1YzIuNzU3LDAgNSwtMi4yNDMgNSwtNWMwLC0yLjc1NyAtMi4yNDMsLTUgLTUsLTV6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGNpcmNsZSBjeD0iMzEuNSIgY3k9IjE2LjUiIHI9IjEuNSIgZmlsbD0iI2ZmZmZmZiI+PC9jaXJjbGU+PHBhdGggZD0iTTMwLDM3aC0xMmMtMy44NTksMCAtNywtMy4xNCAtNywtN3YtMTJjMCwtMy44NiAzLjE0MSwtNyA3LC03aDEyYzMuODU5LDAgNywzLjE0IDcsN3YxMmMwLDMuODYgLTMuMTQxLDcgLTcsN3pNMTgsMTNjLTIuNzU3LDAgLTUsMi4yNDMgLTUsNXYxMmMwLDIuNzU3IDIuMjQzLDUgNSw1aDEyYzIuNzU3LDAgNSwtMi4yNDMgNSwtNXYtMTJjMCwtMi43NTcgLTIuMjQzLC01IC01LC01eiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg=="
                        />
                      </button> */}
                          <div className="relative inline-flex  group">
                            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-full group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <div
                              onClick={() => {
                                SetPhone(true);
                                DataHandler();
                              }}
                              title="Contact"
                              className="relative inline-flex items-center justify-center p-1.5 text-lg font-bold text-white transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              role="button"
                            >
                              <img
                                alt="svgImg"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwZjAiIGQ9Ik0xMyw0MmgyMmMzLjg2NiwwLDctMy4xMzQsNy03VjEzYzAtMy44NjYtMy4xMzQtNy03LTdIMTNjLTMuODY2LDAtNywzLjEzNC03LDd2MjIJQzYsMzguODY2LDkuMTM0LDQyLDEzLDQyeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zNS40NSwzMS4wNDFsLTQuNjEyLTMuMDUxYy0wLjU2My0wLjM0MS0xLjI2Ny0wLjM0Ny0xLjgzNi0wLjAxN2MwLDAsMCwwLTEuOTc4LDEuMTUzCWMtMC4yNjUsMC4xNTQtMC41MiwwLjE4My0wLjcyNiwwLjE0NWMtMC4yNjItMC4wNDgtMC40NDItMC4xOTEtMC40NTQtMC4yMDFjLTEuMDg3LTAuNzk3LTIuMzU3LTEuODUyLTMuNzExLTMuMjA1CWMtMS4zNTMtMS4zNTMtMi40MDgtMi42MjMtMy4yMDUtMy43MTFjLTAuMDA5LTAuMDEzLTAuMTUzLTAuMTkzLTAuMjAxLTAuNDU0Yy0wLjAzNy0wLjIwNi0wLjAwOS0wLjQ2LDAuMTQ1LTAuNzI2CWMxLjE1My0xLjk3OCwxLjE1My0xLjk3OCwxLjE1My0xLjk3OGMwLjMzMS0wLjU2OSwwLjMyNC0xLjI3NC0wLjAxNy0xLjgzNmwtMy4wNTEtNC42MTJjLTAuMzc4LTAuNTcxLTEuMTUxLTAuNzIyLTEuNzE0LTAuMzMyCWMwLDAtMS40NDUsMC45ODktMS45MjIsMS4zMjVjLTAuNzY0LDAuNTM4LTEuMDEsMS4zNTYtMS4wMTEsMi40OTZjLTAuMDAyLDEuNjA0LDEuMzgsNi42MjksNy4yMDEsMTIuNDVsMCwwbDAsMGwwLDBsMCwwCWM1LjgyMiw1LjgyMiwxMC44NDYsNy4yMDMsMTIuNDUsNy4yMDFjMS4xNC0wLjAwMSwxLjk1OC0wLjI0OCwyLjQ5Ni0xLjAxMWMwLjMzNi0wLjQ3NywxLjMyNS0xLjkyMiwxLjMyNS0xLjkyMglDMzYuMTcyLDMyLjE5MiwzNi4wMjIsMzEuNDE5LDM1LjQ1LDMxLjA0MXoiPjwvcGF0aD4KPC9zdmc+"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {!Web && (
                        <div className="pl-8 mb-2">
                          <div className="relative inline-flex  group">
                            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-full group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <div
                              onClick={() => {
                                SetWeb(true);
                                DataHandler();
                              }}
                              title="Contact"
                              className="relative inline-flex items-center justify-center p-1.5 text-lg font-bold text-white transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              role="button"
                            >
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/fluency/48/domain.png"
                                alt="domain"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {!Email && (
                        <div className="pl-8 mb-2">
                          <div className="relative inline-flex  group">
                            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-full group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <div
                              onClick={() => {
                                SetEmail(true);
                                DataHandler();
                              }}
                              title="Contact"
                              className="relative inline-flex items-center justify-center p-1.5 text-lg font-bold text-white transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              role="button"
                            >
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/fluency/48/secured-letter.png"
                                alt="secured-letter"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {!Location && (
                        <div className="pl-8 mb-2">
                          <div className="relative inline-flex  group">
                            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-full group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                            <div
                              onClick={() => {
                                SetLocation(true);
                                DataHandler();
                              }}
                              title="Contact"
                              className="relative inline-flex items-center justify-center p-1.5 text-lg font-bold text-white transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                              role="button"
                            >
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/fluency/48/location--v1.png"
                                alt="location--v1"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* {!LinkedIn && (
                    <div className="pl-4 mb-2">
                      <button
                        onClick={() => {
                          SetLinkedIn(true);
                          DataHandler();
                          SetTesting4(true);
                        }}
                        className={` ml-4 mb-4 p-1 bg-gradient-to-r text-sm from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 `}
                      >
                        <img
                          alt="svgImg"
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNQlWMzd6Ij48L3BhdGg+PHBhdGggZD0iTTMwLDM3VjI2LjkwMWMwLTEuNjg5LTAuODE5LTIuNjk4LTIuMTkyLTIuNjk4Yy0wLjgxNSwwLTEuNDE0LDAuNDU5LTEuNzc5LDEuMzY0CWMtMC4wMTcsMC4wNjQtMC4wNDEsMC4zMjUtMC4wMzEsMS4xMTRMMjYsMzdoLTdWMThoN3YxLjA2MUMyNy4wMjIsMTguMzU2LDI4LjI3NSwxOCwyOS43MzgsMThjNC41NDcsMCw3LjI2MSwzLjA5Myw3LjI2MSw4LjI3NAlMMzcsMzdIMzB6IE0xMSwzN1YxOGgzLjQ1N0MxMi40NTQsMTgsMTEsMTYuNTI4LDExLDE0LjQ5OUMxMSwxMi40NzIsMTIuNDc4LDExLDE0LjUxNCwxMWMyLjAxMiwwLDMuNDQ1LDEuNDMxLDMuNDg2LDMuNDc5CUMxOCwxNi41MjMsMTYuNTIxLDE4LDE0LjQ4NSwxOEgxOHYxOUgxMXoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMC41LDM2LjV2LTkuNTk5YzAtMS45NzMtMS4wMzEtMy4xOTgtMi42OTItMy4xOThjLTEuMjk1LDAtMS45MzUsMC45MTItMi4yNDMsMS42NzcJYy0wLjA4MiwwLjE5OS0wLjA3MSwwLjk4OS0wLjA2NywxLjMyNkwyNS41LDM2LjVoLTZ2LTE4aDZ2MS42MzhjMC43OTUtMC44MjMsMi4wNzUtMS42MzgsNC4yMzgtMS42MzgJYzQuMjMzLDAsNi43NjEsMi45MDYsNi43NjEsNy43NzRMMzYuNSwzNi41SDMwLjV6IE0xMS41LDM2LjV2LTE4aDZ2MThIMTEuNXogTTE0LjQ1NywxNy41Yy0xLjcxMywwLTIuOTU3LTEuMjYyLTIuOTU3LTMuMDAxCWMwLTEuNzM4LDEuMjY4LTIuOTk5LDMuMDE0LTIuOTk5YzEuNzI0LDAsMi45NTEsMS4yMjksMi45ODYsMi45ODljMCwxLjc0OS0xLjI2OCwzLjAxMS0zLjAxNSwzLjAxMUgxNC40NTd6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMTloNXYxN2gtNVYxOXogTTE0LjQ4NSwxN2gtMC4wMjhDMTIuOTY1LDE3LDEyLDE1Ljg4OCwxMiwxNC40OTlDMTIsMTMuMDgsMTIuOTk1LDEyLDE0LjUxNCwxMgljMS41MjEsMCwyLjQ1OCwxLjA4LDIuNDg2LDIuNDk5QzE3LDE1Ljg4NywxNi4wMzUsMTcsMTQuNDg1LDE3eiBNMzYsMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgJYy0xLjUwMSwwLTIuMzEzLDEuMDEyLTIuNzA3LDEuOTlDMjQuOTU3LDI1LjU0MywyNSwyNi41MTEsMjUsMjd2OWgtNVYxOWg1djIuNjE2QzI1LjcyMSwyMC41LDI2Ljg1LDE5LDI5LjczOCwxOQljMy41NzgsMCw2LjI2MSwyLjI1LDYuMjYxLDcuMjc0TDM2LDM2TDM2LDM2eiI+PC9wYXRoPgo8L3N2Zz4="
                        />
                      </button>
                    </div>
                  )} */}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <div>
              <div className="flex flex-row pt-6 pl-3">
                <div className="-mt-0.5">
                  {" "}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div
                      onClick={handleButtonClick}
                      className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-12"
                    ></div>
                  </label>
                </div>
                <h1 className="text-[1.1rem] pl-2 font-custom2 text-white cursor-default">
                  I have verified that all the links are working correctly
                </h1>
              </div>
            </div>
            <div className="flex justify-between pl-4">
              {!ctBtn ? (
                <button
                  className={`w-[100px] ${!ctBtn &&
                    "cursor-not-allowed"} bg-black h-[45px] my-4 flex text-xl font-custom2 items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 text-[#fff]`}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setSaveBtn(true)}
                  className={`w-[100px]  bg-black h-[45px] my-4 flex text-xl font-custom2 items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 text-[#fff]`}
                >
                  Save
                </button>
              )}
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default UserInputCmp;
