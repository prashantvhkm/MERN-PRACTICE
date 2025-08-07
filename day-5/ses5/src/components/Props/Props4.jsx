import React from "react";

const Props4 = ({ name, age, salary, rollno }) => {
  return (
    <div>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-primary">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">age </th>
                <th scope="col">salary </th>
                <th scope="col">rollno</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>{name}</td>
                <td>{age}</td>
                <td>{salary}</td>
                <td>{rollno}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Props4;
