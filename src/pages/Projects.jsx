import React, { useState } from "react";
import OmnitrixDial from "../components/OmnitrixDial";
import "../ProjectPage.css";
import { Scale } from "lucide-react";
import ProjectTimeline from "../components/Timeline";



const projectsData = [
  {
    id: 1,
    title: "Airbnb Clone",
    description: "A full-stack clone of Airbnb with booking and review system.",
    technologies: ["React", "Node.js", "MongoDB", "Prisma"],
    category: "Web Dev",
    github: "https://github.com/yourname/airbnb-clone",
    live: "https://airbnb-clone.vercel.app",
    image: "/images/airbnb.png",
    role: "Built entire backend and frontend with full CRUD functionality.",
  },
  {
    id: 2,
    title: "ML Predictor",
    description: "Predictive model for house prices using regression.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    category: "Machine Learning",
    github: "https://github.com/yourname/ml-house-price",
    live: "https://colab.research.google.com/",
    image: "/images/ml_project.png",
    role: "Data cleaning, model training, evaluation, and visualization.",
  },
  // Add more projects here
];

const categories = ["All", "Web Dev", "Machine Learning", "Systems", "Other"];




const ProjectPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <div className="project-page">

{/* <div style={{ transform: "scale(0.2)", transformOrigin: "top left" }  }>
  <OmnitrixDial />
</div> */}

<ProjectTimeline/>
      <h1 className="page-title">Projects & Portfolio</h1>

      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((proj) => (
          <div className="project-card" key={proj.id}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <div className="project-content">
              <h2>{proj.title}</h2>
              <p>{proj.description}</p>
              <p>
                <strong>Technologies:</strong> {proj.technologies.join(", ")}
              </p>
              <p>
                <strong>Role:</strong> {proj.role}
              </p>
              <div className="project-links">
                <a href={proj.live} target="_blank" rel="noreferrer">
                  🔗 Live
                </a>
                <a href={proj.github} target="_blank" rel="noreferrer">
                  🐙 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};




export default ProjectPage;

