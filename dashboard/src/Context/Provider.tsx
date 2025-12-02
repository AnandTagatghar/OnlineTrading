import { createContext, useContext, useState, type ReactNode } from "react";
import type { watchListType } from "../types/types";

interface itemDetailsInterface {
  itemDetails: watchListType | null;
  updateData: (newData: watchListType | null) => void;
}

interface sellItemDetailsInterface {
  sellItemDetails: watchListType | null;
  updateSellData: (newData: watchListType | null) => void;
}

const buyStockContext = createContext<itemDetailsInterface | undefined>(
  undefined
);

const sellStockContext = createContext<sellItemDetailsInterface | undefined>(
  undefined
);

const Provider = ({ children }: { children: ReactNode }) => {
  const [itemDetails, setItemDetails] = useState<watchListType | null>(null);
  const [sellItemDetails, setSellItemDetails] = useState<watchListType | null>(
    null
  );

  function updateData(newData: watchListType | null) {
    setItemDetails(newData);
  }

  function updateSellData(newData: watchListType | null) {
    setSellItemDetails(newData);
  }

  return (
    <>
      <buyStockContext.Provider value={{ itemDetails, updateData }}>
        <sellStockContext.Provider value={{ sellItemDetails, updateSellData }}>
          {children}
        </sellStockContext.Provider>
      </buyStockContext.Provider>
    </>
  );
};

export default Provider;

export const useBuyContext = (): itemDetailsInterface => {
  const context = useContext(buyStockContext);

  if (!context)
    throw new Error("useBuyContext must be used within a DataProvider");

  return context;
};

export const useSellContext = (): sellItemDetailsInterface => {
  const context = useContext(sellStockContext);

  if (!context) {
    throw new Error("useSellContext must be used within a DataProvider");
  }

  return context;
};
