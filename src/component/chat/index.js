import { useEffect, useState } from "react";
import avt from "../../img/avt/avt.jpg";
import ChatBox from "./chatBox";

export default function Chat() {
  const users = [
    {
      id: 1,
      avt: avt,
      name: "user01",
      contents: "..",
      lastContent: "xin chào",
    },
    {
      id: 2,
      avt: avt,
      name: "user02",
      contents: "..",
      lastContent: "xin chào",
    },
  ];
  const [userID, setUserID] = useState(1);
  const [chatUser, setChatUser] = useState(
    users.find((user) => user.id === userID)
  );
  useEffect(() => {
    setChatUser(users.find((user) => user.id === userID));
  }, [userID]);

  function handlerClick(id) {
    setUserID(id);
  }

  return (
    <div className="flex h-full">
      <div className="w-1/4">
        <div className="bg-gray-200 p-4 flex-col items-center">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full py-2 px-3 rounded-full border focus:outline-none"
          />
          <h2>Đoạn chat</h2>
          <div>
            <ul className="mt-4 flex flex-col space-y-4">
              {users.map((user) => (
                <li key={user.id} onClick={() => handlerClick(user.id)}>
                  <div className="flex flex-row hover:mt-3 hover:mb-3">
                    <div className="w-1/5">
                      <img
                        src={user.avt}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full"
                      />
                    </div>
                    <div className="w-4/5 flex flex-col">
                      <div className="w-1/2 text-xl font-bold">{user.name}</div>
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
