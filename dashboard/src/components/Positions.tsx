import axios from "axios";
import type { positionsType } from "../types/types";
import { useEffect, useState } from "react";

const Positions = () => {
  const [positions, SetPositions] = useState<positionsType[]>([]);
  const [loading, SetLoading] = useState<boolean>(false);

  async function fetchPositions() {
    SetLoading(true);

    try {
      const response = await axios.get("http://localhost:3000/positions");

      SetPositions(response.data.data);
    } catch (error: any) {
      console.error(error);
    }
    SetLoading(false);
  }

  useEffect(() => {
    fetchPositions();
  }, []);

  return (
    <div className="p-5 textPrimary">
      <h1 className="pb-5">Positions ({positions.length})</h1>

      {!loading && positions.length == 0 && (
        <div className="text-center textPrimary text-2xl">
          No positions to display.
        </div>
      )}

      {loading && (
        <div className="text-center textPrimary text-2xl">Loading...</div>
      )}

      {positions.length > 0 && (
        <table className="w-full table-auto">
          <thead className="border-y border-y-gray-200 py-2">
            <tr>
              <th className="py-3">Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-sm text-center">
            {positions.map((stock: positionsType, index) => {
              let currentVal = stock.qty * stock.price;
              let isProfit = currentVal - stock.avg * stock.qty >= 0.0;
              let profitClass = isProfit ? "textGreen" : "textRed";
              let dayClass = stock.day.at(0) == "+" ? "textGreen" : "textRed";

              return (
                <tr key={index}>
                  <td className="py-2">{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currentVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Positions;
