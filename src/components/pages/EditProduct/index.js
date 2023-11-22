import { useState } from "react";
import { Products } from "../Product/Products";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ImageUpload from "./uploadimg";

function EditProduct() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  console.log(productId);
  const product = Products.find((product) => product.id === Number(productId));

  const [Price, setPrice] = useState(product.Price);
  const [IF, setIF] = useState(product.IF);

  const [banner, setBanner] = useState([product.img]);

  const handleAddImage = (newImage) => {
    setBanner((prevBanner) => [...prevBanner, newImage]);
  };

  const handlerDel = (index) => {
    const updatedBanner = [...banner];
    updatedBanner.splice(index, 1);
    setBanner(updatedBanner);
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="text-lg font-semibold">
        <Link to="/product" className="text-blue-500 hover:underline">
          &lt; Back to {product.Name}
        </Link>
      </div>

      <div className="">
        <div className="border rounded p-2 shadow-md">
          {banner.map((b, index) => (
            <div key={index} className="mb-2 flex items-center">
              <img src={b} alt="banner" className="w-full h-96 object-cover" />
              <div className="ml-2">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded transition-transform hover:scale-105 duration-300"
                  onClick={() => handlerDel(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <ImageUpload onImageUpload={handleAddImage} />
      </div>

      <div className="font-semibold">Color:</div>
      <div className="font-semibold">Price:</div>
      <div className="max-w-md">
        <input
          type="text"
          value={Price}
          onChange={(event) => setPrice(event.target.value)}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>

      <div className="font-semibold">Product Information:</div>
      <div className="max-w-md">
        <input
          type="text"
          value={IF}
          onChange={(event) => setIF(event.target.value)}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>

      <div className="text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded transition-transform hover:scale-105 duration-300">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProduct;
