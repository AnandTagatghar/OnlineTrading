import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto py-20 text-center border-b border-b-gray-300">
      <h1 className="hOneHeading">Zerodha Products</h1>
      <p className="text-xl py-2 textMuted">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="text-md py-2 textMuted">
        Check out our&nbsp;
        <a className="text-blue-500 hover:text-blue-400" href="">
          investment offerings <i className="fa-solid fa-arrow-right-long"></i>
        </a>
      </p>
    </div>
  );
};

export default Hero;
