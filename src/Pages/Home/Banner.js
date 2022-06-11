import React from "react";
import b1 from "../../Assets/bg/banner.png";
import Nav from "./Nav";
import b2 from "../../Assets/bg/c.png";

const Banner = () => {
  return (
    <div
      class="h-[100vh] text-white"
      style={{
        background: `url(${b1})`,
        backgroundSize: "cover",
      }}
    >
      <div class="flex items-center justify-around pt-24">
        <div className="">
          <p class="py-6">Hi, Welcome to My Portfolio</p>
          <h1 class="text-3xl font-bold mb-6">I'm Sadia Islam</h1>
          <h1 class="text-5xl font-bold mb-12 text-secondary">
            {" "}
            A Full Stack Developer
          </h1>

          <button class="btn btn-secondary btn-outline">CONTACT WITH ME</button>
        </div>
        <div className="">
          <img
            src={b2}
            class=" rounded-lg shadow-2xl h-96 w-96 mask mask-hexagon"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
