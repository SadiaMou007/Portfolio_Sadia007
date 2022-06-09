import React from "react";

const Banner = () => {
  return (
    <div class="h-[100vh] bg-primary text-white">
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxaxJGA9gk9ug0hGzgaaHWvtUwQw9p_y9Cg&usqp=CAU"
            class=" rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
