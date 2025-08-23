import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "/src/assets/favicon.jpg"; // your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  return (
    <header className="w-full font-family">
      {/* Top bar */}
      <div className="bg-green-800 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-end items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+91 9514222122</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>trinityplussocial@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Nav items */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`relative py-2 hover:text-green-700 ${
                  activePath === item.path ? "text-green-700" : ""
                }`}
                onClick={() => setActivePath(item.path)}
              >
                {item.name}
                {/* Underline */}
                <span
                  className={`absolute left-0 -bottom-0.5 block h-0.5 bg-green-700 transition-all duration-300 ${
                    activePath === item.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t text-center">
            <nav className="flex flex-col gap-4 p-4 font-medium text-gray-700">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={`py-1 hover:text-green-700 ${
                    activePath === item.path ? "text-green-700 font-semibold" : ""
                  }`}
                  onClick={() => {
                    setActivePath(item.path);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
