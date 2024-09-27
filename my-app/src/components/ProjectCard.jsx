import React from "react";
import { ProjectList } from "./ProjectData"; 
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInLeft" key={index}>
          <div className="grid grid-cols-1 gap-8 mb-16 pb-8 overflow-hidden rounded-lg shadow-lg md:grid-cols-2">
            <div className="flex justify-center h-full">
              <img src={list.img} alt={list.name} className="object-cover" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h4 className="text-xl font-normal">{list.title}</h4>
              <p className="font-normal max-w-[95%] mt-2 mb-4 text-gray-700 text-center md:text-left">
                {list.description}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start">
                {list.tech_stack.map((tech, index) => (
                  <div key={index} className="bg-gray-200 rounded-lg px-3 py-1 m-1 text-sm font-normal text-gray-700 shadow-md">
                    {tech}
                  </div>
                ))}
              </div>
              <div className="flex items-center h-16">
                {list.github_url && (
                  <a
                    className="btn SecondaryBtn btn-shadow mr-4"
                    href={list.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                )}
                {list.demo_url && (
                  <a
                    className="btn PrimaryBtn btn-shadow"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ProjectCard;
