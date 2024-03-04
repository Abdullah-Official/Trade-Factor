import React from "react";
import Home from "./pages/Home";
import NavHeader from "./components/Navbar";
import Footer from "./components/common/Footer";
import Strategies from "./pages/Strategies";
import {
  Routes,
  Route,
} from "react-router-dom"
import Performance from "./pages/Performance";
import About from "./pages/About";
import WorkWithUs from "./pages/WorkWithUs";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
function App() {

  return (
    <div className="pt-4">
      <NavHeader />
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
