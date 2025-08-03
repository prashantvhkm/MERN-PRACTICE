import React from "react";
import Ifelse from "./conditionRendeing/Ifelse";
import Ternany from "./conditionRendeing/Ternany";
import Logical from "./conditionRendeing/Logical";
import Switch from "./conditionRendeing/Switch";

function Home() {
  return (
    <div>
      <div class="container">
        <hr />
        <h1>condition Rendeing</h1>
        <div class="container">
          <hr />
          <div class="row justify-content-center align-items-center g-2">
            <div class="col">If Else</div>
            <div class="col">
              <Ifelse />
            </div>
          </div>
          <hr />
          <div class="row justify-content-center align-items-center g-2">
            <div class="col">Ternany</div>
            <div class="col">
              <Ternany />
            </div>
          </div>
          <hr />
          <div class="row justify-content-center align-items-center g-2">
            <div class="col">Logical</div>
            <div class="col">
              <Logical />
            </div>
          </div>
          <hr />
          <div class="row justify-content-center align-items-center g-2">
            <div class="col">Switch</div>
            <div class="col">
              <Switch />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Home;
