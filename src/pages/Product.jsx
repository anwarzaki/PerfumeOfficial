import React from "react";
import Header from "../components/Header";
import PerfumeCard from "../components/PerfumeCard";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div>
      <Header />
      <div className="mt-[64px]">
        <PerfumeCard />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
