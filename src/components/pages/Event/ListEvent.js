import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
function ListEvent() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("http://api.shopiec.shop/api/events", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEvents(res.data.reverse());
    };
    fetchEvents();
  }, []);
  const handleDel = async (id) => {
    console.log("http://api.shopiec.shop/api/events/event/" + id);
    if (window.confirm("Bạn có chắc chắn muốn xóa sự kiện này?")) {
      await axios
        .delete("http://api.shopiec.shop/api/events/event/" + id, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => alert(res.data.message));
    }
  };
  return (
    <div className="overflow-y-auto scrollbar-hide h-[40.5rem] border border-slate-500 shadow-md">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-300 text-center sticky top-0">
            <th>Tên sự kiện</th>
            <th>Mô tả</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
            <th>Ảnh</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {events &&
            events.map((event, index) => (
              <tr
                key={index}
                className=" border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="text-center border-r py-4">{event.title}</td>
                <td className="text-center border-r py-4">
                  {event.description}
                </td>
                <td className="text-center border-r py-4">{event.startDate}</td>
                <td className="text-center border-r py-4">{event.endDate}</td>
                <td className="text-center border-r py-4">
                  <img className="" src={event.image} alt=""></img>
                </td>
                <td className="">
                  <button
                    className="w-fit bg-gray-100 hover:bg-red-500 px-2 py-2 rounded"
                    onClick={() => handleDel(event.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListEvent;
