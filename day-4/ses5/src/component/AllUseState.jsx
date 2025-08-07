import React from "react";
import { useState } from "react";

const AllUseState = () => {
  const [empAll, setEmpAll] = useState([]);
  const [empName, setName] = useState("");
  const [empSalary, setSalary] = useState(0);

  const AddEmp = () => {
    setEmpAll([
      ...empAll,
      {
        ename: empName,
        esalary: empSalary,
      },
    ]);
  };
  return (
    <div>
      <h1>demo</h1>
      <div className="form-floating mb-3">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Name</label>
      </div>

      <div className="form-floating mb-3">
        <input type="number" onChange={(e) => setSalary(e.target.value)} />
        <label>salary</label>
      </div>
      <button onClick={() => AddEmp()}>add</button>

      <ul>
        {empAll.map((emp, i) => (
          <li key={i}>
            {emp.ename}--{emp.esalary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUseState;
