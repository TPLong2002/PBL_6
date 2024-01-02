import { useEffect, useState } from "react";
import getcatalogs from "../../../services/axios/getcatalogs";
import { useDispatch } from "react-redux";
import { setDiscount } from "./eventSlice";

function Discount() {
  const dispatch = useDispatch();

  const [catalogs, setCatalogs] = useState([{ id: 1, name: "" }]);
  const [selected, setSelected] = useState(1);
  const [payload, setPayload] = useState({ igId: 1, discount: 0 });
  const [payloads, setPayloads] = useState([]);

  useEffect(() => {
    getcatalogs.then((res) => {
      setCatalogs(res);
      setSelected(res[0].id);
    });
  }, []);
  useEffect(() => {
    var obj = {};
    payloads.forEach((payload) => {
      obj[String(payload.igId)] = Number(payload.discount);
    });
    dispatch(setDiscount(obj));
  }, [payloads]);
  const handleChanged = (e) => {
    const { name, value } = e.target;
    if (name === "igId") {
      setSelected(value);
    }
    setPayload({ ...payload, [name]: Number(value) });
  };

  const handleAdd = () => {
    setPayloads([...payloads, payload]);
  };
  const handleDel = (index) => {
    const newPayloads = payloads.filter((payload, i) => i !== index);
    setPayloads(newPayloads);
  };
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-1">
        <div>
          <select
            name="igId"
            id="igId"
            value={selected}
            onChange={handleChanged}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {catalogs.map((catalog, index) => (
              <option key={index} value={catalog.id}>
                {catalog.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-1/3 flex text-center space-x-1">
          <label className="text-md font-bold text-gray-900 dark:text-white flex items-center">
            %
          </label>
          <input
            type="text"
            name="discount"
            onChange={handleChanged}
            className="w-1/3 p-2 border rounded border-gray-300"
          />
        </div>
        <button
          onClick={handleAdd}
          className={`ml-2  text-white px-2 py-2 rounded ${"bg-blue-500"} transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300`}
        >
          Thêm
        </button>
      </div>
      <div className="w-full shadow-md">
        <table className="w-full border-2 border-gray-700 rounded-sm">
          <thead className="border border-gray-700">
            <tr className="border border-gray-700">
              <th className="border border-gray-700">Nhóm</th>
              <th className="border border-gray-700">% Giảm</th>
            </tr>
          </thead>
          <tbody className="border border-gray-700">
            {payloads.map((payload, index) => (
              <tr key={index} className="border border-gray-700">
                <td className="border border-gray-700">{payload.igId}</td>
                <td className="border border-gray-700">{payload.discount}</td>
                <td className="border border-gray-700">
                  <button onClick={() => handleDel(index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Discount;
