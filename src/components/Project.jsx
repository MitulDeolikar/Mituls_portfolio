import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.webp";
import project3 from "../assets/images/project-3.jpeg";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from '../assets/images/project-6.png';
import project7 from '../assets/images/project-7.png'

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Restaurant Website",
      github_link: "https://github.com/MitulDeolikar/restaurant_website_mern",
      
    },
    {
      img: project2,
      name: "Movie Recommendation System",
      github_link: "https://github.com/MitulDeolikar/Movie_recommendation_system",
      
    },
    {
      img: project3,
      name: "Event Management System",
      github_link: "https://github.com/MitulDeolikar/Event_Management-System",
      
    },
    {
      img: project4,
      name: "IPL 2024 Interactive Dashboard",
      github_link:"https://github.com/MitulDeolikar/IPL_2024_interactive_dashboard",
    },
    {
      img: project5,
      name: "Typing Game",
      github_link: "https://github.com/MitulDeolikar/Typing-Game-TypeSwype",
      
    },
    {
      img: project6,
      name: "Netflix Frontend Clone",
      github_link: "https://github.com/Sridhar-C-25",
      
    },
    {
      img: project7,
      name: "Sentiment Analysis of Movie Reviews",
      github_link: "",
      
    },
    
  ];

  return (
    <section id="projects" className="py-10 bg-gray-800 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="w-full h-56 object-cover rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
