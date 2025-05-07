// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "2rem",
//         padding: "1rem 2rem",
//         backgroundColor: "#0e2e1e",
//         color: "white",
//         boxShadow: "0 2px 10px rgba(0, 255, 0, 0.3)",
//         position: "fixed",
//         top: 0,
//         width: "100%",
//         zIndex: 1000,
//         fontFamily: "Orbitron, sans-serif",
//       }}
//     >
//       <Link to="/" style={linkStyle}>Home</Link>
//       <Link to="/about" style={linkStyle}>About</Link>
//       <Link to="/skills" style={linkStyle}>Skills</Link>
//       <Link to="/projects" style={linkStyle}>Projects</Link>
//       <Link to="/contact" style={linkStyle}>Contact</Link>
//     </nav>
//   );
// };

// const linkStyle = {
//   color: "#00ff88",
//   textDecoration: "none",
//   fontWeight: "bold",
//   fontSize: "1.1rem",
//   transition: "color 0.3s",
// };

// export default Navbar;


// components/Navbar.jsx
import React from "react";
import { NavLink , Link} from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-400 tracking-wide">
          <Link to="/">Omnitrix
</Link>
        </div>
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition duration-300 ${
                    isActive
                      ? "text-green-400 border-b-2 border-green-400"
                      : "text-gray-300 hover:text-green-400"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
