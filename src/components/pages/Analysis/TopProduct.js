import { Link } from "react-router-dom";
function TopProducts({ products, url }) {
  return (
    <div className="mt-1 overflow-y-auto scrollbar-hide shadow-md max-h-[14rem]">
      <table className="w-full">
        <thead className="bg-gray-100 text-center sticky top-0">
          <tr>
            <td>Name</td>
            <td>Số lượng</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td className="text-center px-2 border-r">
                <Link
                  to={{
                    pathname: url,
                    search: `?id=${item.id}`,
                  }}
                >
                  {item.name}
                </Link>{" "}
              </td>
              <td className="text-center border-r">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopProducts;
