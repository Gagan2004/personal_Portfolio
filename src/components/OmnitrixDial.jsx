import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Code, Briefcase, Mail } from "lucide-react";

import base from "../assets/omnitrix-base2.png";
import dial from "../assets/omnitrix-dial.png";

import alien_1 from "../assets/r-15.jpg";
import alien_0 from "../assets/r-8.jpg";
import alien_2 from "../assets/r-1.png";
import alien_3 from "../assets/r-2.webp";
import alien_4 from "../assets/r-3.jpg";
import alien_5 from "../assets/r-5.jpg";

const platforms = [alien_5, alien_0, alien_1, alien_2, alien_3, alien_4];

const OmnitrixDial = () => {
  const [dialRotation, setDialRotation] = useState(0);
  const [baseRotation, setBaseRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeBackground, setActiveBackground] = useState(null);

  const handleClick = () => {
    setBaseRotation((prev) => prev - 180);
    setDialRotation((prev) => prev + 180);
  };

  const navItems = [
    { id: "about", label: "About", icon: User, path: "/about", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4", image: alien_1 },
    { id: "skills", label: "Skills", icon: Code, path: "/skills", position: "right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4", image: alien_4 },
    { id: "projects", label: "Projects", icon: Briefcase, path: "/projects", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-4", image: alien_5 },
    { id: "contact", label: "Contact", icon: Mail, path: "/contact", position: "left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-4", image: alien_3 },
  ];

  return (
    <div
      className={`relative h-screen w-full overflow-hidden flex justify-center items-center transition-all duration-500 ease-in-out ${activeBackground ? '' : 'bg-[radial-gradient(circle_at_center,_#001100_0%,_#000000_100%)]'}`}
      style={activeBackground ? {
        backgroundImage: `url(${activeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      } : { backgroundImage: `url(${alien_5})`, backgroundSize: 'cover', backgroundPosition: 'top center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(0,0,0,0.7)' }}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-green-500/5 pointer-events-none animate-pulse" />

      <div
        className="relative rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center cursor-pointer z-10"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Dial Image - Moved to bottom (z-20) */}
        <motion.img
          src={dial}
          alt="Omnitrix Dial"
          id="rag"
          className="absolute w-full h-full object-contain z-20"
          style={{
            borderRadius: "5%",
          }}
          animate={{
            rotate: dialRotation + (isHovered ? 90 : 0),
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
        />

        {/* Base Image - Moved to top (z-30) */}
        <motion.img
          src={base}
          alt="Omnitrix Base"
          className="absolute w-[80%] h-[80%]  object-contain z-30"
          animate={{
            rotate: baseRotation + (isHovered ? -90 : 0),
            scale: isHovered ? 0.9 : 1
          }}
          transition={{ type: "spring", stiffness: 50, damping: 15 }}
        />

        {/* Navigation Labels */}
        <AnimatePresence>
          {isHovered && (
            <>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }} // Start from center
                  animate={{
                    opacity: 1,
                    scale: 1.5,
                    x: item.id === 'skills' ? 250 : item.id === 'contact' ? -250 : 0,
                    y: item.id === 'about' ? -250 : item.id === 'projects' ? 250 : 0
                  }}
                  exit={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
                  className="absolute z-40"
                  style={{
                    // These styles are overridden by the animate prop for the specific positions
                    // But we keep the absolute positioning relative to the center container
                    top: "50%",
                    left: "50%",
                    marginTop: "-20px", // Half of height
                    marginLeft: "-50px" // Half of width
                  }}
                  onMouseEnter={() => setActiveBackground(item.image)}
                  onMouseLeave={() => setActiveBackground(null)}
                >
                  <Link to={item.path}>
                    <div className="flex flex-col items-center justify-center bg-black/80 border border-green-500/50 text-green-400 px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-green-500/20 hover:text-green-300 transition-colors duration-300 shadow-[0_0_10px_rgba(0,255,0,0.2)] w-[100px]">
                      <item.icon size={24} className="mb-1" />
                      <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OmnitrixDial;