import SingleCardCmp from "../Components/SingleCardCmp";
import UserData from "../UserData";
import Cookies from "js-cookie";
import data from "../Data";
import Navbar from "../Components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import HeaderCmp from "../Components/HeaderCmp";

const MyCardScreen = () => {
  const tokenId = Cookies.get("user");
  const { count, designDetails } = UserData[tokenId];

  const ids = designDetails.ids;
  const data1 = ids.map((id) => data[id]);

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-black overflow-x-hidden no-scrollbar h-screen">
        <div className="pt-2">
          <Navbar />
        </div>
        <HeaderCmp />
        {count > 0 && (
          <>
            <div className="flex flex-row pl-32  gap-x-14 mb-20  ">
              {data1.map((item, index) => (
                <>
                  <div
                    title="Click to Edit"
                    className="  bg-white p-2 rounded-2xl cursor-pointer no-scrollbar"
                  >
                    <Link to={`/edit/${index + 1}`}>
                      <SingleCardCmp {...item} key={index} />
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </>
        )}
        <Footer />
      </div>
    </>
  );
};

export default MyCardScreen;
