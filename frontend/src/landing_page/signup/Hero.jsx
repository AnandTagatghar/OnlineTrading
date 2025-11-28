import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="hOneHeading text-center">
        Open a free demat and trading account online
      </h1>
      <p className="textMuted text-center pt-5">
        Start investing brokerage free and join a community of 1.6+ crore
        investors and traders
      </p>

      <div className="flex py-15 gap-5 sm:gap-10 md:gap-15 lg:gap-20">
        <div className="w-1/2">
          <img src="account_open.svg" alt="Account Open" className="w-[90%]" />
        </div>

        <div className="w-1/2">
          <h1 className="hOneHeading">Signup now</h1>
          <p className="textMuted text-md pt-2">
            Or track your existing application
          </p>

          <div className="py-5 flex">
            <div className="w-[20%] border p-2 border-gray-400">
              <img
                className="inline w-[60%] rounded-full"
                src="IndiaFlag.webp"
                alt="India Flag"
              />
              +91
            </div>
            <input
              type="text"
              className="w-[60%] outline-none border border-gray-400 px-5"
              placeholder="Enter Your Phone Number"
            />
          </div>

          <button className="py-4 bg-blue-500 w-[50%] rounded text-white">
            Get OTP
          </button>

          <p className="py-5 border-b border-b-gray-300 textMuted text-xs">
            By proceeding, you agree to the Zerodha{" "}
            <a className="text-blue-500 hover:underline" href="">
              terms
            </a>{" "}
            &{" "}
            <a className="text-blue-500 hover:underline" href="">
              privacy policy
            </a>{" "}
          </p>

          <p className="py-5 textMuted text-xs">
            Looking to open NRI account?{" "}
            <a className="text-blue-500 hover:underline" href="">
              {" "}
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
