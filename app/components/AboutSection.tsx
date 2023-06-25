import React from "react";
import Image from "next/image";



const skills = [
  {
    skill:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    skill:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    skill:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  },
  {
    skill:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    skill: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  { skill: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
  {
    skill:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  { skill: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg" },
  { skill: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" },
  {
    skill:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    skill:
      "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Vatan and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> frontend developer
              .
            </p>
            <br />
            <p>
              I graduated from Makhanlal Chaturvedi University, in 2022 with a
              Bachelor's in Computer Application (BCA) and have been working in
              the field ever since.
            </p>
            <br />
            <p>
              I have 6 moths of professional experience in React.js Development
              specializing in reusable components, data fetching, and
              high-quality code. Utilizes Axios for seamless integration of
              RESTful API data in JSON format. Prioritizes efficiency and
              exceptional user experiences.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-blue-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex gap-5 flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, id) => {
                return (
                  <Image
                    src={item.skill}
                    className="bg-white p-3 h-[60px] w-[60px] rounded-lg border hover:shadow-lg hover:ease-in-out hover:duration-400 hover:-translate-y-1 transition-transform cursor-pointer"
                    key={id}
                    alt="logo"
                    height={100}
                    width={100}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
