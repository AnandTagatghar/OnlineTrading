import { positions } from "../data/data";
import type { positionsType } from "../types/types";

const Positions = () => {
  return (
    <div className="p-5 textPrimary">
      <h1 className="pb-5">Holdings ({positions.length})</h1>

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
    </div>
  );
};

export default Positions;
