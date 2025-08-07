import React from "react";
import UseStateObject from "../FromHanding/UseStateObject";
import UseStateArray from "../FromHanding/UseStateArray";

const Fromhanding = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <UseStateObject />
          </div>
          <div className="col">
            <UseStateArray />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fromhanding;
