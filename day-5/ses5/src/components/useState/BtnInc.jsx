import React from "react";
import { useState } from "react";

const BtnInc = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div className="container">
        <h3>{num}</h3>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default BtnInc;
