import { useEffect, useState } from "react";
import ImageUpload from "./uploadimg";
import DateTimePicker from "react-datetime-picker";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import {
  selectEvent,
  selectPrivateCoupon,
  selectPublicCoupon,
  selectRemaining,
} from "./eventSlice";

import Discount from "./Discount";
import PublicCoupon from "./PublicCoupon";
import PrivateCoupon from "./PrivateCoupon";
import axios from "axios";
import ListEvent from "./ListEvent";

function Event() {
  const discount = useSelector(selectEvent);
  const privateCoupon = useSelector(selectPrivateCoupon);
  const publicCoupon = useSelector(selectPublicCoupon);
  const remaining = useSelector(selectRemaining);

  const [startTime, setStartTime] = useState(new Date("2024-01-01 00:00:00"));
  const [endTime, setEndTime] = useState(new Date("2024-01-03 23:59:59"));
  const [eventName, setEventName] = useState("NewYear");
  const [description, setDescription] = useState("NewYear");

  const [image, setImage] = useState("");
  const [selected, setSelected] = useState(1);

  const handleAddImage = (newImage) => {
    setImage(newImage);
  };

  const handleOnSubmit = async () => {
    var event = {
      title: eventName,
      description: description,
      startDate: format(startTime, "yyyy-MM-dd HH:mm:ss"),
      endDate: format(endTime, "yyyy-MM-dd HH:mm:ss"),
      image: image,
    };

    if (selected == 1) {
      event = { ...event, itemGroupIds: discount };
      console.log(event);
      await axios
        .post(
          "http://api.shopiec.shop/api/events/event/decrease-price",
          event,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => alert(res.data.message));
    }

    if (selected == 2) {
      event = { ...event, giftCodes: publicCoupon, remainingUsage: remaining };
      console.log(event);
      await axios
        .post(
          "http://api.shopiec.shop/api/events/event/giveaway/code-public",
          event,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => alert(res.data.message));
    }

    if (selected == 3) {
      const res = await axios.get(
        "http://api.shopiec.shop/api/gifcodes/random",
        {
          params: {
            amount: Number(privateCoupon.amount),
            percent: Number(privateCoupon.discount),
          },
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      event = { ...event, giftCodes: res.data };
      console.log(event);
      axios
        .post(
          "http://api.shopiec.shop/api/events/event/giveaway/code-private",
          event,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => alert(res.data.message));
    }
  };
  return (
    <div>
      <label className="flex text-2xl font-bold text-gray-900 dark:text-white">
        Sự kiện
      </label>
      <div className="flex space-x-5">
        <div className="w-1/2 space-y-3 ">
          <label className="flex w-1/2  text-md font-bold text-gray-900 dark:text-white">
            Thông tin
          </label>

          <div className="border-2 p-2 rounded-md shadow-md space-y-4">
            <div className="flex">
              <label className="flex w-1/2 items-center text-md font-bold text-gray-900 dark:text-white">
                Tên Sự Kiện
              </label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
            <div className=" flex">
              <label className="flex w-1/3 items-center text-md font-bold text-gray-900 dark:text-white">
                Ảnh
              </label>
              <div className="flex flex-col w-2/3">
                <img className="w-full h-32" src={image} alt=""></img>
                <div>
                  <ImageUpload onImageUpload={handleAddImage} />
                </div>
              </div>
            </div>
            <div className="flex">
              <label className="flex w-1/3 text-md font-bold text-gray-900 dark:text-white">
                Ngày bắt đầu
              </label>
              <div className="w-2/3 text-center">
                <DateTimePicker value={startTime} onChange={setStartTime} />
              </div>
            </div>
            <div className="flex">
              <label className="flex w-1/3  text-md font-bold text-gray-900 dark:text-white">
                Ngày kết thúc
              </label>
              <div className="w-2/3 text-center">
                <DateTimePicker value={endTime} onChange={setEndTime} />
              </div>
            </div>
            <div className="flex">
              <label className="flex w-1/2 items-center text-md font-bold text-gray-900 dark:text-white">
                Mô tả
              </label>
              <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full p-2 border rounded border-gray-300"
              />
            </div>
          </div>
          <div className="flex">
            <select
              className="rounded-md w-1/2 border-gray-300 border p-2 shadow-md"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value={1}>Giảm giá theo danh mục</option>
              <option value={2}>Giảm giá theo toàn bộ khách hàng</option>
              <option value={3}>Giảm giá khách hàng thân thiết</option>
            </select>
          </div>
          <div className="flex border-2 p-2 rounded-md shadow-md">
            <div className="max-w-md flex">{selected == 1 && <Discount />}</div>
            <div className="max-w-md flex">
              {selected == 2 && <PublicCoupon />}
            </div>
            <div className="max-w-md flex">
              {selected == 3 && <PrivateCoupon />}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleOnSubmit}
              className={`ml-2  text-white px-2 py-2 rounded ${"bg-blue-500"} transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300`}
            >
              Tạo
            </button>
          </div>
        </div>
        <div className="w-1/2 space-y-3">
          <label className="flex w-1/2 text-md font-bold text-gray-900 dark:text-white">
            Danh sách sự kiện
          </label>
          <ListEvent />
        </div>
      </div>
    </div>
  );
}

export default Event;
