import React from "react";

const Orders = () => {
  return (
    <div className="p-5 textPrimary text-center">
      <div className="py-10">
        <p>You haven't placed any orders today.</p>

        <button className="bg-blue-600 hover:bg-blue-500 rounded px-10 text-white py-2 hover:cursor-pointer mt-5 active:bg-blue-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Orders;
