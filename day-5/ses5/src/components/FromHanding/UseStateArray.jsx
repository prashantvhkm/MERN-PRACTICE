import React from "react";
import { useState } from "react";

const UseStateArray = () => {
  const [empData, setEmpData] = useState([]);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);

  const addEmp = () => {
    setEmpData([
      ...empData,
      {
        ename: name,
        esalary: salary,
      },
    ]);
  };

  return (
    <div>
      <div className="container">
        <div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="formId1"
              id="formId1"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setSalary(e.target.value)}
            />
            <label>Salary</label>
          </div>

          <button onClick={addEmp}> Add</button>
        </div>

        <div>
          <ul>
            {empData.map((emp, i) => (
              <li key={i}>
                name : <b> {emp.ename}</b> -- Salary : <b> {emp.esalary}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseStateArray;
