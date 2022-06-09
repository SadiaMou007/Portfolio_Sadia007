import React from "react";
import Contact from "../Contact/Contact";
import Ptojects from "../Projects/Ptojects";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Ptojects />
      <Contact />
    </div>
  );
};

export default Home;
