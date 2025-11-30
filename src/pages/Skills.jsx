import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Cpu, Brain, Wrench, BookOpen } from "lucide-react";

const skills = [
  {
    category: "Languages",
    color: "from-green-500 to-emerald-500",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "C++", level: 90 },
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Web Development",
    color: "from-emerald-500 to-teal-500",
    icon: <Code className="w-6 h-6" />,
    items: [
      { name: "React.js", level: 93 },
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Django", level: 82 },
      { name: "Tailwind CSS", level: 95 },
      { name: "MongoDB", level: 87 },
    ],
  },
  {
    category: "Machine Learning",
    color: "from-teal-500 to-cyan-500",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 83 },
      { name: "Scikit-learn", level: 88 },
      { name: "NumPy", level: 90 },
      { name: "Pandas", level: 92 },
    ],
  },
  {
    category: "Gen-AI & Automation",
    color: "from-lime-500 to-green-500",
    icon: <Cpu className="w-6 h-6" />,
    items: [
      { name: "OpenAI / Groq", level: 90 },
      { name: "LangChain", level: 87 },
      { name: "RAG", level: 85 },
      { name: "Vector DBs", level: 82 },
      { name: "AI Agents", level: 88 },
      { name: "n8n Workflows", level: 84 },
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-green-400 to-lime-400",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Postman", level: 88 },
      { name: "Vercel", level: 85 },
      { name: "Vite", level: 87 },
      { name: "Prisma", level: 84 },
      { name: "Firebase", level: 83 },
    ],
  },
  {
    category: "Computer Science",
    color: "from-cyan-500 to-sky-500",
    icon: <BookOpen className="w-6 h-6" />,
    items: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 88 },
      { name: "OOP", level: 92 },
      { name: "DBMS", level: 87 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillsPage() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
            Technical Arsenal
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive showcase of my technical expertise across multiple domains, from full-stack development to AI engineering.
        </p>

        {/* Stats Bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900/50 border border-green-500/20 rounded-xl px-8 py-4 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-green-400 mb-1">{skills.reduce((acc, cat) => acc + cat.items.length, 0)}</div>
            <div className="text-gray-400 font-medium">Total Skills</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-zinc-900/50 border border-emerald-500/20 rounded-xl px-8 py-4 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold text-emerald-400 mb-1">{skills.length}</div>
            <div className="text-gray-400 font-medium">Domains</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ category, items, color, icon }) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="group relative bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              {/* Category Header */}
              <div className="relative flex items-center gap-4 mb-8">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                  <div className="text-black">
                    {icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{category}</h2>
                  <div className="text-xs text-gray-500 mt-1 font-mono">
                    {items.length} SKILLS
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <ul className="relative space-y-4">
                {items.map(({ name, level }) => (
                  <li
                    key={name}
                    className="group/item relative"
                    onMouseEnter={() => setHoveredSkill(name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Item */}
                    <div className="relative z-10 flex items-center gap-3 mb-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color}`} />
                      <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors flex-1">{name}</span>
                      <span className="text-xs font-mono text-gray-500 group-hover/item:text-green-400 transition-colors">{level}%</span>
                    </div>

                    {/* Progress Bar Background */}
                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      {/* Animated Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${color} rounded-full opacity-70 group-hover/item:opacity-100 transition-opacity`}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto mt-20 text-center"
      >
        <p className="text-sm text-gray-500 font-mono">
          // Continuously learning and expanding my skillset
        </p>
      </motion.div>
    </div>
  );
}