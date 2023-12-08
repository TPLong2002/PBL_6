import axios from "axios";

function getAlluser(token) {
  return axios.get("http://api.shopiec.shop/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}
export default getAlluser;
