import { useState, useEffect } from "react";

const Modal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [Hide, Sethide] = useState(true);
  const [Hide1, Sethide1] = useState(true);
  const [Current, SetCurrent] = useState("");
  const [NewPass, SetNewPass] = useState("");
  const [Verifying, SetVerifying] = useState(false);
  

  useEffect(() => {
    if (Verifying) {
      //   SetVerifying1(true);
    }
  }, [Verifying]);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(Verifying);

    if (Current === NewPass) {
      SetVerifying(true);
    }
  };

  const InputHandler = (i, val) => {
    if (i === "current") {
      SetCurrent(val);
    } else if (i === "new") {
      SetNewPass(val);
    }
  };

  return (
    <>
      {/* <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
       
      >
        Toggle modal
      </button> */}
      <div className=" pr-2 flex  gap-x-0.5 flex-row justify-end underline ">
        <h1
          className="text-[#16a34a] font-semibold underline cursor-pointer"
          title="Really want to Reset?"
          onClick={toggleModal}
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
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
            strokeLinecap="round
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
      {isModalVisible && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-50"
          onClick={hideModal}
        >
          <div
            className="relative p-4 w-full max-w-md max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="p-4 md:p-5 text-center">
                {/* Modal content goes here */}
                <h3 className="mb-5 text-lg font-normal text-white font-custom2">
                  Reset your password
                </h3>
                {/* This is seprations */}
                <form onSubmit={SubmitHandler}>
                  <div className="flex flex-row items-center  bg-gray-100 border rounded-lg border-gray-200 text-sm focus:outline-none mt-10 mb-10 relative">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                      type={Hide ? "password" : "text"}
                      placeholder="Current Password"
                      onChange={(e) => InputHandler("current", e.target.value)}
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
                        data-Slot="icon"
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
                  {/*  */}

                  <div className="flex flex-row items-center bg-gray-100 border rounded-lg border-gray-200 text-sm focus:outline-none mt-5 relative">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 "
                      type={Hide1 ? "password" : "text"}
                      placeholder="New Password"
                      onChange={(e) => InputHandler("new", e.target.value)}
                    />
                    <div
                      onClick={() => Sethide1(!Hide1)}
                      className="absolute right-0 top-0 mr-4 mt-4 bg-white cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        data-Slot="icon"
                        className="w-6 h-6"
                      >
                        {Hide1 ? (
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
                  {/* {!!Verifying1 && (
                    <>
                      <h1 className="text-[#16a34a] font-bold mt-4">
                        Password Should match
                      </h1>
                    </>
                  )} */}
                  {/*  */}
                  <button
                    data-modal-hide="popup-modal"
                    type="submit"
                    className="text-white mt-8 bg-[#16a34a] hover:bg-[#16a34a] focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                    onClick={Verifying && hideModal}
                  >
                    Reset
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-gray-500 ml-6 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    onClick={hideModal}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
