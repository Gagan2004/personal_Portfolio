// src/pages/About.jsx
import React from "react";
import Funfacts from "../components/FunFacts"
import FunFacts from "../components/FunFacts";

const About = () => {
  return (
    <div className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-lime-400">About Me</h1>
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        Hey, I’m Gagan — a full-stack developer and creative technologist with a deep interest in building intuitive, powerful, and story-driven digital experiences.
      </p>
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        I’ve developed projects ranging from a full-featured <span className="text-lime-300 font-semibold">Airbnb clone</span> to clever automation tools and content engines powered by AI. I'm particularly excited by the potential of combining design, animation, and smart backend logic to bring ideas to life.
      </p>
      <p className="text-lg leading-relaxed text-gray-300 mb-4">
        Currently, I’m exploring the intersection of AI, storytelling, and web technologies through projects like this Omnitrix-themed portfolio, motivational content creation, and smart utility bots that blur the line between fun and function.
      </p>
      <p className="text-lg leading-relaxed text-gray-300">
        When I’m not coding, I’m either crafting short films, breaking down complex tech into bite-sized stories, or experimenting with ways to make learning more visual and engaging.
      </p>

      <FunFacts/>
    </div>
  );
};

export default About;
