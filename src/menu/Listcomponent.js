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
          <li>
            <button key={l.id}>{l.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
