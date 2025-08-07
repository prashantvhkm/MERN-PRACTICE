import React from "react";

const Ifelse = () => {
  let islogin = true;

  if (islogin) {
    return (
      <div>
        <h1>login</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>not login</h1>
      </div>
    );
  }
};

export default Ifelse;
