import { Link } from "react-router-dom";
import { users } from "./users";
function App() {
  return (
    <div>
      <div className="flex items-center justify-center border-gray-600">
        <input
          type="text"
          placeholder="Tìm..."
          className="w-full p-2 border border-gray-400 rounded mr-2 mb-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
          Tìm
        </button>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-[48.9rem] border border-slate-500">
        <table className=" w-full border-collapse ">
          <thead>
            <tr className="bg-gray-300 text-center">
              <td>Tên</td>
              <td>Tài khoảng</td>
              <td>Địa chỉ</td>
              <td>option</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className=" items-center text-center " key={index}>
                <td className="bg-gray-100 ">{user.Name}</td>
                <td className="bg-gray-100">{user.userName}</td>
                <td className="bg-gray-100">{user.Adress}</td>
                <td className="bg-gray-100">
                  <Link
                    to={{
                      pathname: "/users/history",
                      search: `?id=${user.id}`,
                    }}
                    className="bg-green-300 px-4 py-2 rounded"
                  >
                    Lịch sử mua hàng
                  </Link>
                  <button className="bg-red-500 px-4 py-2 rounded">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
