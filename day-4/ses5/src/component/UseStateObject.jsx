import React, { useState } from "react";

const UseStateObject = () => {
  const [emp, setEmp] = useState({ name: "", salary: 0 });

  return (
    <div>
      <div className="form">
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
          <label className="formId1">Name</label>
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
          <label className="formId1">Salary</label>
        </div>
      </div>
      <p className="h3">
        {emp.name}--{emp.salary}
      </p>
    </div>
  );
};

export default UseStateObject;
