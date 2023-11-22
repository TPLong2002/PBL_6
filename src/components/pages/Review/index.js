import { reviews } from "./Reviews";
function Review() {
  return (
    <div>
      <div className="flex items-center justify-center border-gray-600">
        <input
          type="text"
          placeholder="Tìm..."
          className="w-full p-2 border border-gray-400 rounded mr-2 mb-2"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
          Tìm
        </button>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-[48.9rem] border border-slate-500">
        <table className="w-full ">
          <thead className="bg-slate-400">
            <tr className="bg-gray-300 text-center sticky top-0">
              <td className="text-center">Tên sản phẩm</td>
              <td className="text-center">Đánh giá</td>
              <td className="text-center">Số sao</td>
              <td className="text-center">Options</td>
            </tr>
          </thead>
          <tbody className="border">
            {reviews.map((review, index) => (
              <tr
                key={index}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
              >
                <td className="text-center border-r py-4">{review.Name}</td>
                <td className="text-center border-r py-4">
                  {review.descriptions}
                </td>
                <td className="text-center border-r py-4">{review.rate}</td>
                <td className="text-center border-r py-4 space-x-2">
                  <button className="bg-gray-100 hover:bg-green-300 px-4 py-2 rounded ">
                    Duyệt
                  </button>
                  <button className="bg-gray-100 hover:bg-red-300 px-4 py-2 rounded ">
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Review;
