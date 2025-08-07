import React from "react";

const Swtich = () => {
  let isLogin = true;
  switch (isLogin) {
    case true:
      return <h1>login</h1>;

    default:
      return <h1>not login</h1>;
  }
};

export default Swtich;
