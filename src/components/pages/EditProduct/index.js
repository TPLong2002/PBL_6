import { useState } from "react";
import { Products } from "../Product/Products";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function EditProduct() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  const product = Products.find((product) => product.id === Number(productId));
  console.log(product);
  const [Price, setPrice] = useState(product.Price);
  const [IF, setIF] = useState(product.IF);
  return (
    <div className="flex flex-col">
      <div>
        &lt; <Link to={"/product"}>Back {product.Name}</Link>
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

export default EditProduct;
