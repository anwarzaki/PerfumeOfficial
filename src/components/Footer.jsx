import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {/* Explore Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Explore</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="/custom-frames"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Custom Frames
              </a>
            </li>
            <li>
              <a
                href="/gallery"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p className="mb-3">
            Email:{" "}
            <a
              href="mailto:info@thefantessia.com"
              className="hover:underline text-[#B76E79]"
            >
              info@essencia.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="hover:underline text-[#B76E79]"
            >
              +1 234 567 890
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-5">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-200"
              aria-label="Pinterest"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Essencia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
