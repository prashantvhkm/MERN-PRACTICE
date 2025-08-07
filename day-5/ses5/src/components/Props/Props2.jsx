import React from "react";

const Props2 = ({ name, age, salary }) => {
  return (
    <div>
      <p className="2">
        {name}-{age}-{salary}
      </p>
    </div>
  );
};

export default Props2;
