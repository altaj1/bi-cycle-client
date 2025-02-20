import React, { useState } from "react";

const salesData = [
  { month: "Jan", sales: 4000, profit: 2400 },
  { month: "Feb", sales: 3000, profit: 2210 },
  { month: "Mar", sales: 5000, profit: 2290 },
  { month: "Apr", sales: 4780, profit: 2000 },
  { month: "May", sales: 5890, profit: 2181 },
  { month: "Jun", sales: 4390, profit: 2500 },
];

const SellAnalysisPage = () => {
  const [timeFrame, setTimeFrame] = useState("monthly");

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Sales Analysis</h1>

      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            timeFrame === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTimeFrame("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded ${
            timeFrame === "yearly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTimeFrame("yearly")}
        >
          Yearly
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Month</th>
                <th className="border border-gray-300 px-4 py-2">Sales</th>
                <th className="border border-gray-300 px-4 py-2">Profit</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {item.month}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${item.sales}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${item.profit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold">$35,000</p>
        </div>

        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Profit</h2>
          <p className="text-2xl font-bold">$12,000</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Average Sales</h2>
          <p className="text-2xl font-bold">$5,800</p>
        </div>
      </div>
    </div>
  );
};

export default SellAnalysisPage;
