import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Cpu,
  Terminal,
  Sparkles,
} from "lucide-react"

export const TechStack: React.FC = () => {
  const categories = [
    {
      title: "AI & Deep Learning",
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      description: "Neural architectures, model training, and optimization.",
      skills: [
        "PyTorch",
        "Transformers (Hugging Face)",
        "DeBERTa / RoBERTa",
        "PEFT & LoRA",
        "Model Quantization (4-bit/8-bit)",
        "Scikit-Learn",
        "Transfer Learning",
      ],
    },
    {
      title: "NLP & LLM Infrastructure",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      description: "Retrieval-augmented generation and semantic search.",
      skills: [
        "RAG Architecture",
        "Dense & Sparse Embeddings",
        "Vector DBs (Qdrant, ChromaDB)",
        "BM25 Hybrid Search",
        "RAG Evaluation & Triad Metrics",
        "Tokenization & Preprocessing",
      ],
    },
    {
      title: "Backend & Model Serving",
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      description: "High-performance inference APIs and pipeline deployment.",
      skills: [
        "Python (AsyncIO)",
        "FastAPI",
        "REST API Architecture",
        "ONNX Runtime",
        "Docker Containerization",
        "Redis Caching",
        "PostgreSQL",
      ],
    },
    {
      title: "Engineering & Tools",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      description: "Development lifecycle, CI/CD, and developer tooling.",
      skills: [
        "Git & GitHub Workflows",
        "GitHub Actions (CI/CD)",
        "Linux Environment",
        "TypeScript & React (Vite)",
        "Tailwind CSS",
        "Threat Modeling & Security",
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <Badge variant="default" className="mb-3">
          Capabilities
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED]">
          Technical Arsenal
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#8A8F98] max-w-lg">
          Specialized stack tailored for modern machine learning, natural language processing, and scalable infrastructure.
        </p>
      </div>

      {/* 2x2 Grid on Tablets/Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Card
            key={cat.title}
            className="border-[#1F1F24] hover:border-[#34343D] transition-colors duration-150 bg-[#0F0F11]"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-[#16161A] border border-[#1F1F24]">
                  {cat.icon}
                </span>
                <div>
                  <CardTitle className="text-lg text-[#EDEDED]">{cat.title}</CardTitle>
                  <p className="text-xs text-[#8A8F98] mt-0.5">{cat.description}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#141418] text-[#EDEDED] border border-[#1F1F24] hover:border-indigo-500/40 hover:text-indigo-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default TechStack
