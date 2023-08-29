import logo from "./logo.svg";
import "./App.css";
import Compare from "./Components/Compare/Compare";
import LoginPage from "./Components/Login/LoginPage";
import StockDetails from "./Components/StockDetails/StockDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Components/LandingPage/Main";
import WatchList from "./Components/Watchlist/WatchList";
import RegistrationPage from "./Components/Registration/RegistrationPage";
import LumpsumCalculator from "./Components/LumpsumCalcuator/LumpsumCalculator";
import DisplayWatchList from "./Components/Watchlist/DisplayWatchList";
import CalculatorPage from "./Components/CalculatorPage/CalculatorPage";
import EMICalculator from "./Components/EMICalculator/EMICalculator";
import Home from "./Components/HomePage/Home";
import AboutUs from "./Components/HomePage/AboutUs";
import HomeNavbar from "./Components/HomePage/HomeNavbar";
import HomeFooter from "./Components/HomePage/HomeFooter";
import HomeHeader from "./Components/HomePage/HomeHeader";
function App() {
  return (
    <div>
     
     
    
  
      {/* <CalculatorPage></CalculatorPage> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/footer" element={<HomeFooter/>}/> */}
          <Route path="/loginpage" element={<LoginPage />} />
           {/*<Route path="/landingpage" element={<Main />} />
          <Route path="/stockdetails/:id" element={<StockDetails />} />
          <Route path="/compare/:id" element={<Compare />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/watchlist" element={<DisplayWatchList />} />
          <Route path="/RegisterPage" element={<RegistrationPage />} />
          <Route path="/AboutusPage" element={<AboutUs />} />
          <Route path="/CalculatorPage" element={<CalculatorPage/>} /> */}
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
