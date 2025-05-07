import React from "react";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiDocker,
  SiVercel,
  SiPostman,
  SiFirebase,
  SiGraphql,
  SiSocketdotio,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python",    icon: <SiPython /> },
      { name: "C++",       icon: <SiCplusplus /> },
      { name: "Java",      icon: <FaJava /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React",       icon: <SiReact /> },
      { name: "Tailwind CSS",icon: <SiTailwindcss /> },
      { name: "HTML5",       icon: <SiHtml5 /> },
      { name: "CSS3",        icon: <SiCss3 /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Prisma",  icon: <FaDatabase /> },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git",    icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Postman",icon: <SiPostman /> },
    ],
  },
  {
    category: "Others",
    items: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "GraphQL",  icon: <SiGraphql /> },
      { name: "Socket.IO",icon: <SiSocketdotio /> },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-8">
      <h1 className="text-5xl font-extrabold text-center mb-12
                     bg-clip-text text-transparent bg-gradient-to-r
                     from-green-400 to-blue-500">
        My Technical Skills
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, items }) => (
          <div
            key={category}
            className="relative bg-gray-800 rounded-2xl p-6 overflow-hidden
                       before:absolute before:inset-0 before:bg-gradient-to-tr
                       before:from-purple-600 before:to-indigo-600 before:opacity-20
                       shadow-lg transform transition-transform hover:scale-105"
          >
            <h2 className="relative text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
              {category}
            </h2>
            <ul className="relative grid grid-cols-2 gap-4">
              {items.map(({ name, icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-3 bg-gray-700 bg-opacity-50
                             px-4 py-2 rounded-lg backdrop-blur-sm
                             hover:bg-opacity-80 transition-colors"
                >
                  <span className="text-2xl text-green-400">{icon}</span>
                  <span className="text-sm font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
