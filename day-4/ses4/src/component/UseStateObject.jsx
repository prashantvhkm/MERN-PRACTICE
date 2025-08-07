import React, { useState } from "react";

const UseStateObject = () => {
  const [emp, setemp] = useState({ name: "", salary: 0 });
  return (
    <>
      name :
      <input
        type="text"
        onChange={(e) => {
          setemp({ ...emp, name: e.target.value });
        }}
      />
      salary :
      <input
        type="number"
        onChange={(e) => {
          setemp({ ...emp, salary: e.target.value });
        }}
      />
      <p>
        {emp.name}--{emp.salary}
      </p>
    </>
  );
};

export default UseStateObject;
