import React, { useState } from "react";

function UseState() {
  const [num, funNum] = useState(0);
  return (
    <div class="container">
      <div class="container">
        <div class="row justify-content-center align-items-center g-2">
          <div class="col">
            {" "}
            <p>Use State</p>
          </div>
          <div class="col">
            <p className="h1">{num}</p>
          </div>
          <div class="col">
            {" "}
            <button onClick={() => funNum(num + 1)}> add </button>
            <button onClick={() => funNum(num - 1)}> - 1 </button>
            <button onClick={() => funNum(0)}> clear </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseState;
