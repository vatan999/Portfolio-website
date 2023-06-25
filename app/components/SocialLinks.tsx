import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const socialLinks = [
  {
    icon: <AiFillLinkedin size={30} />,
    link: "https://www.linkedin.com/in/vatan-srivastava-759873144/",
  },
  {
    icon: <AiFillGithub size={30}  />,
    link: "https://github.com/vatan999",
  },
  {
    icon: <AiFillTwitterCircle size={30} />,
    link: "https://twitter.com/VatanSrivastav4",
  },
];

const SocialLinks = () => {
  return (
    <div>
      <div className=" flex gap-5 justify-start basis-1/2">
        {socialLinks.map((socialLink,id) => (
          <a
            key={id}
            target="_blank"
            href={socialLink.link}
            className="p-2 rounded shadow-lg bg-white text-blue-600 hover:text-blue-700  hover:-translate-y-1 transition-transform"
          >
            {socialLink.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

// p-2 rounded shadow-lg bg-white text-blue-600 hover:text-blue-700  hover:-translate-y-1 transition-transform

export default SocialLinks;
