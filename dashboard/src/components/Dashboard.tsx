import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="borderBottom pt-15 pb-5 textPrimary">
        <h1 className="pl-5">Hi, User!</h1>
      </div>

      <div className="borderBottom py-15 textPrimary">
        <h1 className="pl-5">Equity</h1>

        <div className="pt-10 flex w-[60%]">
          <div className="w-1/2 pl-10 border-r border-r-gray-200">
            <h1 className="text-xl ">3.74k</h1>
            <p className="text-xs">Margin available</p>
          </div>
          <div className="w-1/2 pl-10 text-xs">
            <p>Margins used 0</p>
            <p>Opening balance 3.74k</p>
          </div>
        </div>
      </div>

      <div className="borderBottom py-15 textPrimary">
        <h1 className="pl-5">Holdings(13)</h1>

        <div className="pt-10 flex w-[60%]">
          <div className="w-1/2 pl-10 border-r border-r-gray-200">
            <h1 className="text-xl textGreen">
              1.55k <sub className="text-[0.5rem]">+5.20%</sub>
            </h1>
            <p className="text-xs">P&L</p>
          </div>
          <div className="w-1/2 pl-10 text-xs">
            <p>Current Value 31.43k</p>
            <p>Investment 29.88k</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
