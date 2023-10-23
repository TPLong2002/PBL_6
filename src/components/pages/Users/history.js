import { useLocation, Link } from "react-router-dom";
import { history_purchases as historys } from "./history_purchase";
function History() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");
  const historyofuser = historys.filter(
    (historys) => historys.byUser === Number(userId)
  );
  console.log(historyofuser);
  return (
    <div>
      <div>
        &lt; <Link to={"/users"}>Back</Link>
      </div>
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
        {historyofuser.map((history, index) => (
          <div className="flex items-center space-x-2 " key={index}>
            <div className="">{history.ProductName}</div>
            <div>{history.Address}</div>
            <div>{history.Sdt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
