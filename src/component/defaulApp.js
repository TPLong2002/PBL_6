import Img from "../img/logo/logo.png";

import "../App.css";

function DefaultApp({ children }) {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#dd0105] flex justify-center">
        <img className="h-12 object-top" src={Img} alt="Logo"></img>
      </div>
      {children}
    </div>
  );
}
export { DefaultApp };
