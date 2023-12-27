import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getAlluser from "../../../services/axios/getAlluser";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "huy",
      lastName: "nguyen",
      dateOfBirth: "2023-11-01",
      gender: 1,
      phone: "09893840384",
      address: "098 Ton Duc Thang",
      email: "huy@12345",
      image:
        "https://res.cloudinary.com/dte2ps5qs/image/upload/v1700431912/zo74ugufya9ayvuntmvn.png",
    },
  ]);

  useEffect(() => {
    getAlluser(localStorage.getItem("token")).then((res) => {
      setUsers(res.data);
    });
  }, []);
  console.log(users);
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
        <table className=" w-full ">
          <thead>
            <tr className="bg-gray-300 text-center sticky top-0">
              <td>avt</td>
              <td>firstName</td>
              <td>lastName</td>
              <td>dateOfBirth</td>
              <td>gender</td>
              <td>phone</td>
              <td>Địa chỉ</td>
              <td>email</td>
              <td>option</td>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                key={index}
              >
                <td className=" text-center border-r py-4">
                  <img src={user.image} className="w-16 h-16"></img>
                  {user.id}
                </td>
                <td className=" text-center border-r py-4">{user.firstName}</td>
                <td className=" text-center border-r py-4">{user.lastName}</td>
                <td className=" text-center border-r py-4">
                  {user.dateOfBirth}
                </td>
                <td className=" text-center border-r py-4">
                  {user.gender ? "Nam" : "Nữ"}
                </td>
                <td className=" text-center border-r py-4">{user.phone}</td>
                <td className=" text-center border-r py-4">{user.address}</td>
                <td className=" text-center border-r py-4">{user.email}</td>
                <td className=" text-center border-r py-4 space-x-2">
                  <Link
                    to={{
                      pathname: "/users/history",
                      search: `?id=${user.id}`,
                    }}
                    className=" bg-gray-100 hover:bg-green-300 px-4 py-2 rounded"
                  >
                    Lịch sử mua hàng
                  </Link>
                  <button className="bg-gray-100 hover:bg-red-500 px-4 py-2 rounded">
                    Xóa
                  </button>
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
