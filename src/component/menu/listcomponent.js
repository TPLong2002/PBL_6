import "../../App.css";
import { useState } from "react";
import list from "./listmenu";
import avt from "../../img/avt/avt.jpg";

export default function Listcomponent() {
  const [com, setCom] = useState(list[0]);
  function handlerClick(c) {
    setCom(c);
  }
  return (
    <div className="container mx-auto p-4 flex ">
      <div className="w-1/5 p-4 bg-white flex-col border-2 border-rose-600">
        <div className="p-4 bg-white flex-col border-2 border-rose-200">
          <div className="justify-center flex">
            <img src={avt} alt="" className="w-20"></img>
          </div>
          <div className="justify-center flex mt-5">ADMIN</div>
        </div>
        <ul style={{ listStyleType: "none" }}>
          {list.map((l) => (
            <li
              className="block p-2 my-4 border-rose-200 hover:bg-gray-200 "
              key={l.id}
              onClick={() => handlerClick(l)}
            >
              {l.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-4/5 p-4 bg-white">{com.val && <com.val />}</div>
    </div>
  );
}
