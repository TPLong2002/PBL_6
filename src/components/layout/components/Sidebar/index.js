import { Link } from "react-router-dom";
import "../../../../App.css";
import Avt from "../../../../img/avt/avt.jpg";
import { Paths } from "./Paths";

function App() {
  return (
    <div className="w-1/5 p-4 bg-white flex-col border-2 border-rose-600">
      <div className="p-4 bg-white flex-col border-2 border-rose-200">
        <div className="justify-center flex">
          <img src={Avt} alt="" className="w-20"></img>
        </div>
        <div className="justify-center flex mt-5">ADMIN</div>
      </div>
      {/* <Link
        to="/"
        className="block p-2 my-4 border-rose-200 hover:bg-gray-200 "
      >
        click
      </Link>
      <Link
        to="/product"
        className="block p-2 my-4 border-rose-200 hover:bg-gray-200 "
      >
        click
      </Link> */}
      {Paths.map((path, index) => {
        return (
          <Link
            to={path.to}
            key={index}
            className="block p-2 my-4 border-rose-200 hover:bg-gray-200 "
          >
            {path.page}
          </Link>
        );
      })}
    </div>
  );
}

export default App;
