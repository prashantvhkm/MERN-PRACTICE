import React from "react";
import { useState } from "react";

const UseStateObject = () => {
  const [emp, setEmp] = useState({ name: "", salary: 0 });
  return (
    <div>
      <div className="container">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            onChange={(e) => {
              setEmp({ ...emp, name: e.target.value });
            }}
          />
          <label>Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            name="formId1"
            id="formId1"
            placeholder=""
            onChange={(e) => {
              setEmp({ ...emp, salary: e.target.value });
            }}
          />
          <label>Salary</label>
        </div>
        <h1>
          {emp.name}--{emp.salary}
        </h1>
      </div>
    </div>
  );
};

export default UseStateObject;
