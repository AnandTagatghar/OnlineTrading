import React from "react";

const Education = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 pb-20">
      <img src="education.svg" alt="Education" style={{ width: "90%" }} />

      <div className="m-auto">
        <h1 className="hOneHeading">Free and open market education</h1>
        <p className="mt-4 textMuted">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <div className="my-3">
          <a className=" text-blue-600 active:opacity-90" href="">
            Versity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <p className="mt-4 textMuted">
          Trading Q&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <div className="mt-3">
          <a className=" text-blue-600 active:opacity-90" href="">
            Trading Q&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
