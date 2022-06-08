import { Route, Routes } from "react-router-dom";
import "./App.css";
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
      </Routes>
    </div>
  );
}

export default App;
