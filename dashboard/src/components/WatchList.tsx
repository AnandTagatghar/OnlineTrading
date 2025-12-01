import { useState } from "react";
import { watchlist } from "../data/data";
import type { watchListType } from "../types/types";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Equalizer,
  Delete,
  MoreHoriz,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const WatchList = () => {
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
            <div key={index} className="border-r border-r-gray-200">
              <WatchListItem item={item} index={index} />
            </div>
          );
        })}
    </>
  );
};

export default WatchList;

const WatchListItem = ({
  item,
  index,
}: {
  item: watchListType;
  index: number;
}) => {
  const [isHoverActive, SetISHoverActive] = useState<boolean>(false);

  function handleMouseEnter(id: number) {
    SetISHoverActive(true);
  }

  function handleMouseMoved(id: number) {
    SetISHoverActive(false);
  }

  const textColor =
    Number(item.percent.replace("%", "")) > 0 ? "textGreen" : "textRed";
  return (
    <div
      className="flex justify-around items-center textPrimary borderBottom pt-10 pb-5 text-sm relative"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseMoved(index)}
    >
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

      {isHoverActive && <WatchListHoverItem itemDetails={item} />}
    </div>
  );
};

const WatchListHoverItem = ({
  itemDetails,
}: {
  itemDetails: watchListType;
}) => {
  return (
    <div className="w-full px-5 absolute flex">
      <div className="flex-1"></div>

      <div>
        <Tooltip title="Buy">
          <IconButton>
            <span className="text-sm bg-blue-400 py-1 px-3 rounded text-white font-bold">
              B
            </span>
          </IconButton>
        </Tooltip>

        <Tooltip title="Sell">
          <IconButton>
            <span className="text-sm bg-orange-400 py-1 px-3 rounded text-white font-bold">
              S
            </span>
          </IconButton>
        </Tooltip>

        <Tooltip title="Graph">
          <IconButton>
            <span className=" px-2 text-sm border border-black bg-white rounded font-bold">
              <Equalizer />
            </span>
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete">
          <IconButton>
            <span className=" px-2 text-sm border border-black bg-white rounded font-bold">
              <Delete />
            </span>
          </IconButton>
        </Tooltip>

        <Tooltip title="More">
          <IconButton>
            <span className=" px-2 text-sm border border-black bg-white rounded font-bold">
              <MoreHoriz />
            </span>
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
