import { useEffect, useState } from "react";
import ChatBox from "./chatBox";
import getChat from "../../../services/axios/getChat";

export default function Chat() {
  const [userID, setUserID] = useState(1);
  const [chatUser, setChatUser] = useState([]);
  useEffect(() => {
    getChat(localStorage.getItem("token")).then((res) => {
      setChatUser(res.data);
    });
  }, [userID]);
  function handlerClick(id) {
    setUserID(id);
  }

  return (
    <div className="flex h-full">
      <div className="w-1/4 h-full">
        <div className="bg-gray-200 p-4 flex-col items-center h-full ">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full py-2 px-3 rounded-full border focus:outline-none hover:-translate-y-1 hover:scale-105 duration-300"
          />
          <h2>Đoạn chat</h2>
          <div className="overflow-y-auto scrollbar-hide h-[45.9rem]">
            <ul className="mt-2 flex flex-col space-y-2">
              {chatUser.map((user) => (
                <li key={user.id} onClick={() => handlerClick(user.id)}>
                  <div className="flex flex-row hover:cursor-pointer border-gray-300 p-1 bg-white rounded shadow-md">
                    <div className="w-1/5">
                      <img
                        src={user.participant.image}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div className="w-4/5 flex flex-col">
                      <div className="w-1/2 text-xl font-bold">
                        {user.participant.firstName} {user.participant.lastName}
                      </div>
                      <div className="w-1/2 pt-2">{user.lastContent}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <ChatBox chatUser={chatUser} />
      </div>
    </div>
  );
}
