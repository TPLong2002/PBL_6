import { Orders } from "./Orders";
function App() {
  const statusToColor = {
    1: "bg-gray-200", // Xám
    2: "bg-green-400", // Xanh
    3: "bg-gray-400", // Đen
    4: "bg-red-400", // Hồng
  };
  return (
    <div>
      <div className="">
        {Orders.map((order, index) => (
          <div
            key={index}
            className={`flex ${statusToColor[order.status]} space-x-5 p-2`}
          >
            <div>
              <img src={order.img} alt=""></img>
            </div>
            <div>{order.byUser}</div>
            <div>{order.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
