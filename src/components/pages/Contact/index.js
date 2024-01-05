import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getAlluser from "../../../services/axios/getAlluser";
import axios from "axios";
import NewPagination from "../../../services/other/NewPagination";

function App() {
  const [update, setUpdate] = useState(true);
  const [contacts, setContacts] = useState([
    // {
    //   id: 1,
    //   firstName: "huy",
    //   lastName: "nguyen",
    //   dateOfBirth: "2023-11-01",
    //   gender: 1,
    //   phone: "09893840384",
    //   address: "098 Ton Duc Thang",
    //   email: "huy@12345",
    //   image:
    //     "https://res.cloudinary.com/dte2ps5qs/image/upload/v1700431912/zo74ugufya9ayvuntmvn.png",
    // },
  ]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const size = 10;

  useEffect(() => {
    axios
      .get("http://api.shopiec.shop/api/contacts", {
        params: {
          page: page,
          size: size,
          sort: "DESC",
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setPages(Math.ceil(res.headers["x-total-page"] / size));
        setContacts(res.data);
      })
      .catch((error) => {
        setContacts([]);
      });
  }, [page, update]);

  const handleDel = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      axios
        .delete("http://api.shopiec.shop/api/contacts/contact/" + id, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setUpdate(!update);
        });
    }
  };
  const handleClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <div className="max-h-[46rem]">
      <div className="flex items-center justify-center border-gray-600 ">
        <input
          type="text"
          placeholder="Tìm..."
          className="w-full p-2 border border-gray-400 rounded mr-2 mb-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
          Tìm
        </button>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-[40.5rem] border border-slate-500">
        <table className=" w-full ">
          <thead>
            <tr className="bg-gray-300 text-center sticky top-0">
              <td>Họ và tên</td>
              <td>Số điện thoại</td>
              <td>email</td>
              <td>Nội dung</td>
              <td>Ngày gửi</td>
              <td></td>
            </tr>
          </thead>
          <tbody className="">
            {contacts.map((contact, index) => (
              <tr
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                key={index}
              >
                <td className=" text-center border-r py-4">
                  {contact.fullName}
                </td>
                <td className=" text-center border-r py-4">{contact.phone}</td>
                <td className=" text-center border-r py-4">{contact.email}</td>
                <td className=" text-center border-r py-4">
                  {contact.content}
                </td>
                <td className=" text-center border-r py-4">
                  {contact.createAt}
                </td>

                <td className="flex flex-col text-center border-r py-4">
                  <div className="flex flex-col space-y-2 items-center">
                    <button
                      onClick={() => handleDel(contact.id)}
                      className="w-fit bg-gray-100 hover:bg-red-500 px-2 py-2 rounded"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <NewPagination pageCount={pages} handlePageClick={handleClick} />
    </div>
  );
}

export default App;
