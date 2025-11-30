import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black flex items-center justify-center">
      <div className="max-w-4xl w-full">

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-colors group">
              <div className="p-4 bg-zinc-900 rounded-full border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                <Mail size={32} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a href="mailto:your.email@example.com" className="font-medium text-xl hover:text-green-400 transition-colors">
                  gagank90815@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-green-500/50 transition-colors group">
              <div className="p-4 bg-zinc-900 rounded-full border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={32} className="text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <p className="font-medium text-xl">India</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Gagan2004"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-zinc-900 rounded-full border border-zinc-800 text-gray-400 hover:text-green-400 hover:border-green-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gagan-kaushik-29714b277/"
              target="_blank"
              rel="noreferrer"
              className="p-4 bg-zinc-900 rounded-full border border-zinc-800 text-gray-400 hover:text-green-400 hover:border-green-500/50 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
