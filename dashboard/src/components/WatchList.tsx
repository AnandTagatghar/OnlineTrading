import { watchlist } from "../data/data";
import type { watchListType } from "../types/types";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const WatchList = () => {
  function handleMouseEnter(id: number) {
    console.log("mouse entered: " + id);
  }

  function handleMouseMoved(id: number) {
    console.log("mouse moved: " + id);
  }
  return (
    <>
      <div className="flex justify-around items-center  textPrimary borderBottom text-sm">
        <div className="py-10">
          <a href="">NIFTY 50</a>&nbsp;&nbsp;
          <a href="">100.2</a>
        </div>
        <div className="py-10">
          <a href="">SENSEX</a>&nbsp;&nbsp;
          <a href="">100.2</a>
        </div>
      </div>

      <div className="py-2 flex items-center justify-around text-sm textPrimary borderBottom border-r border-r-gray-200">
        <p>Search eg: infy, bse, nifty fut weekly, glod mcx</p>
        <p>{watchlist.length}/50</p>
      </div>

      {watchlist.length > 0 &&
        watchlist.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseMoved(index)}
              className="border-r border-r-gray-200"
            >
              <WatchListItem item={item} />
            </div>
          );
        })}
    </>
  );
};

export default WatchList;

const WatchListItem = ({ item }: { item: watchListType }) => {
  const textColor =
    Number(item.percent.replace("%", "")) > 0 ? "textGreen" : "textRed";
  return (
    <div className="flex justify-around items-center textPrimary borderBottom pt-10 pb-5 text-sm">
      <p className={textColor}>{item.name}</p>
      <p>
        <span>{item.percent}</span>
        <span className={textColor}>
          {textColor == "textGreen" ? (
            <>
              <KeyboardArrowUp />
            </>
          ) : (
            <KeyboardArrowDown />
          )}
        </span>
        <span>{item.price}</span>
      </p>
    </div>
  );
};
