import React from "react";

function Switch() {
  let islogin = true;

  switch (islogin) {
    case true:
      return <h1>welcome user</h1>;

    default:
      return <h1>try Again</h1>;
  }
}

export default Switch;
