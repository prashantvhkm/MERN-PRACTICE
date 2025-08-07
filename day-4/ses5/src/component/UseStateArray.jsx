import React, { useState } from "react";

const UseStateArray = () => {
  const [empArray, setEmpsArray] = useState([]);
  const [emp, setEmps] = useState("");

  const addEmp = () => {
    setEmpsArray([...empArray, { ename: emp }]);
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card text-start">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="formId1"
                  id="formId1"
                  placeholder=""
                  onChange={(e) => {
                    setEmps(e.target.value);
                  }}
                />
                <label className="formId1">Name</label>
              </div>

              <div className="card-body">
                <h4 className="card-title">
                  <button onClick={addEmp}>Add</button>
                </h4>
              </div>
            </div>
          </div>

          <div className="col">
            <ul>
              {empArray.map((emp, i) => (
                <li className="nav-item" key={i}>
                  name : {emp.ename}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseStateArray;
