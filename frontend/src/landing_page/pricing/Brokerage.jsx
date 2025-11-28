import React from "react";

const Brokerage = () => {
  return (
    <div className="container mx-auto py-10 flex gap-4 sm:gap-10 md:gap-15">
      <div className="w-2/3">
        <h3 className="text-center text-blue-500 text-md py-5">
          <a href="">Brokerage calculator</a>
        </h3>

        <ul className="list-disc">
          <li>
            Call & Trade and RMS auto squareoff: Additional charges of ₹50 + GST
            per order.
          </li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical copies of contract notes, if required, shall be charged ₹20
            per contract note. Courier charges apply.
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
            equity (whichever is lower).
          </li>
          <li>
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
            (whichever is lower).{" "}
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>

      <div className="w-1/3">
        <h3 className="text-center text-blue-500 text-md py-5">
          <a href="">List of charges</a>
        </h3>
      </div>
    </div>
  );
};

export default Brokerage;
