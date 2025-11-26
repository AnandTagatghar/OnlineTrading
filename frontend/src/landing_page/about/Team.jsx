import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-center font-semibold md:text-3xl sm:text-2xl text-xl pb-10">
        People
      </h1>

      <div className="flex">
        <div className="w-1/3 p-10">
          <img
            src="nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-full"
          />
          <p className="text-center pt-5">Nithin Kamath</p>
          <p className="text-center text-sm textMuted">Founder, CEO</p>
        </div>

        <div className="w-2/3 pl-15 lg:pr-10 py-10">
          <p className="textMuted">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br />
            <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br />
            <br />
            Playing basketball is his zen.
            <br />
            <br />
            Connect on{" "}
            <a className="text-blue-500 hover:text-blue-400" href="">
              Homepage
            </a>{" "}
            /{" "}
            <a className="text-blue-500 hover:text-blue-400" href="">
              TradingQnA
            </a>{" "}
            /
            <a className="text-blue-500 hover:text-blue-400" href="">
              Twitter
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        <div className="teamItemDiv">
          <img src="Nikhil.jpg" alt="Nikhil" className="rounded-full" />
          <p className="text-center pt-5">Nikhil Kamath</p>
          <p className="text-center text-sm textMuted">Co - Founder, CFO</p>
        </div>

        <div className="teamItemDiv">
          <img src="Kailash.jpg" alt="Kailash" className="rounded-full" />
          <p className="text-center pt-5">Dr. Kailash Nadh</p>
          <p className="text-center text-sm textMuted">CTO</p>
        </div>

        <div className="teamItemDiv">
          <img src="Venu.jpg" alt="Venu" className="rounded-full" />
          <p className="text-center pt-5">Venu Madhav</p>
          <p className="text-center text-sm textMuted">COO</p>
        </div>

        <div className="teamItemDiv">
          <img src="Hanan.jpg" alt="Hanan" className="rounded-full" />
          <p className="text-center pt-5">Hanan Delvi</p>
          <p className="text-center text-sm textMuted">CCO</p>
        </div>

        <div className="teamItemDiv">
          <img src="Seema.jpg" alt="Seema" className="rounded-full" />
          <p className="text-center pt-5">Seema Patil</p>
          <p className="text-center text-sm textMuted">Director</p>
        </div>

        <div className="teamItemDiv">
          <img src="karthik.jpg" alt="Karthik" className="rounded-full" />
          <p className="text-center pt-5">Karthik Rangappa</p>
          <p className="text-center text-sm textMuted">Cheif of Education</p>
        </div>

        <div className="teamItemDiv">
          <img src="Austin.jpg" alt="Austin" className="rounded-full" />
          <p className="text-center pt-5">Austin Prakesh</p>
          <p className="text-center text-sm textMuted">Director Strategy</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
