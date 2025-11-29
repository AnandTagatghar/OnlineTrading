const Funds = () => {
  return (
    <div className="p-5 textPrimary">
      <div className="flex items-center">
        <div className="flex-1"></div>
        <div className="py-10 ">
          <p className="inline pr-5 text-xs">
            Instant, zero cost fund transfer with UPI
          </p>
          <button className="bg-blue-500 rounded hover:bg-blue-400 hover:cursor-pointer active:bg-blue-500 text-white px-4 py-2 mr-4">
            Add funds
          </button>
          <button className="bg-blue-500 rounded hover:bg-blue-400 hover:cursor-pointer active:bg-blue-500 text-white px-4 py-2">
            Withdraw
          </button>
        </div>
      </div>

      <h1 className="py-5">Equity.</h1>

      <div className="p-4 border border-gray-200 rounded w-[40%]">
        <table className="w-full">
          <tbody>
            <tr>
              <td>Available margins</td>
              <td>4043.10</td>
            </tr>
            <tr>
              <td>Used margins</td>
              <td>3757.30</td>
            </tr>
            <tr>
              <td>Available cash</td>
              <td>4043.10</td>
            </tr>
          </tbody>
        </table>

        <div className="py-3">
          <hr className="text-gray-200" />
        </div>

        <table className="w-full">
          <tbody>
            <tr>
              <td>Opening balance</td>
              <td>4043.10</td>
            </tr>
            <tr>
              <td>Opening Balance</td>
              <td>3757.30</td>
            </tr>
            <tr>
              <td>Pay In</td>
              <td>4064.60</td>
            </tr>
            <tr>
              <td>SPAN</td>
              <td>00</td>
            </tr>
            <tr>
              <td>Delivery margin</td>
              <td>00</td>
            </tr>
            <tr>
              <td>Exposure</td>
              <td>00</td>
            </tr>
            <tr>
              <td>Options premium</td>
              <td>00</td>
            </tr>
          </tbody>
        </table>

        <div className="py-3">
          <hr className="text-gray-200" />
        </div>

        <table className="w-full">
          <tbody>
            <tr>
              <td>Collateral (Liquid funds)</td>
              <td>00</td>
            </tr>
            <tr>
              <td>Collateral (Equity)</td>
              <td>00</td>
            </tr>
            <tr>
              <td>Total Collateral</td>
              <td>00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funds;
