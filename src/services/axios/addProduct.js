import axios from "axios";

function addProduct(product, token) {
  console.log(product, token);
  axios
    .post("http://api.shopiec.shop/api/items", product, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    });
}
export default addProduct;
