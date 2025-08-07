import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEff = () => {
  const [emp, setEmp] = useState(0);
  useEffect(() => {
    document.title = `count :${emp}`;
  }, [emp]);
  return (
    <div>
      <h1>{emp}</h1>
      <button onClick={() => setEmp(emp + 1)}>add</button>
    </div>
  );
};

export default UseEff;
