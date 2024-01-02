import axios from "axios";

function getAlluser(startDate, endDate, token) {
  const res = axios.post(
    "http://api.shopiec.shop/api/orders/user/statistical",
    { startDate, endDate },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  // console.log(res.then((res) => console.log(res)));
  return res;
}
export default getAlluser;
