'use client';
import { FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-transparent backdrop-blur-md text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">G D P</h3>
            <p className="text-gray-300">Growth Driven Pioneers</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://x.com/GDP_rgpv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://www.instagram.com/rgpv_gdp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/growth-driven-pioneers/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://chat.whatsapp.com/CUZNNWBu3mi8ETVw3EoTpB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          <div className="md:pl-32">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-300">
              Email: <a href="mailto:gdp.rgpv@gmail.com" className="hover:underline">gdp.rgpv@gmail.com</a>
              <br />
              Address: RGPV University Campus
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2025 GDP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
