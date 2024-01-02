import React, { useEffect, useState } from "react";
import { SaleDataMonth, SaleDataDay, SaleDataYear } from "./data.js";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { format } from "date-fns";
import "chart.js/auto";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import TopProducts from "./TopProduct.js";

function Analysis() {
  const [selectChart, setSelectChart] = useState(1);
  const [year, setYear] = useState([2021, 2022, 2023]);
  if (!year.includes(Number(new Date().getFullYear()))) {
    setYear([...year, new Date().getFullYear()]);
  }
  const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const DAYS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const [time, setTime] = useState({
    year: Number(format(new Date(), "yyyy")),
    month: Number(format(new Date(), "MM")),
  });

  const [startTime, setStartTime] = useState(new Date("2023-01-01T00:00:00"));
  const [endTime, setEndTime] = useState(new Date("2023-12-31T23:59:59"));

  const [chartMonth, setChartMonth] = useState({
    data: {
      labels: [],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd"],
          data: [],
        },
      ],
    },
    topProducts: [],
    topUsers: [],
    dataOfPayment: {
      labels: [],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd"],
          data: [],
        },
      ],
    },
  });
  const [chartYear, setChartYear] = useState({
    data: {
      labels: [],
      datasets: [
        {
          label: "year",
          backgroundColor: ["#3e95cd"],
          data: [],
        },
      ],
    },
    topProducts: [],
    topUsers: [],
    dataOfPayment: {
      labels: [],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd"],
          data: [],
        },
      ],
    },
  });
  const [chartDay, setChartDay] = useState({
    data: {
      labels: [],
      datasets: [
        {
          label: "DAYS",
          backgroundColor: ["#3e95cd"],
          data: [],
        },
      ],
    },
    topProducts: [],
    topUsers: [],
    dataOfPayment: {
      labels: [],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#3e95cd"],
          data: [],
        },
      ],
    },
  });
  var options = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const datapoints = ctx.chart.data.datasets[0].data;
          const total = datapoints.reduce(
            (total, datapoint) => total + datapoint,
            0
          );
          const percentage = (value / total) * 100;
          return percentage.toFixed(2) + "%";
        },
        color: "#fff",
      },
    },
  };
  useEffect(() => {
    SaleDataMonth(
      format(new Date(`${time.year}-01-01T00:00:00`), "yyyy-MM-dd'T'HH:mm:ss"),
      format(new Date(`${time.year}-12-31T23:59:59`), "yyyy-MM-dd'T'HH:mm:ss"),
      MONTHS
    ).then((res) => {
      setChartMonth(res);
    });

    SaleDataDay(
      format(
        new Date(
          `${time.year}-${
            time.month < 10 ? "0" + time.month : time.month
          }-01T00:00:00`
        ),
        "yyyy-MM-dd'T'HH:mm:ss"
      ),
      format(
        new Date(
          `${time.year}-${
            time.month < 10 ? "0" + time.month : time.month
          }-31T23:59:59`
        ),
        "yyyy-MM-dd'T'HH:mm:ss"
      ),
      DAYS
    ).then((res) => {
      setChartDay(res);
    });
    SaleDataYear(
      format(new Date(`${year[0]}-01-01T00:00:00`), "yyyy-MM-dd'T'HH:mm:ss"),
      format(
        new Date(`${year.slice(-1)}-12-31T23:59:59`),
        "yyyy-MM-dd'T'HH:mm:ss"
      ),
      year
    ).then((res) => {
      setChartYear(res);
    });
  }, [time, year]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: value });
  };
  return (
    <div className=" max-h-[45rem]">
      <div className="text-2xl font-bold">Sales Dashboard</div>
      <div className="flex space-x-1 items-center">
        <div className="w-[9rem] flex items-center space-x-1">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Năm
          </label>
          <select
            name="year"
            id="year"
            value={time.year}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {year.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="w-[9rem] flex items-center space-x-1">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Tháng
          </label>
          <select
            name="month"
            id="month"
            value={time.month}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {MONTHS.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setSelectChart(1)}
          className={`ml-2  text-white px-2 py-2 rounded ${
            selectChart === 1 ? "bg-red-500" : "bg-blue-500"
          } transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300`}
        >
          Năm
        </button>
        <button
          onClick={() => setSelectChart(2)}
          className={`ml-2  text-white px-2 py-2 rounded ${
            selectChart === 2 ? "bg-red-500" : "bg-blue-500"
          } transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300`}
        >
          Tháng
        </button>
        <button
          onClick={() => setSelectChart(3)}
          className={`ml-2  text-white px-2 py-2 rounded ${
            selectChart === 3 ? "bg-red-500" : "bg-blue-500"
          } transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300`}
        >
          Ngày
        </button>
        {/* <div className="w-1/2 ">
          <DateTimePicker value={startTime} onChange={setStartTime} />
          <DateTimePicker value={endTime} onChange={setEndTime} />
          <button className="ml-2 bg-blue-500 text-white px-2 py-2 rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
            Tìm
          </button>
        </div> */}
      </div>

      <div className="h-[38rem] flex flex-col mt-2">
        <div className="flex space-x-2">
          <div className="w-2/3">
            {selectChart === 1 && (
              <Bar
                className="border-2 rounded-md shadow-md"
                data={chartYear.data}
              />
            )}

            {selectChart === 2 && (
              <Bar
                className="border-2 rounded-md shadow-md"
                data={chartMonth.data}
              />
            )}

            {selectChart === 3 && (
              <Bar
                className="border-2 rounded-md shadow-md"
                data={chartDay.data}
              />
            )}
            <div className="flex space-x-3">
              <div className="flex flex-col mt-3 w-1/2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Sản phẩn bán chạy
                </label>
                {selectChart === 1 && chartMonth.topProducts.length > 0 && (
                  <TopProducts
                    products={chartYear.topProducts}
                    url={"/product/editproduct"}
                  />
                )}
                {selectChart === 2 && chartMonth.topProducts.length > 0 && (
                  <TopProducts
                    products={chartMonth.topProducts}
                    url={"/product/editproduct"}
                  />
                )}
                {selectChart === 3 && chartMonth.topProducts.length > 0 && (
                  <TopProducts
                    products={chartDay.topProducts}
                    url={"/product/editproduct"}
                  />
                )}
              </div>
              <div className="flex flex-col mt-3 w-1/2">
                <label className="block text-sm font-medium text-gray-900 dark:text-white">
                  Khách hàng tiềm năng
                </label>
                {selectChart === 1 && chartMonth.topUsers.length > 0 && (
                  <TopProducts
                    products={chartYear.topUsers}
                    url="/users/history"
                  />
                )}
                {selectChart === 2 && chartMonth.topUsers.length > 0 && (
                  <TopProducts products={chartMonth.topUsers} />
                )}
                {selectChart === 3 && chartMonth.topUsers.length > 0 && (
                  <TopProducts products={chartDay.topUsers} />
                )}
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex flex-col w-3/4 h-1/2">
              <label className="block text-sm font-medium text-gray-900 dark:text-white pb-2">
                Khách hàng tiềm năng
              </label>
              {selectChart === 1 && (
                <Doughnut
                  className="border-2 rounded-md shadow-md"
                  data={chartYear.dataOfPayment}
                  options={options}
                  plugins={[ChartDataLabels]}
                />
              )}
            </div>
            <div className="pt-2 flex flex-col w-3/4 h-1/2">
              <label className="block text-sm font-medium text-gray-900 dark:text-white pb-2">
                Khách hàng tiềm năng
              </label>
              {selectChart === 1 && (
                <Doughnut
                  className="border-2 rounded-md shadow-md"
                  data={chartYear.dataOfPayment}
                  options={options}
                  plugins={[ChartDataLabels]}
                />
              )}

              {selectChart === 2 && (
                <Doughnut
                  className="border-2 rounded-md shadow-md"
                  data={chartMonth.dataOfPayment}
                  options={options}
                  plugins={[ChartDataLabels]}
                />
              )}

              {selectChart === 3 && (
                <Doughnut
                  className="border-2 rounded-md shadow-md"
                  data={chartDay.dataOfPayment}
                  options={options}
                  plugins={[ChartDataLabels]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
