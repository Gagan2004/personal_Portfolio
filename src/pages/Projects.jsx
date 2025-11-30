import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Layers, Cpu, Globe } from "lucide-react";
import ProjectTimeline from "../components/Timeline";

// Import assets for project images (using placeholders for now based on available assets)
import homeImg from "../assets/home.jpg";
import r1 from "../assets/r-1.png";
import r2 from "../assets/r-2.webp";
import r4 from "../assets/r-4.jpg";
import r5 from "../assets/r-5.jpg";

const projectsData = [
  {
    id: 1,
    title: "Airbnb Clone",
    description: "Full-stack rental platform with dynamic listings, user dashboards, and secure booking management.",
    technologies: ["React", "Node.js", "MongoDB", "Prisma", "Tailwind"],
    category: "Web Dev",
    github: "https://github.com/Gagan2004/air_bnb_clone_frontend",
    live: "https://air-bnb-clone-frontend.vercel.app/",
    image: homeImg,
    role: "Full Stack Developer",
    featured: true
  },
  {
    id: 2,
    title: "File Sharing App",
    description: "Secure file-sharing platform allowing users to upload and share files via unique 5-digit PINs.",
    technologies: ["Node.js", "Express", "Multer", "UUID"],
    category: "Web Dev",
    github: "https://github.com/Gagan2004/front_comm",
    live: "https://front-comm.onrender.com",
    image: r1,
    role: "Backend Developer",
    featured: false
  },
  // {
  //   id: 3,
  //   title: "ML House Predictor",
  //   description: "Machine learning model for predicting house prices using advanced regression techniques.",
  //   technologies: ["Python", "Pandas", "Scikit-learn"],
  //   category: "Machine Learning",
  //   github: "https://github.com/yourname/ml-house-price",
  //   live: "https://colab.research.google.com/",
  //   image: r2,
  //   role: "Data Scientist",
  //   featured: false
  // },
  {
    id: 4,
    title: "AI Video Generator",
    description: "generates video based on provided prompt , with voiceover and stock videos",
    technologies: ["python", "Gemini TTS", "OpenCV", "Customtkinter", "pexels API"],
    category: "Gen-AI",
    github: "https://github.com/Gagan2004/AI-video-generator-",
    // live:"https://ai-video-generator.vercel.app/",
    image: r4,
    role: "Full Stack Developer"

  },

  {
    id: 5,
    title: "LucidCode — (n8n inspired) AI Visual Logic Builder",
    description: "A visual development tool that transforms logic flows into deployable full-stack code using LLMs",
    technologies: ["Node.js", "Reactflow", "Tailwind", "Groq API"],
    category: ["Web Dev", "Gen-AI"],
    github: "https://github.com/Gagan2004/lucid_code-Client",
    live: "https://lucid-code-client.vercel.app/",
    image: r5,
    role: "Full Stack Developer"

  },
  {
    id: 6,
    title: " AI Linux Terminal — Natural Language to Shell Commands",
    description: " Converts natural language into Linux terminal commands to manage files & directories.",
    technologies: ["python", "shell", "Groq API"],
    category: ["Gen-AI"],
    github: "https://github.com/Gagan2004/lucid_code-Client",
    live: "https://lucid-code-client.vercel.app/",
    image: r2,
    role: "Full Stack Developer"

  }


];

const categories = ["All", "Web Dev", "Machine Learning", "Gen-AI"];

const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Projects & Portfolio
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work, side projects, and experiments in web development and machine learning.
          </p>
        </motion.div>

        {/* Timeline Component */}
        {/* <div className="mb-20">
          <ProjectTimeline />
        </div> */}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                ? "bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                : "bg-zinc-900/50 border-zinc-800 text-gray-400 hover:border-green-500/50 hover:text-green-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={proj.id}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)]"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-700 text-xs text-green-400 font-mono">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {proj.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {proj.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300 border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded bg-zinc-800 text-gray-300 border border-zinc-700">
                        +{proj.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div className="flex items-center gap-4">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
