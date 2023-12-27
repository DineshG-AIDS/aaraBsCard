import HomeSCreen from "./Screens/HomeSCreen";
import CardsListScreen from "./Screens/CardsListScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleEditScreen from "./Screens/SingleEditScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LandingScreen from "./Screens/LandingScreen";
import LoginScreen from "./Screens/LoginScreen";
import Forgetpassword from "./Screens/FogetScreen";
import UserProfileScreen from "./Screens/UserProfileScreen";
import MyCardScreen from "./Screens/MyCardScreen";
import EditScreen from "./Screens/EditScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editAdmin" element={<HomeSCreen />} />
        <Route path="/" element={<LandingScreen />} />
        <Route path="/alltemp" element={<CardsListScreen />} />
        <Route path="/recreate/:id" exact element={<SingleEditScreen />} />
        <Route path="/register" exact element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/profile" element={<UserProfileScreen />} />
        <Route path="/mycards" element={<MyCardScreen />} />
        <Route path="/edit/:id" element={<EditScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
