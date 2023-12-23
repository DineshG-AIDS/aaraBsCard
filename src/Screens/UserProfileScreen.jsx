import NavBar from "../Components/NavBar";

import ProfileCmp from "../Components/ProfileCmp";
const UserProfileScreen = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black overflow-x-hidden no-scrollbar h-screen ">
        <div className="pt-3">
          <NavBar />
        </div>
        <div className="mb-4">
          <ProfileCmp />
        </div>
      </div>
    </>
  );
};

export default UserProfileScreen;
