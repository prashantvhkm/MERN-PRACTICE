import React from "react";
import { useState } from "react";

const BtnIncDec = () => {
  const [Num, setNum] = useState(0);
  return (
    <div>
      <div className="container">
        <div className="card text-start">
          <h1>
            <b>{Num}</b>
          </h1>
          <div className="card-body">
            <h4 className="card-title">UseStae</h4>
            <button onClick={() => setNum(Num + 1)}> Add</button>
            <button onClick={() => setNum(Num - 1)}> Dec</button>
            <button onClick={() => setNum(0)}> clear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnIncDec;
