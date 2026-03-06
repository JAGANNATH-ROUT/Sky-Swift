import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Logistics Services", path: "/logistics" },
    { name: "Furnished Apartments", path: "/apartments" },
    { name: "Aviation Consulting", path: "/aviation" },
    { name: "Contact", path: "/contactus" },
  ];

  const navLinkClass = ({ isActive }) =>
    `transition hover:text-sky-400 ${
      isActive ? "text-sky-400 border-b-2 border-sky-400 pb-1" : "text-white"
    }`;

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 h-[80px]">
        <Link to="/" className="flex items-center gap-5">
          <img src={logo} alt="Sky Swift" className="w-[120px]" />
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink to={item.path} className={navLinkClass}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-7 h-[3px] bg-white"></span>
          <span className="w-7 h-[3px] bg-white"></span>
          <span className="w-7 h-[3px] bg-white"></span>
        </button>

      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-[80vw] max-w-[420px]
        backdrop-blur-lg text-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } pt-24`}
      >
        <ul className="px-6 space-y-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-sky-400"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;