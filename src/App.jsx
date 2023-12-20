import HomeSCreen from "./Screens/HomeSCreen";
import CardsListScreen from "./Screens/CardsListScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleEditScreen from "./Screens/SingleEditScreen";
import LoginScreen from "./Screens/LoginScreen";
import LandingScreen from "./Screens/LandingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/editAdmin" element={<HomeSCreen />} />
        <Route path="/" element={<LandingScreen />} />
        <Route path="/alltemp" element={<CardsListScreen />} />

        <Route path="/recreate/:id" exact element={<SingleEditScreen />} />
        <Route path="/login" exact element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
