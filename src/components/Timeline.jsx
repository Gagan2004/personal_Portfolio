import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Full-Stack Airbnb Clone",
    description: "Built using Next.js, MongoDB, and Prisma with a full booking and review system.",
  },
  {
    title: "File Sharing System",
    description: "A web-based tool using React and Node.js that allows to store and share files among devices throgh a clean web platform.",
  },
  {
    title: "ML Predictor",
    description: "Predictive model for house prices using regression.",
  },
];

const ProjectTimeline = () => {
  return (
    <section className="py-12 px-6 bg-[#101010] rounded-2xl shadow-[0_0_20px_#00ff88]/20">
      <h2 className="text-3xl text-center text-[#00ff88] font-bold mb-10">My Projects</h2>
      
      <div className="relative border-l-[3px] border-gradient-to-b from-[#00ff88] to-transparent pl-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-10 relative group"
          >
            <div className="absolute -left-5 top-1 w-5 h-5 rounded-full bg-[#00ff88] group-hover:scale-125 transition-transform shadow-[0_0_12px_#00ff88]" />
            
            <div className="ml-2 bg-[#1a1a1a] p-4 rounded-lg shadow-inner border border-[#00ff88]/20 hover:shadow-[0_0_15px_#00ff88]/30 transition-shadow">
              <h3 className="text-xl font-semibold text-[#00ff88]">{item.year} — {item.title}</h3>
              <p className="text-[#cccccc] mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectTimeline;
