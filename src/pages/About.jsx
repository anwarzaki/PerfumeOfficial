import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="mt-[64px]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#FCECDD] to-[#DABFFF] py-24 lg:py-40 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="img/perfume01/perfume-pic.jpg"
              alt="Photo Frames"
              className="w-full h-full object-cover opacity-25"
            />
          </div>

          <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-[#7B506F] mb-6">
                About FrameCraft
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Welcome to <span className="font-semibold">FrameCraft</span>,
                where every memory finds its perfect home. Our handcrafted
                frames are designed to preserve your cherished moments with
                elegance and style.
              </p>
              <div className="mt-6">
                <a
                  href="#explore"
                  className="bg-[#5C3D5E] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#876C88] transition-all duration-300"
                >
                  Discover Our Frames
                </a>
              </div>
            </div>

            {/* Story Section */}
            <div className="mt-16 text-gray-800">
              <h2 className="text-3xl font-semibold text-center mb-8">
                Our Story
              </h2>
              <p className="max-w-3xl mx-auto text-center text-lg">
                At FrameCraft, we believe every photograph deserves a frame that
                complements its story. With a blend of tradition and innovation,
                we craft frames that bring your memories to life and add a touch
                of artistry to your spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <div className="flex flex-wrap justify-center gap-12 text-center">
              <div>
                <h3 className="text-4xl font-bold text-[#7B506F]">15+</h3>
                <p className="text-gray-600 mt-2">Years of Craftsmanship</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#7B506F]">500K+</h3>
                <p className="text-gray-600 mt-2">Frames Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-[#7B506F]">100%</h3>
                <p className="text-gray-600 mt-2">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#F7E6FF] py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20">
            <h2 className="text-3xl font-semibold text-center text-[#7B506F] mb-8">
              What Our Customers Say
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="max-w-md bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "FrameCraft transformed my photographs into art pieces! Each
                  frame is beautifully crafted and adds warmth to my home."
                </p>
                <h4 className="mt-4 font-semibold text-[#7B506F]">
                  — Emily R.
                </h4>
              </div>
              <div className="max-w-md bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "I loved the customization options! The frames are not just
                  decor; they’re a reflection of my most cherished memories."
                </p>
                <h4 className="mt-4 font-semibold text-[#7B506F]">— Alex P.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
