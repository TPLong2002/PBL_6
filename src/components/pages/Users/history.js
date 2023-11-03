import { useLocation } from "react-router-dom";
import { Orders } from "../Order/Orders";
function History() {
  const statusToColor = [
    {
      1: "bg-gray-200",
      2: "bg-green-400",
      3: "bg-gray-400",
      4: "bg-red-400",
    },
    {
      1: "Đang đợi",
      2: "Thành công",
      3: "Đã hủy",
      4: "Đã boom",
    },
  ];
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");
  const historyofuser = Orders.filter(
    (Orders) => Orders.byUser.id === Number(userId)
  );
  return (
    <div>
      <div className="font-bold text-[30px]">Đơn hàng</div>
      <div className="space-y-5 max-h-[45rem] overflow-y-auto scrollbar-hide">
        {historyofuser.map((order, index) => (
          <div
            key={index}
            className={`flex ${
              statusToColor[0][order.status]
            } space-x-5 p-2 rounded shadow-md`}
          >
            <div>
              <img
                src={order.img}
                alt=""
                className="w-[8rem] h-[8rem] rounded shadow-md"
              ></img>
            </div>
            <div>
              <div className="border rounded bg-white shadow-md">
                Tên người đặt: {order.byUser.Name}
              </div>
            </div>
            <div>
              <div className="border rounded bg-white shadow-md">
                Đia chỉ: {order.byUser.Adress}
              </div>
            </div>
            <div>
              <div className="border rounded bg-white shadow-md">
                SĐT: 012345678
              </div>
            </div>
            <div>
              <div className="border rounded bg-white shadow-md">
                {statusToColor[1][order.status]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
