import React from "react";

const Stats = () => {
  return (
    <div className="container mx-auto py-20 flex">
      <div className="w-1/2">
        <h1 className="hOneHeading mb-5">Trust with confidence</h1>

        <h2 className="text-md sm:text-md md:text-2xl font-semibold">
          Customer-first always
        </h2>
        <p className="textMuted mb-5">
          That&apos;s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
          crores worth of equality investments.
        </p>

        <h2 className="text-md sm:text-md md:text-2xl font-semibold">
          No spam or gimmicks
        </h2>
        <p className="textMuted mb-5">
          No gimmicks, spam, &quot;Gamification&quot;, or annoying push
          notifications. High quality apps that you use at your pace, the way
          you like.
        </p>

        <h2 className="text-md sm:text-md md:text-2xl font-semibold">
          The Zerodha universe
        </h2>
        <p className="textMuted mb-5">
          Not just an app, but a whole ecosystem. Our inverstments in 30+
          fintech startups offer you tailored services specific to your needs.
        </p>

        <h2 className="text-md sm:text-md md:text-2xl font-semibold">
          Do better with money
        </h2>
        <p className="textMuted mb-5">
          With initiatives like Nudge and kill Switch, we don&apos;t just
          facilitate transactions, but actively help you do better with your
          money.
        </p>
      </div>
      <div className="w-1/2">
      <img src="ecosystem.png" alt="Stats" style={{width:"90%"}} className="ml-auto"/>
      </div>
    </div>
  );
};

export default Stats;
