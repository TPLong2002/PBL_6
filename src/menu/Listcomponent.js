export default function List() {
  const List = [
    { id: 1, name: "Chat" },
    { id: 2, name: "Sản phẩm" },
    { id: 3, name: "User" },
    { id: 4, name: "Đơn hàng" },
    { id: 5, name: "Thống kê doanh thu" },
    { id: 6, name: "Thông tin cửa hàng" },
    { id: 7, name: "Logout" },
  ];
  return (
    <div>
      <ul style={{ listStyleType: "none" }}>
        {List.map((l) => (
          <li className={l.id == 1 ? "bg-gray-100" : "bg-red-100"} key={l.id}>
            {l.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
