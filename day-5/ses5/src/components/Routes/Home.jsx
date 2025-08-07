import React from "react";
import Props1 from "../Props/Props1";
import Props2 from "../Props/Props2";
import Props3 from "../Props/Props3";
import Props4 from "../Props/Props4";
import BtnInc from "../useState/BtnInc";
import Ifelse from "../condetional/Ifelse";
import Tenanry from "../condetional/Tenanry";
import Logical from "../condetional/Logical";
import Swtich from "../condetional/Switch";
import BtnIncDec from "../useState/BtnIncDec";

const Home = () => {
  const style = {
    color: "red",
    backgroundColor: "green",
    border: "2px solid red",
    // fontSize: "10px",
  };

  return (
    <div>
      <div className="container">
        <h1>Home</h1>
        <div className="container" style={style}>
          <div className="row justify-content-center align-items-center g-2">
            <p className="h3">Props</p>

            <div className="col-3">
              <Props1 name="tom" age={21} />
            </div>

            <div className="col-3">
              <Props2 name="om" age={23} salary={20000} />
            </div>
            <div className="col-3">
              <Props3 name="hari" />
            </div>
            <div className="col-3">
              <Props4 name="hari" age={21} salary={90909} rollno={12} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <h2>
              <b>InCrement</b>
            </h2>
            <span>
              <BtnInc />
            </span>
          </div>
          <div className="col">
            <BtnIncDec />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-primary">
                <tbody>
                  <tr className="">
                    <td scope="row">If Else</td>
                    <td>
                      <Ifelse />
                    </td>
                  </tr>
                  <tr className="">
                    <td scope="row">Tenanry</td>
                    <td>
                      <Tenanry />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col">
            <div className="table-responsive">
              <table className="table table-primary">
                <tbody>
                  <tr className="">
                    <td scope="row">Logical</td>
                    <td>
                      <Logical />
                    </td>
                  </tr>
                  <tr className="">
                    <td scope="row">Switch</td>
                    <td>
                      <Swtich />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
