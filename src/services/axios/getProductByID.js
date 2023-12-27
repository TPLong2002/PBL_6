import axios from "axios";
function getProductById(id) {
  return axios.get(`http://api.shopiec.shop/api/items/item/${id}`);
}
export default getProductById;
