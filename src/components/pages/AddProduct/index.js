import { useState } from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  const [Price, setPrice] = useState("");
  const [IF, setIF] = useState("");
  const [Name, setName] = useState("");
  return (
    <div className="flex flex-col">
      <div>
        &lt; <Link to={"/product"}>Back</Link>
      </div>
      <div>
        Name:{" "}
        <input
          type="text"
          value={Name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
      </div>
      <div>ảnh</div>
      <div>Màu:</div>
      <div>
        Giá:{" "}
        <input
          type="text"
          value={Price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
      </div>
      <div>
        Thông tin sản phẩm:{" "}
        <input
          type="text"
          value={IF}
          onChange={(event) => setIF(event.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default AddProduct;
