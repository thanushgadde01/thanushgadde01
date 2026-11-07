import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ShieldAlert,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Database,
  Cpu,
  Layers,
} from "lucide-react"
import { IconBrandGithub } from "@tabler/icons-react"

export const Projects: React.FC = () => {
  // Interactive mini simulation for the Multi-Modal Phishing Detector
  const [selectedSample, setSelectedSample] = useState<"phish" | "clean">("phish")

  const samples = {
    phish: {
      subject: "Urgent: Immediate Security Re-verification Required for SSO Account",
      body: "We detected unauthorized access to your workstation. Please confirm your credentials within 2 hours at https://auth-verify-security-sso-gateway.net/renew to prevent suspension.",
      score: 98.4,
      category: "Credential Harvesting / Phishing",
      indicators: [
        "Domain anomaly: 'auth-verify-security-sso-gateway.net' vs corporate domain",
        "High-urgency psychological coercion trigger ('within 2 hours')",
        "Embedded payload masking detected via heuristic URL scan",
      ],
      level: "Critical Threat",
    },
    clean: {
      subject: "Team Standup Notes & Q4 Roadmap Planning",
      body: "Hi team, please review the sprint burndown chart and upcoming deliverables attached to Jira task ENG-4082 before our 10 AM synchronization call.",
      score: 2.1,
      category: "Benign / Normal Communication",
      indicators: [
        "DKIM, SPF, and DMARC verification: Passed",
        "Internal organizational communication pattern match",
        "Zero malicious tokens or outbound redirects found",
      ],
      level: "Safe / Clean",
    },
  }

  const current = samples[selectedSample]

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <Badge variant="default" className="mb-3">
          Featured Work
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED]">
          Engineered for Production & Scale
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#8A8F98] max-w-lg">
          Focusing on deep learning, transformer-driven threat analysis, and robust LLM pipelines.
        </p>
      </div>

      {/* Bento Grid Layout (3 Columns on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Primary Project: 2-Column Wide Span */}
        <Card className="md:col-span-2 relative overflow-hidden group bg-black border-neutral-900 hover:border-neutral-800 transition-colors duration-150">
          <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white">
                    <ShieldAlert className="w-5 h-5" />
                  </span>
                  <Badge variant="accent">Flagship System</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/thanushgadde01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A8F98] hover:text-[#EDEDED] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <IconBrandGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/thanushgadde01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8A8F98] hover:text-[#EDEDED] transition-colors"
                    aria-label="Live System Demo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#EDEDED] group-hover:text-white transition-colors">
                Multi-Modal Phishing Email & Threat Detection System
              </h3>
              <p className="mt-2 text-sm text-[#8A8F98] leading-relaxed">
                An explainable threat detection engine identifying sophisticated phishing, zero-day payloads,
                and social-engineering emails that bypass standard heuristic spam filters.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {["DeBERTa-v3", "RoBERTa", "PyTorch", "FastAPI", "Transformers", "NLP", "HTML Parsing"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-neutral-950 text-neutral-400 border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive Model Mockup / Inspector */}
            <div className="mt-6 rounded-xl border border-neutral-900 bg-neutral-950 p-4 text-left">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8A8F98]">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span>Model Inference Simulator</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black p-1 rounded-lg border border-neutral-900">
                  <button
                    onClick={() => setSelectedSample("phish")}
                    className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                      selectedSample === "phish"
                        ? "bg-neutral-900 text-white border border-neutral-700"
                        : "text-[#8A8F98] hover:text-[#EDEDED]"
                    }`}
                  >
                    Malicious Sample
                  </button>
                  <button
                    onClick={() => setSelectedSample("clean")}
                    className={`text-xs px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                      selectedSample === "clean"
                        ? "bg-neutral-900 text-white border border-neutral-700"
                        : "text-[#8A8F98] hover:text-[#EDEDED]"
                    }`}
                  >
                    Clean Sample
                  </button>
                </div>
              </div>

              {/* Sample payload details */}
              <div className="space-y-2 text-xs font-mono">
                <div>
                  <span className="text-[#8A8F98]">Subject: </span>
                  <span className="text-[#EDEDED]">{current.subject}</span>
                </div>
                <div className="text-[#8A8F98] line-clamp-2">
                  <span className="text-[#8A8F98]">Body preview: </span>
                  <span className="text-slate-300">{current.body}</span>
                </div>
              </div>

              {/* Score bar */}
              <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#8A8F98]">Threat Probability</span>
                    <span
                      className={`font-mono font-bold ${
                        selectedSample === "phish" ? "text-red-400" : "text-emerald-400"
                      }`}
                    >
                      {current.score}% ({current.level})
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        selectedSample === "phish" ? "bg-red-500" : "bg-emerald-500"
                      }`}
                      style={{ width: `${current.score}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Explainable indicators */}
              <div className="mt-3 flex flex-col gap-1">
                {current.indicators.map((ind, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#8A8F98]">
                    {selectedSample === "phish" ? (
                      <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    )}
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Secondary Project 1: RAG & Vector Retrieval */}
        <Card className="flex flex-col justify-between bg-black border-neutral-900 hover:border-neutral-800 transition-colors duration-150">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white">
                <Database className="w-5 h-5" />
              </span>
              <a
                href="https://github.com/thanushgadde01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8F98] hover:text-[#EDEDED]"
                aria-label="GitHub"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <CardTitle className="text-lg">Hybrid RAG & Vector Engine</CardTitle>
            <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">
              Low-latency semantic document retrieval fusing dense embeddings (BGE) with sparse BM25 reranking for hallucination-resistant LLM workflows.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Qdrant", "ChromaDB", "LangChain", "FastAPI", "Python"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Secondary Project 2: PEFT & Model Quantization */}
        <Card className="flex flex-col justify-between bg-black border-neutral-900 hover:border-neutral-800 transition-colors duration-150">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white">
                <Cpu className="w-5 h-5" />
              </span>
              <a
                href="https://github.com/thanushgadde01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8F98] hover:text-[#EDEDED]"
                aria-label="GitHub"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <CardTitle className="text-lg">PEFT / LoRA Fine-Tuning Pipeline</CardTitle>
            <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">
              Efficient low-rank adaptation and 4-bit QLoRA quantizations across open-weight models (Llama 3, Mistral) with systematic benchmark evaluation.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Hugging Face", "PEFT", "BitsAndBytes", "PyTorch", "LoRA"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Secondary Project 3: Lexical & URL Threat Classifier */}
        <Card className="md:col-span-2 flex flex-col justify-between bg-black border-neutral-900 hover:border-neutral-800 transition-colors duration-150">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-white">
                <Layers className="w-5 h-5" />
              </span>
              <a
                href="https://github.com/thanushgadde01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8A8F98] hover:text-[#EDEDED]"
                aria-label="GitHub"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <CardTitle className="text-lg">Real-Time Threat Telemetry & URL Classifier</CardTitle>
            <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">
              High-throughput asynchronous stream processing for domain reputation queries, lexical entropy checks, and sub-10ms URL maliciousness scoring exported via ONNX Runtime.
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["ONNX", "Scikit-Learn", "Redis", "Docker", "Python", "REST API"].map((t) => (
                <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-800">
                  {t}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Projects
