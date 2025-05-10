import React, { useState } from "react";
import OmnitrixDial from "../components/OmnitrixDial";
import "../ProjectPage.css";
import { Scale } from "lucide-react";
import ProjectTimeline from "../components/Timeline";



const projectsData = [
  {
    id: 1,
    title: "Airbnb Clone",
    description: `Full-Stack Airbnb Clone<br />
  React | Node.js | Express | Prisma | MongoDB | Cloudinary | Render<br /><br />
  Developed a full-stack Airbnb-inspired web application that allows users to list, browse, and book rental properties.<br /><br />

  Frontend built with React and Tailwind CSS, featuring dynamic property listings, user dashboards, authentication, and booking management.<br /><br />
  Backend powered by Node.js, Express, and Prisma ORM with MongoDB Atlas for scalable data handling and secure JWT-based authentication.<br /><br />
  Integrated Cloudinary for image uploads and optimized media delivery.<br /><br />
  Enabled features such as user reviews, wishlists, protected routes, and image galleries.<br /><br />
  Deployed both frontend and backend on Render, ensuring a fully functional live demo...`,
    technologies: ["React", "Node.js", "MongoDB", "Prisma"],
    category: "Web Dev",
    github: "https://github.com/Gagan2004/air_bnb_clone_frontend",
    live: "https://air-bnb-clone-frontend.vercel.app/",
    image: "assets/home.jpg",
    "role": "Built entire backend and frontend with full CRUD functionality."
  },
  {
    id: 2,
    title: "File Sharing with PIN",
    description: "A secure file-sharing app using Express and Multer, where users can upload files and share them via a unique 5-digit PIN.",
    technologies: ["Node.js", "Express", "Multer", "UUID"],
    category: "Web Dev",
    github: "https://github.com/Gagan2004/front_comm",
    live: "https://front-comm.onrender.com",  // Change this to your live URL if hosted
    image:"/assets/home.jpg",
    role: "Built the backend with Express.js, handled file uploads using Multer, generated unique PINs, and managed secure file access.",
  },
  {
    id: 3,
    title: "ML Predictor",
    description: "Predictive model for house prices using regression.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    category: "Machine Learning",
    github: "https://github.com/yourname/ml-house-price",
    live: "https://colab.research.google.com/",
    image: "/assets/home.jpg",
    role: "Data cleaning, model training, evaluation, and visualization.",
  },
,  
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
<p dangerouslySetInnerHTML={{ __html: proj.description }}></p>             
<p>
  <strong style={{ color: 'crimson' }}>Technologies:</strong> {proj.technologies.join(", ")}
</p>              <p>
                <strong  style={{ color: 'crimson' }}>Role:</strong> {proj.role}
              </p>
              <div className="project-links">
                <a href={proj.live}  style={{ color: 'crimson' }} target="_blank" rel="noreferrer">
                  🔗 Live
                </a>
                <a href={proj.github} style={{ color: 'crimson' }}  target="_blank" rel="noreferrer">
                   GitHub
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
