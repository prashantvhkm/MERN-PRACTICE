import React from "react";

function Ifelse() {
  let Idloggendin = true;
  if (Idloggendin) {
    return <h1>login </h1>;
  } else {
    return <h1>Failed</h1>;
  }
}

export default Ifelse;
