import NavBar from "../Components/NavBar";

import ProfileCmp from "../Components/ProfileCmp";
const UserProfileScreen = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black overflow-y-hidden no-scrollbar h-screen ">
        <div className="pt-3">
          <NavBar />
        </div>
        <ProfileCmp />
      </div>
    </>
  );
};

export default UserProfileScreen;
