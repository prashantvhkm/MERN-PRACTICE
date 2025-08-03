import React from "react";

function Ternany() {
  let islogin = true;

  return <div>{islogin ? <h1>IS login</h1> : <h1>try Agoin</h1>}</div>;
}

export default Ternany;
