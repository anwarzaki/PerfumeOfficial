import React from "react";

const Hero = () => {
  return (
    <div className="mt-16">
      {/* 15% OFF Banner */}
      <div className="bg-gray-200 flex justify-center items-center w-full h-10">
        <span className="text-md font-bold text-gray-700">
          15% OFF orders with E&O
        </span>
      </div>

      {/* Hero Section */}
      <section className="hero-container relative w-full h-screen mt-5 overflow-hidden mt-[-2px]">
        {/* Background Image */}
        <img
          src="img/perfume01/hero.jpg"
          alt="hero pic"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 md:px-8">
          <h1 className="text-4xl font-bold drop-shadow-lg">
            Scent your style
          </h1>
          <p className="text-lg mt-2 drop-shadow-lg">
            Explore a range of scents that match your style and personality.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
