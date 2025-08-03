import React from "react";

function Logical() {
  let isLogin = true;
  return <div>{isLogin && <h1>welcome</h1>}</div>;
}

export default Logical;
