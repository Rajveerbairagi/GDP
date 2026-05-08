'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img
              src="/Gdp.png"
              alt="GDP"
              style={{ width: "100px", height: "auto", paddingTop: "10px" }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex font-jetbrains space-x-8">
            <a href="#" className="text-vision-blue hover:text-vision-gold">Home</a>
            <a href="#about" className="text-vision-blue hover:text-vision-gold">About</a>
            <a href="#timeline" className="text-vision-blue hover:text-vision-gold">Timeline</a>
            <a href="#keyfeatures" className="text-vision-blue hover:text-vision-gold">Key Features</a>
            <a href="#faqs" className="text-vision-blue hover:text-vision-gold">FAQs</a>
            <a href="#footer" className="text-vision-blue hover:text-vision-gold">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-vision-gold hover:text-vision-blue"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-transparent backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-vision-gold hover:text-vision-blue"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-vision-gold hover:text-vision-blue"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#timeline"
                className="block px-3 py-2 text-vision-gold hover:text-vision-blue"
                onClick={() => setIsOpen(false)}
              >
                Timeline
              </a>
              <a
                href="#keyfeatures"
                className="block px-3 py-2 text-vision-gold hover:text-vision-blue"
                onClick={() => setIsOpen(false)}
              >
                Key Features
              </a>
              <a
                href="#faqs"
                className="block px-3 py-2 text-vision-gold hover:text-vision-blue"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </a>
              <a
                href="#footer"
                className="block px-3 py-2 text-vision-gold hover:text-vision-blue"
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
};

export default Header;