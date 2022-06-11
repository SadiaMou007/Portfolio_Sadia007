import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import i1 from "../../Assets/p1.png";
import i2 from "../../Assets/p2.png";
import i3 from "../../Assets/p3.png";
import { Link } from "react-router-dom";
const Ptojects = () => {
  return (
    <div className="min-h-[100vh] bg-secondary">
      <div className="py-6 px-12">
        <h2 className="text-primary text-xl font-bold text-center py-6">
          MY RECENT PROJECTS
        </h2>
        <div className="my-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-md-2 gap-6">
            <div
              className="p-6 tooltip tooltip-open tooltip-primary shadow-sm border-2 border-gray-50 hover:shadow-lg rounded-md"
              data-tip="1"
            >
              <img src={i1} alt="" className="" />
              <h1 className="bg-secondary font-bold text-cyan-800 text-center py-2 shadow-lg text-2xl border-b border-primary">
                TOOLS STORE
              </h1>
              <h1 className="bg-secondary text-primary text-center py-2 rounded-lg">
                Tools manufacture website.
              </h1>
              <h1 className=" text-primary text-center p-2 rounded-lg grid grid-cols-3 gap-4">
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  ReactJS
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  Tailwind
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  DaisyUI
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  NodeJS
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  Firebase
                </h2>
              </h1>
              <div className="my-6">
                {" "}
                <a
                  className="btn btn-success btn-outline mx-2 px-12 w-full"
                  href="https://tools-store-96ff9.web.app/"
                  target="_blank"
                >
                  Live
                </a>
              </div>
              <div className="flex justify-center my-3">
                <a
                  className="btn btn-primary btn-outline mx-2 px-12"
                  href="https://github.com/SadiaMou007/tools_store_client"
                  target="_blank"
                >
                  Client
                </a>
                <a
                  className="btn btn-primary btn-outline mx-2 px-12"
                  href="https://github.com/SadiaMou007/tools_store_client"
                  target="_blank"
                >
                  Server
                </a>
              </div>
            </div>
            <div
              className="p-6 tooltip tooltip-open tooltip-primary shadow-sm border-2 border-gray-50 hover:shadow-lg rounded-md"
              data-tip="2"
            >
              <img src={i2} alt="" className="" />
              <h1 className="bg-secondary font-bold text-cyan-800 text-center py-2 shadow-lg text-2xl border-b border-primary">
                Car Manager
              </h1>
              <h1 className="bg-secondary text-primary text-center py-2 rounded-lg">
                Car warehouse management
              </h1>
              <h1 className=" text-primary text-center p-2 rounded-lg grid grid-cols-3 gap-4">
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  ReactJS
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  Bootstrap{" "}
                </h2>

                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  NodeJS
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  Firebase
                </h2>
              </h1>
              <div className="my-6">
                {" "}
                <a
                  className="btn btn-success btn-outline mx-2 px-12 w-full "
                  href="https://car-manager-9a097.web.app/"
                  target="_blank"
                >
                  Live
                </a>
              </div>
              <div className="flex justify-center my-3">
                <a
                  className="btn btn-primary btn-outline mx-2 px-12"
                  href="https://github.com/SadiaMou007/car_manager_client"
                  target="_blank"
                >
                  Client
                </a>
                <a
                  className="btn btn-primary btn-outline mx-2 px-12"
                  href="https://github.com/SadiaMou007/car_manager-server"
                  target="_blank"
                >
                  Server
                </a>
              </div>
            </div>
            <div
              className="p-6 tooltip tooltip-open tooltip-primary shadow-sm border-2 border-gray-50 hover:shadow-lg rounded-md"
              data-tip="3"
            >
              <img src={i3} alt="" className="" />
              <h1 className="bg-secondary font-bold text-cyan-800 text-center py-2 shadow-lg text-2xl border-b border-primary">
                TOUR GUIDE
              </h1>
              <h1 className="bg-secondary text-primary text-center py-2 rounded-lg">
                Single tour service provider application.
              </h1>
              <h1 className=" text-primary text-center p-2 rounded-lg grid grid-cols-3 gap-4">
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  ReactJS
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  Bootstrap{" "}
                </h2>

                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  Firebase
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  HTML
                </h2>
                <h2 className="p-2 border border-gray-50 text-cyan-600 rounded font-serif font-bold">
                  CSS{" "}
                </h2>
              </h1>
              <div className="flex justify-center my-3">
                <a
                  className="btn btn-primary btn-outline mx-2 px-12"
                  href="https://travel-world-97d79.web.app/"
                  target="_blank"
                >
                  Live
                </a>
                <Link to={"/detail3"}>
                  <button className="btn btn-primary btn-outline mx-2 px-12">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ptojects;
