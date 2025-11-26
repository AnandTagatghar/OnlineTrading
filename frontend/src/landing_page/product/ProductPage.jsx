import NavBar from "../NavBar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Footer from "../Footer";
import { v4 as uuid } from "uuid";
import Universe from "./Universe";

const leftRightSection = [
  {
    title: "Kite",
    description:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
    descriptionLinks: ["Try demo", "Learn more"],
    imageLink: "kite.png",
  },
  {
    title: "Console",
    description:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
    descriptionLinks: ["Learn more"],
    imageLink: "console.png",
  },
  {
    title: "Coin",
    description:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
    descriptionLinks: ["Coin"],
    imageLink: "coin.png",
  },
  {
    title: "Kite Connect API",
    description:
      "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    descriptionLinks: ["Kite Connect"],
    imageLink: "kiteconnect.png",
  },
  {
    title: "Versity Mobile",
    description:
      "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
    descriptionLinks: [],
    imageLink: "varsity.png",
  },
];

const ProductPage = () => {
  return (
    <>
      <NavBar />
      <Hero />

      {leftRightSection.map((item, index) => {
        if (index % 2 == 0) {
          return <LeftSection data={item} key={uuid()} />;
        } else {
          return <RightSection data={item} key={uuid()} />;
        }
      })}

      <Universe/>
      <Footer />
    </>
  );
};

export default ProductPage;
