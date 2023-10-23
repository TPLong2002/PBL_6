import { useState } from "react";

function App() {
  const [HL, setHL] = useState("0123456789");
  const [DC, setDC] = useState("Đà nẵng");
  return (
    <div className="flex flex-col space-y-2">
      <div>
        Hotline:{" "}
        <input
          type="text"
          value={HL}
          onChange={(event) => {
            setHL(event.target.value);
          }}
        ></input>
      </div>
      <div>
        Địa chỉ:{" "}
        <input
          type="text"
          value={DC}
          onChange={(event) => {
            setDC(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
