import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

import ProfileCmp from "../Components/ProfileCmp";
const UserProfileScreen = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black overflow-x-hidden no-scrollbar h-screen ">
        <div className="pt-3">
          <NavBar />
        </div>
        <div className="mb-10">
          <ProfileCmp />
        </div>
        <div className="pt-10">
        <Footer /></div>
      </div>
    </>
  );
};

export default UserProfileScreen;
