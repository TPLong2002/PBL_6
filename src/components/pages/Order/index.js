import { Orders } from "./Orders";
function App() {
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
  return (
    <div>
      <div className="font-bold text-[30px]">Đơn hàng</div>
      <div className="flex flex-row p-2 mb-5 bg-gray-50 border border-slate-950">
        <div className="w-1/4 ">
          <button className="text-left p-0.5 border rounder bg-gray-200">
            Đơn hàng đang duyệt
          </button>
        </div>
        <div className="w-1/4 ">
          <button className="text-left p-0.5 border rounder bg-green-400">
            Đơn hàng thành công
          </button>
        </div>
        <div className="w-1/4 ">
          <button className="text-left p-0.5 border rounder bg-gray-400">
            Đơn hàng đã hủy
          </button>
        </div>
        <div className="w-1/4 ">
          <button className="text-left p-0.5 border rounder bg-red-400">
            Đơn hàng thất bại
          </button>
        </div>
      </div>
      <div className="space-y-5 max-h-[45rem] overflow-y-auto scrollbar-hide">
        {Orders.map((order, index) => (
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

export default App;
