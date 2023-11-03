// import { useState } from "react";
// import { Link } from "react-router-dom";

// function AddProduct() {
//   const [Price, setPrice] = useState("");
//   const [IF, setIF] = useState("");
//   const [Name, setName] = useState("");
//   return (
//     <div className="flex flex-col">
//       <div>
//         &lt; <Link to={"/product"}>Back</Link>
//       </div>
//       <div>
//         Name:{" "}
//         <input
//           type="text"
//           value={Name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         ></input>
//       </div>
//       <div>
//         <input type="file" />
//       </div>
//       <div>Màu:</div>
//       <div>
//         Giá:{" "}
//         <input
//           type="text"
//           value={Price}
//           onChange={(event) => setPrice(event.target.value)}
//         ></input>
//       </div>
//       <div>
//         Thông tin sản phẩm:{" "}
//         <input
//           type="text"
//           value={IF}
//           onChange={(event) => setIF(event.target.value)}
//         ></input>
//       </div>
//     </div>
//   );
// }

// export default AddProduct;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageUpload from "./uploadimg";

function AddProduct() {
  // State để lưu trữ thông tin sản phẩm
  const [product, setProduct] = useState({
    name: "",
    image: "",
    color: "",
    price: "",
    description: "",
  });

  // Hàm xử lý khi người dùng nhập thông tin
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  // Hàm xử lý khi người dùng gửi thông tin sản phẩm
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây, bạn có thể thực hiện lưu thông tin sản phẩm vào cơ sở dữ liệu hoặc xử lý theo nhu cầu của bạn.
  };

  return (
    <div className="container mx-auto mt-8">
      <div>
        &lt;{" "}
        <Link to={"/product"} className="font-medium text-xl">
          Back
        </Link>{" "}
      </div>
      <h1 className="text-2xl font-bold mb-4">Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Tên Sản Phẩm
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            id="name"
            value={product.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Ảnh Sản Phẩm
          </label>
          <ImageUpload />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="color"
          >
            Màu Sản Phẩm
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="color"
            id="color"
            value={product.color}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Giá Sản Phẩm
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="price"
            id="price"
            value={product.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Thông Tin Sản Phẩm
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="description"
            id="description"
            value={product.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Thêm Sản Phẩm
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
