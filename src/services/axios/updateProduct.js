import axios from "axios";
function update(id, product, token) {
  console.log(product);
  return axios.put(`http://api.shopiec.shop/api/items/update/${id}`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export default update;
