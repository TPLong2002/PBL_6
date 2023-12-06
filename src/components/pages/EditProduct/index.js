import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ImageUpload from "./uploadimg";
import request from "../../../services/axios/getProduct";
import updateProduct from "../../../services/axios/updateProduct";
import getcatalogs from "../../../services/axios/getcatalogs";

function EditProduct() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");

  const [name, setName] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [description, setDescription] = useState();
  const [igId, setigId] = useState("");
  const [banner, setBanner] = useState([]);
  const [catalogs, setCatalogs] = useState([]);

  const handleAddImage = (newImage) => {
    setBanner((prevBanner) => [...prevBanner, newImage]);
  };
  useEffect(() => {
    request.get(`/items/item/${productId}`).then((res) => {
      setName(res.data.name);
      setBuyPrice(res.data.sellPrice);
      setSellPrice(res.data.buyPrice);
      setDescription(res.data.description);
      res.data.imagesItem.map((b) =>
        setBanner((prevBanner) => [...prevBanner, b.image])
      );
    });
    getcatalogs.then((names) => {
      // Bạn có thể sử dụng giá trị names ở đây
      setCatalogs(names);
    });
  }, [productId]);
  // console.log(catalogs);
  const handlerDel = (index) => {
    const updatedBanner = [...banner];
    updatedBanner.splice(index, 1);
    setBanner(updatedBanner);
  };

  const handleInputChange = (e) => {
    setigId(e.target.value);
  };

  const handlersubmit = async () => {
    const product = {
      name: name,
      buyPrice: buyPrice,
      sellPrice: sellPrice,
      igId: igId,
      description: description,
      lastUpdateAt: "2023-11-21 09:32:35",
    };
    console.log(product, productId, localStorage.getItem("token"));
    const res = await updateProduct(
      productId,
      product,
      localStorage.getItem("token")
    );
    console.log(res);
  };
  const del = async () => {
    await request.delete(`/items/${productId}`).then((res) => {
      navigate("/product");
    });
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <div className="text-lg font-semibold">
        <Link to="/product" className="text-blue-500 hover:underline">
          &lt; Back to
        </Link>
      </div>
      <button onClick={del}>Delete</button>
      <div className="max-w-md">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>
      <div className="">
        <div className="border rounded p-2 shadow-md flex flex-wrap">
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
      <div>
        <select
          name="igId"
          id="igId"
          onClick={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {catalogs.map((catalog, index) => (
            <option key={index} value={catalog.id}>
              {catalog.name}
            </option>
          ))}
        </select>
      </div>
      <div className="font-semibold">BuyPrice:</div>
      <div className="max-w-md">
        <input
          type="text"
          value={buyPrice}
          onChange={(event) => setBuyPrice(event.target.value)}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>
      <div className="font-semibold">SellPrice:</div>
      <div className="max-w-md">
        <input
          type="text"
          value={sellPrice}
          onChange={(event) => setSellPrice(event.target.value)}
          className="w-full p-2 border rounded border-gray-300"
        />
      </div>

      <div className="font-semibold">Product Information:</div>
      <div className="w-full h-[10rem]">
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="w-full h-full p-2 border rounded border-gray-300 resize-none overflow-y-auto"
          placeholder="Nhập thông tin..."
        />
      </div>

      <div className="text-center">
        <button
          onClick={handlersubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded transition-transform hover:scale-105 duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProduct;
