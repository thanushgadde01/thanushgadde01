import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ScrambledText from "@/components/reactbits/ScrambledText"
import {
  GraduationCap,
  Terminal,
  ShieldCheck,
  Award,
} from "lucide-react"

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <Badge variant="outline" className="mb-3 text-neutral-400 border-neutral-800 bg-neutral-950">
          Profile & Background
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          About Me
        </h2>
        <p className="mt-2 text-sm text-neutral-400 max-w-md">
          Academic foundation, research interests, and technical qualifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Scrambled Narrative Card */}
        <Card className="lg:col-span-7 bg-black/90 border-neutral-900 shadow-[0_0_30px_rgba(0,0,0,0.9)] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-neutral-400">
            <Terminal className="w-4 h-4 text-white" />
            <span>developer_profile.md</span>
          </div>

          <div className="space-y-5 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
            <div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                // Executive Overview
              </span>
              <ScrambledText
                className="scrambled-text-demo text-neutral-200"
                effect="scramble"
                radius={100}
                strength={1}
                trail={0.6}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:!#01<>{}[]+=-_~"
                clickBurst
                intro
              >
                I am a Computer Science & Engineering undergraduate and aspiring AI/ML Engineer focused on building practical, production-ready AI systems with Transformer architectures, NLP, Retrieval-Augmented Generation (RAG), and scalable LLM infrastructure.
              </ScrambledText>
            </div>

            <div className="pt-2 border-t border-neutral-900">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                // Lifecycle & Focus
              </span>
              <p className="text-neutral-400 text-sm">
                I enjoy working across the complete machine-learning lifecycle—from data preparation and model fine-tuning to evaluation, API engineering, and deployment. My research focuses on Transformer-based threat modeling, efficient fine-tuning (PEFT/LoRA), and explainable machine learning.
              </p>
            </div>
          </div>
        </Card>

        {/* Qualifications & Education Card */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="bg-black/90 border-neutral-900 p-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">B.Tech in Computer Science & Engineering</h4>
                <p className="text-xs text-neutral-400 mt-1">Undergraduate Degree Program</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                    Data Structures & Algorithms
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                    Machine Learning
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                    Deep Learning & NLP
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-black/90 border-neutral-900 p-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Security & AI Specialization</h4>
                <p className="text-xs text-neutral-400 mt-1">Multi-Modal Threat & Phishing Detection</p>
                <p className="text-xs text-neutral-500 mt-2">
                  Applied research in DeBERTa/RoBERTa contextual representation for zero-day phishing email detection.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-black/90 border-neutral-900 p-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Key Competencies</h4>
                <p className="text-xs text-neutral-400 mt-1">PyTorch · Hugging Face · Transformers · FastAPI · Docker</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
