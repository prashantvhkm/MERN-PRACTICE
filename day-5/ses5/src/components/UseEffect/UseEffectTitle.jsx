import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectTitle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count : ${count}`;
  }, [count]);
  return (
    <div>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>dec</button>
      </div>
    </div>
  );
};

export default UseEffectTitle;
