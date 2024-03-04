import React from "react";
import Home from "./pages/Home";
import NavHeader from "./components/Navbar";
import Footer from "./components/common/Footer";

function App() {

  return (
    <div className="pt-4">
      <NavHeader />
      <div className="">
        <Home />

      </div>
      <Footer />
    </div>
  )
}

export default App
