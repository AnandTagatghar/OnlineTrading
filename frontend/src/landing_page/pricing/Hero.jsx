
const Hero = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="text-center pb-10">
        <h1 className="hOneHeading">Pricing</h1>
        <p className="textMuted">List of all charges and taxes</p>
      </div>

      <div className="flex gap-4 sm:gap-10 md:gap-15 justify-center items-start">
        <div className="w-1/3">
          <img
            src="pricing0.svg"
            alt="Pricing Zero"
            className="mx-auto"
            style={{ width: "70%" }}
          />

          <h2 className="hOneHeading text-center pt-5">Free equity delivery</h2>
          <p className="textMuted text-center pt-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="w-1/3">
          <img
            src="intradayTrades.svg"
            alt="Intraday Trades"
            className="mx-auto"
            style={{ width: "70%" }}
          />

          <h2 className="hOneHeading text-center pt-5">
            Intraday and F&O trades
          </h2>
          <p className="textMuted text-center pt-5">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="w-1/3">
          <img
            src="pricingMF.svg"
            alt="Pricing MF"
            className="mx-auto"
            style={{ width: "70%" }}
          />

          <h2 className="hOneHeading text-center pt-5">Free direct MF</h2>
          <p className="textMuted text-center pt-5">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
