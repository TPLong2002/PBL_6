import axios from "axios";
function addCatalog(catalog, token) {
  return axios.post("http://api.shopiec.shop/api/itemgroups", catalog, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export default addCatalog;
