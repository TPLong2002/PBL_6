import axios from "axios";
function getChat(token) {
  return axios.get("http://api.shopiec.shop/api/chats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export default getChat;
