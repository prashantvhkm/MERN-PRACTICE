import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import UseState from "./component/UseState";
import ListRendeing from "./component/ListRendeing";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/usestate" element={<UseState />}></Route>
          <Route path="/listrendeing" element={<ListRendeing />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
