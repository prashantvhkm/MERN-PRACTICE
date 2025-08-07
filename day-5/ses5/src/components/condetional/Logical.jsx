import React from "react";

const Logical = () => {
  let islogin = true;
  return <div>{islogin && <h1>login</h1>}</div>;
};

export default Logical;
