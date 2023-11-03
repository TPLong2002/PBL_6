// import { useState } from "react";
// import img from "../../../img/banner/vn-50009109-84b6dbb942b411b06e260b2534a52ab1_xxhdpi.jpg";
// import ImageUpload from "./uploadimg";
// function Banner() {
//   const [banner, setBanner] = useState([img]);
//   const handlerDel = () => {
//     setBanner();
//   };
//   return (
//     <div>
//       {banner.map((b, index) => (
//         <div key={index} className="flex">
//           <img src={b}></img>
//           <button onClick={(event) => handlerDel(event.target.value)}>
//             xóa
//           </button>
//         </div>
//       ))}
//       <div>
//         <ImageUpload />
//       </div>
//     </div>
//   );
// }

// export default Banner;
import { useState } from "react";
import img from "../../../img/banner/vn-50009109-84b6dbb942b411b06e260b2534a52ab1_xxhdpi.jpg";
import ImageUpload from "./uploadimg";

function Banner() {
  const [banner, setBanner] = useState([img]);

  const handlerDel = (index) => {
    const updatedBanner = [...banner];
    updatedBanner.splice(index, 1);
    setBanner(updatedBanner);
  };

  const handleAddImage = (newImage) => {
    setBanner((prevBanner) => [...prevBanner, newImage]);
  };

  return (
    <div className="overflow-y-auto h-[52rem] scrollbar-hide">
      {banner.map((b, index) => (
        <div key={index} className="flex items-center">
          <img src={b} alt="Banner" className="max-w-full max-h-96" />
          <div className=" border">
            <button
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
              onClick={() => handlerDel(index)}
            >
              Xóa
            </button>
          </div>
        </div>
      ))}
      <div>
        <ImageUpload onImageUpload={handleAddImage} />
      </div>
    </div>
  );
}

export default Banner;
