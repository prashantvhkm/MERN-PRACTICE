import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home";
import About from "./components/Routes/About";
import Service from "./components/Routes/Service";
import Navbar from "./components/Routes/Navbar";
import Footer from "./components/Routes/Footer";
import Fromhanding from "./components/Routes/Fromhanding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="fromhanding" element={<Fromhanding />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="service" element={<Service />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
