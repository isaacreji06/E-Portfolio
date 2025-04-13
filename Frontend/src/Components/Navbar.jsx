// src/components/Navbar.jsx

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600" onClick={()=>{
        }}>
          <Link to="/" className="hover:text-blue-500">Rebecca Reji</Link>
        </div>
        <div className="space-x-4 text-gray-700 text-sm md:text-base hidden md:flex">
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/resume" className="hover:text-blue-500">Resume</Link>
          <Link to="/linkedin" className="hover:text-blue-500">LinkedIn</Link>
          <Link to="/work-values" className="hover:text-blue-500">Work Values</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
