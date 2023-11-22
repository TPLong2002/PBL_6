import axios from "axios";

const request = axios.create({
  baseURL: "https://api.shopiec.shop/api",
});
export default request;
