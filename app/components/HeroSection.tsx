"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import imageAvatar from "../../public/my-pic.jpeg";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src={imageAvatar}
            alt=""
            width={320}
            height={250}
            className="rounded-full shadow-2xl h-[320px] object-cover"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Vatan
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-blue-600">
              Frontend Developer{"  "}
            </span>
            passionate towards creating software that makes life easier and more
            meaningful.
          </p>
          <div className="flex items-center justify-between">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1CtE8E2swMtmUMvGs4D4YKd04xIZKet2V/view?usp=sharing"
              className="text-neutral-100  font-semibold px-6 py-3 cursor-pointer bg-blue-600 rounded shadow hover:bg-blue-700"
            >
              Resume
            </a>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
