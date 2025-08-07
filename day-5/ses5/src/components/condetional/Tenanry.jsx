import React from "react";

const Tenanry = () => {
  let isLogin = true;
  return <div>{isLogin ? <h1>login</h1> : <h1>not login</h1>}</div>;
};

export default Tenanry;
