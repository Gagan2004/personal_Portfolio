import React from "react";
import OmnitrixDial from "./components/OmnitrixDial.jsx";
import { BrowserRouter as Router, Routes, Route  , useLocation } from "react-router-dom";
import About from "./pages/About.jsx"
import Skills from "./pages/Skills.jsx";
import ProjectPage from "./pages/Projects.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contact.jsx";


const Appx =()=>{
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  return(<>  
  {showNavbar && <Navbar />}
        {/* <div style={{ marginTop: "80px" }}></div> */}
        <div style={{ marginTop: showNavbar ? "80px" : "0px" }}>
        <Routes>
          <Route path="/" element={<OmnitrixDial/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>

  </>

  )


}


function App() {



  return (

<Router>
    <Appx/>

          </Router> 


  );
}

export default App;
