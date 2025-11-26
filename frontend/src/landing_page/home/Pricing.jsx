import React from "react";

const Pricing = () => {
  return (
    <div className="container mx-auto flex py-20">
      <div className="w-1/2 m-auto">
        <div className="2/3">
          <h1 className="hOneHeading">Unbeatable pricing</h1>
          <p className="textMuted pt-10">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <div className="mt-3">
            <a className=" text-blue-600 active:opacity-90" href="">
              See pricing <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <div className="grid grid-cols-2 p-10">
          <div className="border-1 border-gray-400 text-center p-5">
            <span className="text-3xl">₹0</span>
            <br />
            <span className="pt-3 textMuted block">
              Free equality delivery and direct mutual funds.
            </span>
          </div>

          <div className="border-1 border-gray-400 text-center p-5">
            <span className="text-3xl">₹20</span>
            <br />
            <span className="pt-3 textMuted block">Intraday and F&O.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
