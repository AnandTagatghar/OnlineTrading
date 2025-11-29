import { holdings } from "../data/data";
import type { holdingsType } from "../types/types";

const Holdings = () => {
  return (
    <div className="p-5 textPrimary">
      <h1 className="pb-5">Holdings ({holdings.length})</h1>

      <table className="w-full border-spacing-2">
        <thead className="border-y border-y-gray-200 py-2">
          <tr>
            <th className="py-3">Instrument</th>
            <th>Qty.</th>
            <th>Avg.cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
        </thead>
        <tbody className="text-sm text-center">
          {holdings.map((stock: holdingsType, index) => {
            let currentVal = stock.qty * stock.price;
            let isProfit = currentVal - stock.avg * stock.qty >= 0.0;
            let profitClass = isProfit ? "textGreen" : "textRed";
            let dayClass = stock.day.at(0) == "+" ? "textGreen" : "textRed";

            return (
              <>
                <tr key={index}>
                  <td className="py-2">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currentVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currentVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Holdings;
