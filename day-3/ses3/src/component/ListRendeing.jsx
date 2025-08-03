import React from "react";

function ListRendeing() {
  const emps = [
    { id: 1, name: "tom1" },
    { id: 2, name: "tom2" },
    { id: 3, name: "tom3" },
    { id: 4, name: "tom4" },
    { id: 5, name: "tom5" },
  ];
  return (
    <div class="container">
      <div>
        <ul>
          {emps.map((emp) => (
            <li key={emp.id}>
              id: <b>{emp.id}</b> --name: <b>{emp.name}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListRendeing;
