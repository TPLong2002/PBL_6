import { useDispatch } from "react-redux";
import { setPublicCoupon, setRemaining } from "./eventSlice";
import { useEffect, useState } from "react";

function PublicCoupon() {
  const dispatch = useDispatch();

  const [publicCode, setPublicCode] = useState({
    code: "",
    discount: 0,
    remaining: 0,
  });

  useEffect(() => {
    var obj = {};
    obj[String(publicCode.code)] = Number(publicCode.discount);
    dispatch(setPublicCoupon(obj));
  }, [publicCode.code, publicCode.discount]);

  useEffect(() => {
    dispatch(setRemaining(Number(publicCode.remaining)));
  }, [publicCode.remaining]);

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setPublicCode({ ...publicCode, [name]: value });
  };
  return (
    <div className="flex space-x-1">
      <div className="flex text-center space-x-1">
        <label className="text-md font-bold text-gray-900 dark:text-white flex items-center">
          Code
        </label>
        <input
          type="text"
          name="code"
          value={publicCode.code}
          onChange={handleChanged}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>
      <div className=" flex text-center space-x-1">
        <label className="text-md font-bold text-gray-900 dark:text-white flex items-center">
          %
        </label>
        <input
          type="text"
          name="discount"
          onChange={handleChanged}
          value={publicCode.discount}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>
      <div className=" flex text-center space-x-1">
        <label className="text-md font-bold text-gray-900 dark:text-white flex items-center">
          Số lần sử dụng
        </label>
        <input
          type="text"
          name="remaining"
          onChange={handleChanged}
          value={publicCode.remaining}
          className="w-1/3 p-2 border rounded border-gray-300"
        />
      </div>
    </div>
  );
}

export default PublicCoupon;
