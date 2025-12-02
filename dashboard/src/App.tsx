import { Route, Routes } from "react-router";
import "./App.css";
import TopBar from "./components/TopBar";
import WatchList from "./components/WatchList";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";
import { useBuyContext, useSellContext } from "./Context/Provider";
import BuyStock from "./components/BuyStock";
import SellStock from "./components/SellStock";

function App() {
  const buyContext = useBuyContext();
  const sellContext = useSellContext();

  return (
    <>
      <div
        className={
          (buyContext.itemDetails != null || sellContext.sellItemDetails != null
            ? "opacity-50 "
            : "") + "container mx-auto flex"
        }
      >
        <div className="w-1/3">
          <WatchList />
        </div>
        <div className="w-2/3">
          <TopBar />

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>

      {buyContext.itemDetails != null && (
        <BuyStock itemDetails={buyContext.itemDetails} />
      )}

      {sellContext.sellItemDetails != null && (
        <SellStock itemDetails={sellContext.sellItemDetails} />
      )}
    </>
  );
}

export default App;
