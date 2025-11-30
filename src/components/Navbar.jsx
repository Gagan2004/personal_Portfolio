import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 border-b border-green-500/20 shadow-[0_4px_30px_rgba(0,255,0,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 hover:to-green-300 transition-all duration-300">
            OMNITRIX
          </Link>
        </div>

        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isActive
                    ? "text-green-400"
                    : "text-gray-400 hover:text-green-300"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_10px_#22c55e]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
