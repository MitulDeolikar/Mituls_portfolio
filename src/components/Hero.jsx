import React from "react";
import coder from "../assets/images/coder-removebg-preview.png";

const Hero = () => {
  const social_media = [
    {
      icon: "fab fa-instagram",
      link: "", // Add your Instagram link here
    },
    {
      icon: "fab fa-github",
      link: "https://github.com/MitulDeolikar/",
    },
    {
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/mitul-deolikar-585b40251/",
    },
    {
      icon: "fas fa-envelope",
      link: "mailto:mituldeolikar@gmail.com", // Replace with your email address
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={coder} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Mitul Deolikar</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Tech Enthusiast
          </h4>
          <a href="./src/assets/MitulDeolikar_resume (3).pdf" target="_blank">
            <button className="btn-primary mt-5">View Resume</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
