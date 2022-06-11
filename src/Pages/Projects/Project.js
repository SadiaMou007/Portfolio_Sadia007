import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { id } = project;
  return (
    <div
      className="p-4 shadow-md hover:shadow-lg tooltip tooltip-open tooltip-primary border-2 rounded-md"
      data-tip={project.id}
    >
      <img src={project.img} alt="" className="" />
      <h1 className="bg-secondary font-bold text-white text-center py-2 rounded-lg text-xl">
        {project.name}
      </h1>
      <div className="flex justify-center my-3">
        <button className="btn btn-primary btn-outline mx-2 px-12">Live</button>
        <Link to={"/project/" + id}>
          <button className="btn btn-primary btn-outline mx-2 px-12">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
