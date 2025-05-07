//     import React, { useState } from "react";
//     import "./OmnitrixDial.css";
//     import base from "../assets/omnitrix-base2.png";
//     import dial from "../assets/omnitrix-dial.png";
//     import platform from "../assets/platform0.png";

//     // import alien_1 from "../assets/alien_1.png"
//     import alien_2 from "../assets/alien_2.png"
//     import alien_3 from "../assets/alien_3.png"
//     import alien_4 from "../assets/diamond_head.jpg"
//     // import alien_4 from "../assets/ben_2.jpg"

    


//     const platforms = [alien_2, alien_3  , alien_4];


//     const OmnitrixDial = () => {
    
//     const [dialRotation, setDialRotation] = useState(0);
//   const [baseRotation, setBaseRotation] = useState(0);
//   const [platformIndex, setPlatformIndex] = useState(0);
//   const [fade, setFade] = useState(true);
//   const [labelsVisible, setLabelsVisible] = useState(false);

//   const handleClick = () => {
//     setFade(false); // Start fade-out
    
//     setBaseRotation(prev => prev - 180);
//     setDialRotation(prev => prev + 180);
//     setLabelsVisible(false); // Hide labels before transition

//     setTimeout(() => {
//       setPlatformIndex(prev => (prev + 1) % platforms.length);
//       setFade(true); // Start fade-in
//       setLabelsVisible(true);
//     }, 300); // Wait for fade-out before changing the image
//   };

//   // useEffect(() => {
//   //   const timer = setTimeout(() => setLabelsVisible(true), 500);
//   //   return () => clearTimeout(timer);
//   // }, []);

//   function hover(){
      
//     setTimeout(() => {
     
//       setLabelsVisible(true);
//     }, 300); // Wait for fade-out before changing the image
//   }

//   }
  
//       return (
//         <div className="dial-wrapper" >
//         <div className="dial-scene" onClick={handleClick} onTouchMoveC  apture={hover}>
//             <img src={base} alt="Omnitrix Base"
//              className={`omni-base `}
//              style={{ transform: `translate(-50%, -50%) rotate(${baseRotation}deg) scale(1.4) `}}   
            
//             />
//             <img
//             src={dial}
//             alt="Omnitrix Dial"
//             className={`omni-dial`}
//             style={{ transform: `rotate(${dialRotation}deg ) scale(1.4)` }}

//             />

//             {/* Navigation Labels */}

//             <div className={`nav-label nav-about ${labelsVisible ? "nav-visible" : "hidden-position"}`}>About</div>
// <div className={`nav-label nav-skills ${labelsVisible ? "nav-visible" : "hidden-position"}`}>Skills</div>
// <div className={`nav-label nav-projects ${labelsVisible ? "nav-visible" : "hidden-position"}`}>Projects</div>
// <div className={`nav-label nav-contact ${labelsVisible ? "nav-visible" : "hidden-position"}`}>Contact</div>

//         </div> 

//          <div className="platform" >
//             <img
//             src={platforms[platformIndex]}
//             alt="platform"
//             className={`platform-img ${fade ? "fade-in" : "fade-out"}`}
//             />
//          </div>


//         </div>
//     );
//       

      
    

//     export default OmnitrixDial;




import React, { useState, useEffect } from "react";
// import {Link} from 'react-router-dom';
import { Link } from "react-router-dom";


import "./OmnitrixDial.css";

import base from "../assets/omnitrix-base2.png";
import dial from "../assets/omnitrix-dial.png";
import platform from "../assets/platform0.png";

import alien_1 from "../assets/font.jpg";
import alien_0 from "../assets/front.jpg";
import alien_2 from "../assets/alien_2.png";
import alien_3 from "../assets/alien_3.png";
import alien_4 from "../assets/diamond_head.jpg";
import alien_5 from "../assets/transform.jpg";


// import alien_4 from "../assets/ben_2.jpg"

const platforms = [alien_5,alien_0,alien_1,alien_2, alien_3, alien_4];

 const OmnitrixDial = () => {
  const [dialRotation, setDialRotation] = useState(0);
  const [baseRotation, setBaseRotation] = useState(0);
  const [platformIndex, setPlatformIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [labelsVisible, setLabelsVisible] = useState(false);

  const handleClick = () => {
    setFade(false); // Start fade-out

    setBaseRotation((prev) => prev - 180);
    setDialRotation((prev) => prev + 180);
    setLabelsVisible(false); // Hide labels before transition

    setTimeout(() => {
      setPlatformIndex((prev) => (prev + 1) % platforms.length);
      setFade(true); // Start fade-in
      setLabelsVisible(true);
    }, 500); // Wait for fade-out before changing the image
  };

  const handleHover = () => {
    // Introduce a slight delay to avoid immediate appearance on accidental hover
    // const timer = setTimeout(() => {
      
    // setBaseRotation((prev) => prev - 90);
    // setDialRotation((prev) => prev + 90);
      setLabelsVisible(true);
    // }, 500);
    // return () => clearTimeout(timer); // Cleanup function to clear the timeout if the hover ends
  };

  const handleMouseLeave = () => {
    setLabelsVisible(false);
  };


  const navHover=()=>{
    setFade(false); // Start fade-out

    const timer = setTimeout(() => {
      
      setBaseRotation((prev) => prev - 90);
      setDialRotation((prev) => prev + 90);
        setLabelsVisible(true);
        setPlatformIndex((prev) => (prev + 1) % platforms.length);
      setFade(true); // Start fade-in
      }, 200);
      return () => clearTimeout(timer);


    
  }
 

  return (
    <div className="dial-wrapper bg-white">
      <div
        className="dial-scene"
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={base}
          alt="Omnitrix Base"
          className={`omni-base `}
          style={{
            transform: `translate(-50%, -50%) rotate(${baseRotation}deg) scale(1.4) `,
          }}
        />
        <div className="dial-container">
        <img
          src={dial}
          alt="Omnitrix Dial"
          className={`omni-dial`}
          style={{ transform: `rotate(${dialRotation}deg ) scale(1.4)` }}
        />
        </div>

        {/* Navigation Labels */}
        <div onMouseEnter={navHover} 
          className={`nav-label nav-about ${
            labelsVisible ? "nav-visible" : "hidden-position"
          }`}
        >
          <Link to ="/about">About</Link>
        </div>
        <div onMouseEnter={navHover}
          className={`nav-label nav-skills ${
            labelsVisible ? "nav-visible" : "hidden-position"
          }`}
        >
          <Link to ="/skills">Skills</Link>
        </div>
        <div onMouseEnter={navHover}
          className={`nav-label nav-projects ${
            labelsVisible ? "nav-visible" : "hidden-position"
          }`}
        >
          <Link to='/projects'> Projects</Link> 
        </div>
        <div onMouseEnter={navHover}
          className={`nav-label nav-contact ${
            labelsVisible ? "nav-visible" : "hidden-position"
          }`}
        >
          Contact
        </div>
      </div>

      {/* <div className="platform">
        <img
          src={platforms[platformIndex]}
          alt="platform"
          className={`platform-img ${fade ? "fade-in" : "fade-out"}`}
        />
      </div> */}
    </div>
  );
};

export default OmnitrixDial;