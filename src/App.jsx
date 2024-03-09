import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import NavHeader from "./components/Navbar";
import Footer from "./components/common/Footer";
import Strategies from "./pages/Strategies";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom"
import Performance from "./pages/Performance";
import About from "./pages/About";
import WorkWithUs from "./pages/WorkWithUs";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import HomeBG from "./assets/images/home_bg.png"
import StrategyBG from "./assets/images/strategy_bg.png"
import WorkWithUsBG from "./assets/images/workwithus_bg.png"
import GetStartedBG from "./assets/images/getstarted_bg.png"

function App() {

  const [bg, setBg] = useState(HomeBG)
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/work-with-us") {
      setBg(WorkWithUsBG);
    } else if (pathname === "/get-started") {
      setBg(GetStartedBG);
    } else if (pathname === "/strategies") {
      setBg(StrategyBG);
    } else {
      // Default background if no match found
      setBg(HomeBG);
    }
  }, [location.pathname]);


  return (
    <div style={{ background: `url(${bg})` }} className="h-fit relative !bg-cover bg-no-repeat">
      <div className="pt-4">
        <NavHeader />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </div>
      <Footer />
    </div>
  )
}

export default App
