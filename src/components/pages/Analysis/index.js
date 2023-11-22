import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { salesData } from "./data.js";
import Chart from "chart.js/auto";

function Analysis() {
  const [data, setData] = useState(salesData.daily);
  return (
    <div>
      <div className="text-2xl font-bold">Sales Dashboard</div>
      <div className="flex space-x-1">
        <button
          className="ml-2 bg-blue-500 text-white px-2 py-2 rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => setData(salesData.daily)}
        >
          Daily
        </button>
        <button
          className="ml-2 bg-blue-500 text-white px-2 py-2 rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => setData(salesData.monthly)}
        >
          Monthly
        </button>
        <button
          className="ml-2 bg-blue-500 text-white px-2 py-2 rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
          onClick={() => setData(salesData.yearly)}
        >
          Yearly
        </button>
      </div>
      <div className="w-full h-[45rem]">
        <Line
          data={{
            labels: data.labels,
            datasets: [
              {
                label: "Expenses",
                data: data.expenses,
                borderColor: "red",
              },
              {
                label: "Revenue",
                data: data.revenue,
                borderColor: "green",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
          }}
        />
      </div>
    </div>
  );
}

export default Analysis;
