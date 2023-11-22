import { useLocation } from "react-router-dom";
import { Orders } from "../Order/Orders";
import { Link } from "react-router-dom";
function History() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");
  const historyofuser = Orders.filter(
    (Orders) => Orders.byUser.id === Number(userId)
  );
  return (
    <div>
      <div>
        &lt; <Link to={"/users"}>Back</Link>
      </div>
      <div className="font-bold text-[30px]">Đơn hàng</div>
      <div className="space-y-5 max-h-[45rem] overflow-y-auto scrollbar-hide">
        {historyofuser.map((order, index) => (
          <div
            key={index}
            className="flex space-x-5 p-2 rounded shadow-md border justify-between bg-gray-100"
          >
            <div className="flex space-x-5 ">
              <div>
                <img
                  src={order.img}
                  alt=""
                  className="w-[8rem] h-[8rem] rounded shadow-md"
                ></img>
              </div>
              <div className="space-y-2">
                <div>
                  <div className="border rounded bg-white shadow-md p-1">
                    Tên người đặt: {order.byUser.Name}
                  </div>
                </div>
                <div>
                  <div className="border rounded bg-white shadow-md p-1">
                    Đia chỉ: {order.byUser.Adress}
                  </div>
                </div>
                <div>
                  <div className="border rounded bg-white shadow-md p-1">
                    SĐT: 012345678
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
