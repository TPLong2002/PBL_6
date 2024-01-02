import revenue from "../../../services/axios/revenue";
import { format } from "date-fns";

function count(products) {
  const countProduct = [];
  products.forEach((item) => {
    if (countProduct.length === 0) {
      countProduct.push({
        id: item.id,
        name: item.name,
        count: 1,
      });
    } else {
      var check = false;
      countProduct.forEach((element) => {
        if (element.id === item.id) {
          element.count++;
          check = true;
        }
      });
      if (!check) {
        countProduct.push({
          id: item.id,
          name: item.name,
          count: 1,
        });
      }
    }
  });
  return countProduct;
}
function countUser(users) {
  const countUsers = [];
  users.forEach((item) => {
    if (countUsers.length === 0) {
      countUsers.push({
        id: item.customerId,
        name: item.name,
        count: 1,
      });
    } else {
      var check = false;
      countUsers.forEach((element) => {
        if (element.id === item.customerId) {
          element.count++;
          check = true;
        }
      });
      if (!check) {
        countUsers.push({
          id: item.customerId,
          name: item.name,
          count: 1,
        });
      }
    }
  });
  return countUsers;
}
function countPayment(products) {
  const countProduct = [];
  products.forEach((item) => {
    if (countProduct.length === 0) {
      countProduct.push({
        paymentMethodId: item.paymentMethodId,
        count: item.totalFee,
      });
    } else {
      var check = false;
      countProduct.forEach((element) => {
        if (element.paymentMethodId === item.paymentMethodId) {
          element.count += item.totalFee;
          check = true;
        }
      });
      if (!check) {
        countProduct.push({
          paymentMethodId: item.paymentMethodId,
          count: item.totalFee,
        });
      }
    }
  });
  return countProduct;
}
const Payment = [
  { id: 1, name: "Thanh toán khi nhận hàng" },
  { id: 2, name: "Thanh toán qua Paypal" },
  { id: 3, name: "Thanh toán qua ví điện tử VNPay" },
];
export async function SaleDataMonth(startTime, endTime) {
  const res = await revenue(startTime, endTime, localStorage.getItem("token"));
  // xử lý dữ liệu
  const topProduct = [];
  const topUser = [];
  const totalOfPayment = [];
  const MONTHS = [
    { id: 1, name: "Tháng 1" },
    { id: 2, name: "Tháng 2" },
    { id: 3, name: "Tháng 3" },
    { id: 4, name: "Tháng 4" },
    { id: 5, name: "Tháng 5" },
    { id: 6, name: "Tháng 6" },
    { id: 7, name: "Tháng 7" },
    { id: 8, name: "Tháng 8" },
    { id: 9, name: "Tháng 9" },
    { id: 10, name: "Tháng 10" },
    { id: 11, name: "Tháng 11" },
    { id: 12, name: "Tháng 12" },
  ];
  const salesMonth = [];
  const revenueMonth = [];

  var dataOfSaleMonth = 0;
  var dataOfRevenueMonth = 0;
  MONTHS.forEach((element) => {
    dataOfSaleMonth = 0;
    dataOfRevenueMonth = 0;
    res.data.forEach((item) => {
      if (element.id === Number(format(new Date(item.createAt), "MM"))) {
        if (item.orderDetails[0].itemDetailDto.itemDto.sellPrice) {
          topProduct.push({
            id: item.orderDetails[0].itemDetailDto.itemDto.id,
            name: item.orderDetails[0].itemDetailDto.itemDto.name,
          });
          topUser.push(item);
          totalOfPayment.push(item);
          dataOfRevenueMonth +=
            item.orderDetails[0].itemDetailDto.itemDto.sellPrice -
            item.orderDetails[0].itemDetailDto.itemDto.buyPrice;
          dataOfSaleMonth +=
            item.orderDetails[0].itemDetailDto.itemDto.sellPrice;
        }
      }
    });
    salesMonth.push(dataOfSaleMonth);
    revenueMonth.push(dataOfRevenueMonth);
  });
  const feeOfPayment = countPayment(totalOfPayment)
    .sort((a, b) => a.paymentMethodId - b.paymentMethodId)
    .map((item) => item);

  feeOfPayment.forEach((item) => {
    Payment.forEach((element) => {
      if (item.paymentMethodId === element.id) {
        item.name = element.name;
      }
    });
  });
  console.log("fee", feeOfPayment);
  return {
    data: {
      labels: MONTHS.map((item) => item.name),
      datasets: [
        { label: "Sales", data: salesMonth, backgroundColor: ["#3e95cd"] },
        { label: "Revenue", data: revenueMonth, backgroundColor: ["Green"] },
      ],
    },
    topProducts: count(topProduct).sort((a, b) => b.count - a.count),
    topUsers: countUser(topUser).sort((a, b) => b.count - a.count),
    dataOfPayment: {
      labels: feeOfPayment.map((item) => item.name),
      datasets: [
        {
          label: "Doanh thu",
          data: feeOfPayment.map((item) => item.count),
          backgroundColor: ["Green", "#3e95cd", "red"],
        },
      ],
    },
  };
}
export async function SaleDataDay(startTime, endTime, DAYS) {
  const res = await revenue(startTime, endTime, localStorage.getItem("token"));
  const topProduct = [];
  const topUser = [];
  const totalOfPayment = [];
  // const DAYS = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  // ];
  const salesDay = [];
  const revenueDay = [];
  var dataOfRevenueDay = 0;
  var dataOfSalesDay = 0;
  DAYS.forEach((element) => {
    dataOfSalesDay = 0;
    dataOfRevenueDay = 0;
    res.data.forEach((item) => {
      if (element === Number(format(new Date(item.createAt), "dd"))) {
        if (item.orderDetails[0].itemDetailDto.itemDto.sellPrice) {
          topProduct.push({
            id: item.orderDetails[0].itemDetailDto.itemDto.id,
            name: item.orderDetails[0].itemDetailDto.itemDto.name,
          });
          topUser.push(item);
          totalOfPayment.push(item);
          dataOfRevenueDay +=
            item.orderDetails[0].itemDetailDto.itemDto.sellPrice -
            item.orderDetails[0].itemDetailDto.itemDto.buyPrice;
          dataOfSalesDay +=
            item.orderDetails[0].itemDetailDto.itemDto.sellPrice;
        }
      }
    });
    salesDay.push(dataOfSalesDay);
    revenueDay.push(dataOfRevenueDay);
  });
  const feeOfPayment = countPayment(totalOfPayment)
    .sort((a, b) => a.paymentMethodId - b.paymentMethodId)
    .map((item) => item);

  feeOfPayment.forEach((item) => {
    Payment.forEach((element) => {
      if (item.paymentMethodId === element.id) {
        item.name = element.name;
      }
    });
  });
  return {
    data: {
      labels: DAYS.map((item) => item),
      datasets: [
        { label: "Sales", data: salesDay, backgroundColor: ["#3e95cd"] },
        { label: "Revenue", data: revenueDay, backgroundColor: ["Green"] },
      ],
    },
    topProducts: count(topProduct).sort((a, b) => b.count - a.count),
    topUsers: countUser(topUser).sort((a, b) => b.count - a.count),
    dataOfPayment: {
      labels: feeOfPayment.map((item) => item.name),
      datasets: [
        {
          label: "Doanh thu",
          data: feeOfPayment.map((item) => item.count),
          backgroundColor: ["Green", "#3e95cd", "red"],
        },
      ],
    },
  };
}
export async function SaleDataYear(startTime, endTime, YEARS) {
  const res = await revenue(startTime, endTime, localStorage.getItem("token"));
  const topProduct = [];
  const topUser = [];
  const totalOfPayment = [];

  const revenueYear = [];
  var dataOfRevenueYear = 0;
  const salesYear = [];
  var dataOfSalesYear = 0;
  YEARS.forEach((element) => {
    dataOfSalesYear = 0;
    dataOfRevenueYear = 0;
    res.data.forEach((item) => {
      if (element === Number(format(new Date(item.createAt), "yyyy"))) {
        if (item.orderDetails[0].itemDetailDto.itemDto.sellPrice) {
          topProduct.push({
            id: item.orderDetails[0].itemDetailDto.itemDto.id,
            name: item.orderDetails[0].itemDetailDto.itemDto.name,
          });
          topUser.push(item);
          totalOfPayment.push(item);
          dataOfRevenueYear +=
            item.orderDetails[0].itemDetailDto.itemDto.sellPrice -
            item.orderDetails[0].itemDetailDto.itemDto.buyPrice;
          dataOfSalesYear +=
            item.orderDetails[0].itemDetailDto.itemDto.sellPrice;
        }
      }
    });
    salesYear.push(dataOfSalesYear);
    revenueYear.push(dataOfRevenueYear);
  });
  const feeOfPayment = countPayment(totalOfPayment)
    .sort((a, b) => a.paymentMethodId - b.paymentMethodId)
    .map((item) => item);

  feeOfPayment.forEach((item) => {
    Payment.forEach((element) => {
      if (item.paymentMethodId === element.id) {
        item.name = element.name;
      }
    });
  });
  return {
    data: {
      labels: YEARS.map((item) => item),
      datasets: [
        { label: "Sales", data: salesYear, backgroundColor: ["#3e95cd"] },
        { label: "Revenue", data: revenueYear, backgroundColor: ["Green"] },
      ],
    },
    topProducts: count(topProduct).sort((a, b) => b.count - a.count),
    topUsers: countUser(topUser).sort((a, b) => b.count - a.count),
    dataOfPayment: {
      labels: feeOfPayment.map((item) => item.name),
      datasets: [
        {
          label: "Doanh thu",
          data: feeOfPayment.map((item) => item.count),
          backgroundColor: ["Green", "#3e95cd", "red"],
        },
      ],
    },
  };
}
