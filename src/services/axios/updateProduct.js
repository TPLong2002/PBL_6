import axios from "axios";
function update(id, product, token) {
  axios
    .post(`http://api.shopiec.shop/api/items/update/${id}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
    });
}
export default update;
