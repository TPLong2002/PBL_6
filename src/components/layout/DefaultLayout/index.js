import "../../../App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col flex-row h-[57rem]">
      <Header />
      <div className="container mx-auto p-4 flex">
        <div className="w-1/5 h-[52rem] bg-white flex-col border-2 border-rose-600 rounded-md">
          <Sidebar></Sidebar>
        </div>
        <Content>{children}</Content>
      </div>
    </div>
  );
}
