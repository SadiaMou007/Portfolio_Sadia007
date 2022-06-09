import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Nav from "./Pages/Home/Nav";
import Ptojects from "./Pages/Projects/Ptojects";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/projects"} element={<Ptojects />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
