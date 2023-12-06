import { useEffect, useState } from "react";
import listcatalogs from "../../../services/axios/getcatalogs";

import addCatalog from "../../../services/axios/addCatalog";

function App() {
  const [catalogs, setCatalogs] = useState([]);
  const [selected, setSelected] = useState({ name: "", image: "" });
  const [newcatalog, setNewcatalog] = useState({ name: "", image: "" });
  useEffect(() => {
    listcatalogs.then((names) => {
      console.log(names);
      setCatalogs(names);
    });
  }, []);
  const handleselect = (e) => {
    setSelected({
      name: catalogs[e.target.value - 1].name,
      image: catalogs[e.target.value - 1].image,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
  };

  const handleNewCatalog = (e) => {
    setNewcatalog({ name: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(newcatalog);
    // await addCatalog(newcatalog, localStorage.getItem("token"));
  };
  return (
    <div className="flex flex-col space-y-2">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Select an option
      </label>
      <div>
        <select
          name="igId"
          id="igId"
          onClick={handleselect}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {catalogs.map((catalog, index) => (
            <option key={index} value={catalog.id}>
              {catalog.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        name="name"
        id="name"
        value={selected.name}
        onChange={handleInputChange}
        className="pl-3.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="..."
        required
      ></input>
      <input
        type="text"
        id="image"
        name="image"
        className="pl-3.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="url"
        value={selected.image}
        onChange={handleInputChange}
        required
      ></input>
      <div className="mt-auto text-center">
        <button
          type="submit"
          className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Sửa
        </button>
      </div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Tên danh mục
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="pl-3.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="..."
        value={newcatalog.name}
        onChange={handleNewCatalog}
        required
      ></input>
      <input
        type="text"
        id="image"
        name="image"
        className="pl-3.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="..."
        value={newcatalog.image}
        onChange={handleNewCatalog}
        required
      ></input>
      <div className="mt-auto text-center">
        <button
          type="submit"
          onClick={() => handleSubmit(selected)}
          className="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Thêm
        </button>
      </div>
    </div>
  );
}

export default App;
