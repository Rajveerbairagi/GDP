'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
          <img
  src="/Gdp.png"
  alt="GDP"
  style={{ width: "100px", height: "auto",
    paddingTop:"10px"
   }}
/>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary">About</a>
            <a href="#what-we-do" className="text-gray-700 hover:text-primary">What We Do</a>
            <a href="#visioncraft" className="text-gray-700 hover:text-primary">Vision Craft</a>
            <a href="#codestruct" className="text-gray-700 hover:text-primary">Code Struct</a>
            <a href="#inkspace" className="text-gray-700 hover:text-primary">InkSpace</a>
            <a href="#footer" className="text-gray-700 hover:text-primary">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a href="#what-we-do"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </a>
              <a href="#visioncraft"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Vision Craft
              </a>
              <a href="#inkspace"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                InkSpace
              </a>
              <a
                href="#footer"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
