import React from "react";

const InvestmentOptions = () => {
  return (
    <div className="container mx-auto">
      <h1 className="hOneHeading text-center pb-10">
        Investment options with Zerodha demat account
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10 md:gap-15 lg:gap-20">
        <div className="flex justify-center">
          <div className="w-[35%]">
            <img src="stocks-acop.svg" alt="Stocks" />
          </div>

          <div className="w-[65%]">
            <h2 className="text-md sm:text-xl ">Stocks</h2>
            <p className="text-sm sm:text-md textMuted">
              Invest in all exchange-listed securities
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[35%]">
            <img src="mf-acop.svg" alt="Stocks" />
          </div>

          <div className="w-[65%]">
            <h2 className="text-md sm:text-xl ">Mutual funds</h2>
            <p className="text-sm sm:text-md textMuted">
              Invest in commission-free direct mutual funds
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[35%]">
            <img src="ipo-acop.svg" alt="Stocks" />
          </div>

          <div className="w-[65%]">
            <h2 className="text-md sm:text-xl ">IPO</h2>
            <p className="text-sm sm:text-md textMuted">
              Apply to the latest IPOs instantly via UPI
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-[35%]">
            <img src="fo-acop.svg" alt="Stocks" />
          </div>

          <div className="w-[65%]">
            <h2 className="text-md sm:text-xl ">Funds & Options</h2>
            <p className="text-sm sm:text-md textMuted">
              Hedge and mitigate market risk through simplified F&O trading
            </p>
          </div>
        </div>
      </div>

      <div className="py-15 text-center">
        <button className="bg-blue-500 text-white rounded p-2 px-5">
          Explore Investments
        </button>
      </div>
    </div>
  );
};

export default InvestmentOptions;
