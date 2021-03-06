import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div class="navbar bg-primary text-white sticky top-0 z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/home"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"} className="text-primary">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} className="">
                CONTACT
              </NavLink>
            </li>
            <li>
              <a
                class="btn btn-secondary btn-outline"
                href="https://drive.google.com/file/d/18TK1CHdyelNNKBbHf17Pe6_-dkvclVFz/view?usp=sharing"
                target="_blank"
              >
                RESUME
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <NavLink to={"/home"}>HOME</NavLink>
          </li>{" "}
          <li>
            <NavLink to={"/projects"} className="">
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="">
              CONTACT
            </NavLink>
          </li>
          <li>
            <a
              class="btn btn-secondary btn-outline"
              href="https://drive.google.com/file/d/18TK1CHdyelNNKBbHf17Pe6_-dkvclVFz/view?usp=sharing"
              target="_blank"
            >
              RESUME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
