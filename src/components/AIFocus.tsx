import React from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react"

export const AIFocus: React.FC = () => {
  const focuses = [
    {
      title: "Contextual NLP & Attention",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      detail:
        "Fine-tuning bidirectional and causal Transformer representations (DeBERTa, RoBERTa, Llama) with specialized attention mechanisms for lexical anomaly detection.",
    },
    {
      title: "RAG & Vector Grounding",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      detail:
        "Designing hybrid retrieval architectures using dense vector embeddings (BGE, Ada) alongside sparse keyword indexers (BM25) to eliminate LLM hallucinations.",
    },
    {
      title: "PEFT & Compute Optimization",
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      detail:
        "Adapting multi-billion parameter architectures on resource-constrained compute via Low-Rank Adaptation (LoRA), QLoRA, and 4-bit/8-bit quantization pipelines.",
    },
    {
      title: "AI in Threat Intelligence",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      detail:
        "Extracting multi-modal features across unstructured email text, MIME headers, structural DOM nodes, and lexical URL token streams for robust cybersecurity defense.",
    },
  ]

  return (
    <section id="ai-focus" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-14">
        <Badge variant="default" className="mb-3">
          Research & Systems
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED]">
          Core Research Focus
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#8A8F98] max-w-lg">
          Bridging theoretical deep learning architectures with production-grade engineering constraints.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {focuses.map((f, i) => (
          <Card
            key={i}
            className="border-[#1F1F24] hover:border-[#34343D] transition-colors p-6 flex flex-col justify-between"
          >
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-[#16161A] border border-[#1F1F24] mb-4">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-[#EDEDED]">{f.title}</h3>
              <p className="text-xs text-[#8A8F98] mt-2 leading-relaxed">{f.detail}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F1F24] flex items-center justify-between text-[11px] font-mono text-indigo-400">
              <span>0{i + 1}</span>
              <span>Active Investigation</span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default AIFocus
