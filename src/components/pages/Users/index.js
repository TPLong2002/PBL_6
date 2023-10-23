import { Link } from "react-router-dom";
import { users } from "./users";
function App() {
  return (
    <div>
      <div className="flex items-center justify-center border-2 border-gray-600">
        <input
          type="text"
          placeholder="Tìm..."
          className="w-full p-2 border border-gray-400 rounded mr-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Tìm
        </button>
      </div>
      <div className="flex flex-col">
        {users.map((user, index) => (
          <div className="flex items-center space-x-2 " key={index}>
            <div className="">{user.Name}</div>
            <div>{user.userName}</div>
            <Link
              to={{
                pathname: "/users/history",
                search: `?id=${user.id}`,
              }}
            >
              Lịch sử mua hàng
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
