import React from "react"
import { motion } from "motion/react"
import { ArrowRight, Sparkles } from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 overflow-hidden"
    >
      {/* Background Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-dot-matrix"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-neutral-800 bg-black/90 backdrop-blur-sm mb-6 shadow-[0_0_15px_rgba(0,0,0,0.8)] hover:border-neutral-700 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-[#EDEDED] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            AI/ML Engineer · NLP · Transformers · LLM Systems
          </span>
        </motion.div>

        {/* Name Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white max-w-4xl leading-[1.08] drop-shadow-[0_10px_20px_rgba(0,0,0,1)]"
        >
          Thanush Gadde
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="mt-4 text-base sm:text-xl font-medium text-neutral-400 max-w-xl mx-auto tracking-wide"
        >
          Building reliable, production-ready AI architectures.
        </motion.p>

        {/* Call To Action Buttons (Black with effect) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects">
            <button
              type="button"
              className="relative inline-flex items-center gap-2.5 bg-black hover:bg-neutral-950 text-white font-medium rounded-full px-7 py-3.5 text-sm border border-neutral-700 shadow-[0_0_25px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.18)] hover:border-neutral-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.3)] active:scale-95 transition-all cursor-pointer group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </button>
          </a>

          <a
            href="https://github.com/thanushgadde01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="inline-flex items-center gap-2.5 bg-black/80 hover:bg-neutral-900/80 text-neutral-300 hover:text-white font-medium rounded-full px-7 py-3.5 text-sm border border-neutral-800 hover:border-neutral-600 shadow-[0_0_20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)] active:scale-95 transition-all cursor-pointer"
            >
              <IconBrandGithub className="w-4 h-4 text-neutral-400" />
              <span>GitHub Profile</span>
            </button>
          </a>
        </motion.div>

        {/* Quick Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-12 pt-8 border-t border-neutral-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full max-w-2xl"
        >
          <div>
            <div className="text-xl font-bold text-white">NLP / LLMs</div>
            <div className="text-xs text-neutral-500 mt-0.5">Core Specialization</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">RAG & PEFT</div>
            <div className="text-xs text-neutral-500 mt-0.5">LoRA & Quantization</div>
          </div>
          <div>
            <div className="text-xl font-bold text-white">PyTorch</div>
            <div className="text-xs text-neutral-500 mt-0.5">Model Engineering</div>
          </div>
          <div>
            <div className="text-xl font-bold text-emerald-400">Available</div>
            <div className="text-xs text-neutral-500 mt-0.5">For Collaborations</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
