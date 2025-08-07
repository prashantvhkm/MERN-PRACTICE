import Abouts from "./component/Abouts";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Props from "./component/Props";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="abouts" element={<Abouts />} />
          <Route path="content" element={<Content />} />
        </Routes>
        <Props name="tom" age={12} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
