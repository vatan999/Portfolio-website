import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Matic Name Service",
    description:
      "The MNS (Matic Name Service) is used to register your dapp in matic the polygon mumbai test network. Implementations for MNS core functionality: The registry, registrars, and public resolvers.",
    image: "/mns.png",
    github: "https://github.com/vatan999/matic-name-service",
    link: "https://matic-name-service.vercel.app/",
    technologies: ["Solidity", "Javascript", "Hardhat", "Ether.js", "React.js"],
  },
  {
    name: "Crypto App",
    description:
      "Cryptocurrency live price tracking app with Javascript, React.js, Chakra ui and coingecko api.",
    image: "/crypto-app-home.png",
    github: "https://github.com/vatan999/crypto-app",
    link: "https://crypto-app-delta-seven.vercel.app/",
    technologies: ["Javascript", "React.js", "Chakra Ui"]
  },
  {
    name: "Cars Showcase App",
    description:
      "🚗 Car Showcase App 🌐 Next.js 13.4.2 + TypeScript + Tailwind CSS + Headless UI 🛠️ Fetches car data from cars-by-api Ninjas API and Imagin Studio API.",
    image: "/car-showcase.png",
    github: "https://github.com/vatan999/cars_showcase",
    link: "https://cars-showcase-rosy.vercel.app/",
    technologies: ["Next.js", "TypeScript", "Tailwind Css", "Headless Ui"]
  },
  {
    name: "Shopping Cart App",
    description: "A shopping cart app using React.js and Redux Toolkit.",
    image: "/shopping_cart.png",
    github: "https://github.com/vatan999/ShoppingCart-with-redux-toolkit",
    link: "",
    technologies: ["React.js", "Redux Toolkit"],
  },
  {
    name: "Budget Tracker App",
    description: "Budget tracker app in javascript.",
    image: "/budget_tracker.png",
    github: "https://github.com/vatan999/Budget-tracker-app",
    link: "https://budget-tracker-app-sage.vercel.app/",
    technologies: ["Javascript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex items-center flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-3">{project.name}</h1>
                    <div className="flex flex-wrap gap-3 mb-2">
                      {project.technologies.map((tech, id) => <p key={id} className="font-semibold bg-blue-600 p-1 px-2 rounded-lg text-white">{tech}</p>)}
                    </div>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-blue-600"
                        />
                      </Link>
                      {project.link !== "" ? (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer hover:text-blue-600"
                          />
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
