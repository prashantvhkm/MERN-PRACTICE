import React, { useState } from "react";

const UseStateArray = () => {
  const [emp, setEmp] = useState([]);
  const [name, setName] = useState("");

  const addEmp = () => {
    setEmp([
      ...emp,
      {
        e_name: name,
      },
    ]);
  };

  return (
    <div>
      Name:
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={addEmp}>add</button>
      <hr />
      <ul>
        {emp.map((e, index) => (
          <li key={index}>name : {e.e_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArray;
