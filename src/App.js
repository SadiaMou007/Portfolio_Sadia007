import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Home/Nav";
import Detail1 from "./Pages/Projects/Detail1";
import Ptojects from "./Pages/Projects/Ptojects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/projects"} element={<Ptojects />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
        <Route path={"/detail1"} element={<Detail1 />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
