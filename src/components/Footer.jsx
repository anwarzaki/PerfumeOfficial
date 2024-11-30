// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white p-8 ">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
//         {/* Shop Links Section */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Shop</h4>
//           <ul className="space-y-2">
//             <li><a href="/men" className="hover:underline">Men's Fragrances</a></li>
//             <li><a href="/women" className="hover:underline">Women's Fragrances</a></li>
//             <li><a href="/unisex" className="hover:underline">Unisex Fragrances</a></li>
//           </ul>
//         </div>

//         {/* Contact Us Section */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Contact Us</h4>
//           <p className="mb-2">Email: <a href="mailto:support@perfumesite.com" className="hover:underline">support@perfumesite.com</a></p>
//           <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
//         </div>

//         {/* Follow Us Section */}
//         <div>
//           <h4 className="text-lg font-bold mb-4">Follow Us</h4>
//           <div className="flex space-x-4">
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//               Instagram
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//               Facebook
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
//               Twitter
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 text-center text-sm text-gray-400">
//         © 2024 Perfume Store. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
        {/* Explore Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Explore</h4>
          <ul className="space-y-2">
            <li>
              <a href="/custom-frames" className="hover:underline">
                Custom Frames
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Contact Us</h4>
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:info@thefantessia.com" className="hover:underline">
              info@thefantessia.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:underline">
              +1 234 567 890
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Facebook
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © 2024 TheFantessia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
