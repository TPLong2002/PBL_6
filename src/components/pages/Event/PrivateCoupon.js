import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPrivateCoupon } from "./eventSlice";
function PrivateCoupon() {
  const dispatch = useDispatch();
  const [privateCode, setPrivateCode] = useState({
    amount: "",
    discount: 0,
  });
  useEffect(() => {
    dispatch(setPrivateCoupon(privateCode));
  }, [privateCode]);
  const handleChanged = (e) => {
    const { name, value } = e.target;
    setPrivateCode({ ...privateCode, [name]: value });
  };
  return (
    <div className="flex space-x-1">
      <div className="w-full flex text-center space-x-1">
        <label className="text-md font-bold text-gray-900 dark:text-white flex items-center">
          Số lượng
        </label>
        <input
          type="text"
          name="amount"
          onChange={handleChanged}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>
      <div className="w-full flex text-center space-x-1">
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
    </div>
  );
}

export default PrivateCoupon;
