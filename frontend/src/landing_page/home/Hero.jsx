import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto my-5">
      <img src="homeHero.png" alt="Hero" />

      <div className="mt-5 text-center">
        <h1 className="hOneHeading">
          Invest in everything
        </h1>
        <p className="textMuted mb-5">
          Online platform to invest in stocks, derivatives, mutual funds and
          more.
        </p>
        <button className="blueButton">Signup now</button>
      </div>
    </div>
  );
};

export default Hero;
