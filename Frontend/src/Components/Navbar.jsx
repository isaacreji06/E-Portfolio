// src/components/Navbar.jsx

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white" onClick={()=>{
        }}>
          <Link to="/" className="hover:text-white">Rebecca Reji</Link>
        </div>
        <div className="space-x-4 text-white text-sm md:text-base hidden md:flex">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/resume" className="hover:text-white">Resume</Link>
          <Link to="/linkedin" className="hover:text-white">LinkedIn</Link>
          <Link to="/work-values" className="hover:text-white ">Work Values</Link>
          <Link to="/contact" className="hover:text-white text-decoration-line: underline;">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
