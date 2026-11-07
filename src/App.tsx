import React from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import CurvedLoop from "@/components/reactbits/CurvedLoop"
import Projects from "@/components/Projects"
import TechStack from "@/components/TechStack"
import AIFocus from "@/components/AIFocus"
import Contact from "@/components/Contact"
import AeroShards from "@/components/reactbits/AeroShards"

export function App() {
  return (
    <div className="relative min-h-screen bg-black text-[#EDEDED] selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      {/* React Bits AeroShards WebGPU Dynamic Ambient Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <AeroShards
          shardColor="#1f242e"
          accentColor="#151c1c"
          placement="full"
          count={1000}
        />
      </div>

      {/* Top Ambient Subtle Glow */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] pointer-events-none ambient-top-glow z-0"
        aria-hidden="true"
      />

      {/* Navigation (Liquid Glass Header & Floating Dock) */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section with ScrambledText */}
        <AboutMe />

        {/* 3. High-Impact Large Curved Loop Marquee Banner */}
        <div className="relative py-8 border-y border-neutral-900 bg-black/60 backdrop-blur-md overflow-hidden my-10">
          <CurvedLoop
            marqueeText="✦ THANUSH GADDE ✦ AI & MACHINE LEARNING ✦ TRANSFORMERS ✦ LLM INFRASTRUCTURE ✦ RAG SYSTEMS ✦ THREAT MODELING ✦ PYTORCH ✦"
            shape="wave"
            speed={1.4}
            curveAmount={140}
            direction="left"
            fontSize={78}
            fontWeight={800}
            letterSpacing={3}
            color="#222226"
            interactive={true}
            pauseOnHover={true}
            className="font-mono uppercase select-none"
            style={{ minHeight: "160px" }}
          />
        </div>

        {/* 4. Featured Projects (Bento Grid) */}
        <Projects />

        {/* 5. Skills & Tech Stack */}
        <TechStack />

        {/* 6. Core AI Research & System Specialization */}
        <AIFocus />

        {/* 7. Contact & Footer */}
        <Contact />
      </main>
    </div>
  )
}

export default App
