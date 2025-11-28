import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-400 py-20 text-white">
      <div className="container mx-auto flex justify-between items-center w-[70%] pb-20">
        <h2 className="text-xl">Support Portal</h2>
        <a className="underline" href="">
          Track Tickets
        </a>
      </div>

      <div className="flex gap-4 sm:gap-10 md:gap-15 lg:gap-10 w-[70%] mx-auto">
        <div className="w-1/2">
          <h3 className="text-2xl pb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>

          <p className="p-4 bg-white textMuted text-xs rounded">
            Eg: how do i activate F&O, why is my order getting rejected
          </p>

          <div className="pt-5">
            <a href="" className="underline text-xs">
              Track account opening
            </a>
            &nbsp;&nbsp;
            <a href="" className="underline text-xs">
              Track segament activation
            </a>
            &nbsp;&nbsp;
            <a href="" className="underline text-xs">
              Intraday
            </a>
            &nbsp;&nbsp;
            <a href="" className="underline text-xs">
              margins
            </a>
            &nbsp;&nbsp;
            <a href="" className="underline text-xs">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-2xl pb-4">Featured</h3>

          <ol className="pt-5 list-decimal text-sm">
            <li>
              <a className="underline" href="">Current Trackovers and Delisting - January 2024</a>
            </li>
            <li><a href="" className="underline">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
