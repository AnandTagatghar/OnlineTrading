import React from "react";

const Awards = () => {
  return (
    <div className="container mx-auto py-20 flex">
      <div className="w-1/2">
        <img
          src="largestBroker.svg"
          alt="Awards"
          style={{ width: "90%" }}
          className="mr-auto"
        />
      </div>

      <div className="w-1/2 m-auto">
        <h1 className="hOneHeading">Largest stock broker in India.</h1>
        <p className="textMuted mb-5">
          2+ millions zerodha clients contribute to over 15% of all retail order
          volumes in india daily by trading and investing in:
        </p>

        <div className="columns-2 mt-10">
          <ul style={{ listStyleType: "disc" }}>
            <li>Futures and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
          <ul style={{ listStyleType: "disc" }}>
            <li>Stocks & IPO&apos;s</li>
            <li>Direct mutual funds</li>
            <li>Bonds & Govt. Securities</li>
          </ul>
        </div>

        <img
          src="pressLogos.png"
          alt="Press Logo"
          className="mt-5"
          style={{ width: "90%" }}
        />
      </div>
    </div>
  );
};

export default Awards;
