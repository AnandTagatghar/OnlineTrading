import { Link } from "react-router";

const Universe = () => {
  return (
    <div className="container mx-auto py-15">
      <h2 className="text-center hOneHeading">The Zerodha Universe</h2>
      <p className="textMuted pt-5 text-center">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="pt-10 grid grid-cols-3 gap-4">
        <div className="py-5">
          <img
            src="zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "70%" }}
            className="mx-auto pb-5"
          />

          <p className="textMuted text-sm text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="py-5">
          <img
            src="sensibullLogo.svg"
            alt="Sensi Bull Logo"
            style={{ width: "70%" }}
            className="mx-auto pb-5"
          />

          <p className="textMuted text-sm text-center">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="py-5">
          <img
            src="tijori.svg"
            alt="Tijori"
            style={{ width: "70%" }}
            className="mx-auto pb-5"
          />

          <p className="textMuted text-sm text-center">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="py-5">
          <img
            src="streak-logo.png"
            alt="Streak Logo"
            style={{ width: "70%" }}
            className="mx-auto pb-5"
          />

          <p className="textMuted text-sm text-center">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="py-5">
          <img
            src="smallcase-logo.png"
            alt="Small Case Logo"
            style={{ width: "70%" }}
            className="mx-auto pb-5"
          />

          <p className="textMuted text-sm text-center">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="py-5">
          <img
            src="dittoLogo.png"
            alt="Ditto Logo"
            style={{ width: "70%" }}
            className="mx-auto pb-5"
          />

          <p className="textMuted text-sm text-center">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
      </div>

      <div className="pt-5 text-center">
        <Link
          to={"/signup"}
          className="p-2 px-5 bg-blue-500 rounded text-white hover:bg-blue-400"
        >
          Sign up for Free
        </Link>
      </div>
    </div>
  );
};

export default Universe;
