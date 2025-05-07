import React from "react";
import { Sparkles } from "lucide-react"; // Optional icon for visual flair

const FunFacts = () => {
  const facts = [
    "🛠️ I once built an entire Airbnb clone, backend-first!",
    "🎙️ I use AI voices + stock visuals to craft reels that HIT HARD.",
    "👾 Huge fan of animated storytelling — especially dark, philosophical plots.",
    "🧠 I geek out over stealth automation and LLM-based tools.",
    "🌀 I designed my portfolio based on the Omnitrix... yes, Ben 10 is goated."
  ];

  return (
    <section className="mt-10 bg-[#0d0d0d] text-[#cccccc] p-6 rounded-2xl border border-[#00ff88]/30 shadow-[0_0_30px_#00ff88]/10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-[#00ff88] mb-3 text-center flex items-center justify-center gap-2">
        <Sparkles className="text-[#00ff88]" /> Fun Facts
      </h2>
      <ul className="list-disc list-inside space-y-2 text-base leading-relaxed text-center sm:text-left">
        {facts.map((fact, idx) => (
          <li key={idx} className="hover:text-white transition duration-200">{fact}</li>
        ))}
      </ul>
    </section>
  );
};

export default FunFacts;
