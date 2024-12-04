import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="mt-[64px]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#FDF2F8] to-[#FFE4E6] py-24 lg:py-36 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/3 w-64 h-64 bg-[#DB7093] opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C71585] opacity-10 rounded-full filter blur-3xl animate-ping"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#C71585] transition-transform duration-500 hover:scale-105">
              Let's Connect
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions about our exquisite perfumes? Reach out to us, and
              we'll make your experience unforgettable.
            </p>
            <div className="mt-8">
              <a
                href="#contact-form"
                className="bg-[#C71585] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#E75480] transition-transform duration-300 transform hover:scale-110"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              id="contact-form"
              className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Reach Out to Us
              </h2>
              <form className="space-y-6">
                <div className="relative group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 transition-transform duration-300 group-hover:text-[#C71585]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:ring-[#DB7093] focus:border-[#DB7093] sm:text-sm transition-all duration-300 hover:shadow-md"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="relative group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 transition-transform duration-300 group-hover:text-[#C71585]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md h-10 border border-gray-300 shadow-sm focus:ring-[#DB7093] focus:border-[#DB7093] sm:text-sm transition-all duration-300 hover:shadow-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="relative group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 transition-transform duration-300 group-hover:text-[#C71585]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:ring-[#DB7093] focus:border-[#DB7093] sm:text-sm transition-all duration-300 hover:shadow-md"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C71585] text-white py-3 rounded-lg shadow-lg hover:bg-[#E75480] transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-semibold text-gray-800 transition-transform duration-300 hover:text-[#C71585]">
                  Contact Information
                </h2>
                <p className="text-gray-600 mt-4">
                  Feel free to reach out to us for any inquiries or assistance:
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <i className="fas fa-envelope text-[#C71585] text-2xl animate-bounce"></i>
                  <span className="text-gray-700">support@essencia.com</span>
                </div>
                <div className="flex items-center gap-6">
                  <i className="fas fa-phone-alt text-[#C71585] text-2xl animate-bounce"></i>
                  <span className="text-gray-700">+1-800-555-1234</span>
                </div>
                <div className="flex items-center gap-6">
                  <i className="fas fa-map-marker-alt text-[#C71585] text-2xl animate-bounce"></i>
                  <span className="text-gray-700">
                    123 Scented Lane, Fragrance City
                  </span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-medium text-gray-800">
                  Operating Hours
                </h3>
                <p className="text-gray-600">Mon-Fri: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
