import "bootstrap/dist/css/bootstrap.min.css";
import UseStateObject from "./component/UseStateObject";
import UseStateArray from "./component/UseStateArray";
import AllUseState from "./component/AllUseState";
import UseEff from "./component/UseEff";
import Useaxios from "./component/Useaxios";
import Use from "./component/Use";

{
  /* <UseEff />
      <Useaxios />
      <Use /> */
}

function App() {
  return (
    <>
      <UseStateObject />
      <UseStateArray />
      <AllUseState />
    </>
  );
}

export default App;
