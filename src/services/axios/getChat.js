import axios from "axios";
function getChats(token) {
  return axios.get("http://api.shopiec.shop/api/chats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
function getChatMess(token, chatId) {
  return axios.get("http://api.shopiec.shop/api/messages/" + chatId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export { getChatMess };
export default getChats;
