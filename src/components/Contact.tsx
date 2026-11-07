import React, { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Copy,
  Check,
  Mail,
  Send,
  ArrowUpRight,
  MapPin,
  Clock,
} from "lucide-react"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react"

const CURRENT_YEAR = new Date().getFullYear()

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const email = "thanushgadda@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto mb-20">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <Badge variant="default" className="mb-3">
          Get in Touch
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#EDEDED]">
          Let's Build Something Exceptional
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#8A8F98] max-w-lg">
          Whether you want to discuss AI systems, research collaboration, or engineering roles.
        </p>
      </div>

      {/* 2-Column Desktop Split Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Direct Message Form (shadcn Textarea & Button) */}
        <Card className="bg-black border-neutral-900 hover:border-neutral-800 transition-colors p-6 sm:p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-xl flex items-center gap-2 text-white">
              <Mail className="w-5 h-5 text-neutral-300" />
              <span>Send a Quick Note</span>
            </CardTitle>
            <p className="text-xs text-[#8A8F98] mt-1">
              Drop a direct inquiry or collaboration proposal below.
            </p>
          </CardHeader>

          {submitted ? (
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-center space-y-2">
              <div className="inline-flex p-2 rounded-full bg-neutral-900 border border-neutral-700 text-white mb-1">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-sm font-semibold text-white">Message Ready!</h4>
              <p className="text-xs text-[#8A8F98]">
                Thank you, {name || "there"}. You can also email me directly at{" "}
                <span className="text-[#EDEDED] font-mono">{email}</span>.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSubmitted(false)
                  setMessage("")
                }}
                className="mt-3 text-xs"
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#8A8F98] mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Alex Rivera"
                  className="w-full rounded-xl border border-neutral-900 bg-neutral-950 px-3.5 py-2.5 text-sm text-[#EDEDED] placeholder:text-[#8A8F98]/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 focus-visible:border-neutral-700 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#8A8F98] mb-1.5">
                  Message
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, idea, or role..."
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                <span>Submit Inquiry</span>
              </Button>
            </form>
          )}
        </Card>

        {/* Right Column: Direct Info & Social Hub */}
        <div className="space-y-6">
          {/* Email Copy Card */}
          <Card className="bg-black border-neutral-900 hover:border-neutral-800 transition-colors p-6 sm:p-8">
            <h3 className="text-sm font-medium text-[#8A8F98] mb-2 uppercase tracking-wider">
              Direct Contact
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-neutral-900 bg-neutral-950">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#8A8F98]">Email Address</div>
                  <div className="text-sm font-mono font-medium text-[#EDEDED] select-all">
                    {email}
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyEmail}
                className="text-xs shrink-0 w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </Button>
            </div>

            {/* Availability details */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-900">
              <div className="flex items-center gap-2 text-xs text-[#8A8F98]">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>India · UTC+5:30</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#8A8F98]">
                <Clock className="w-4 h-4 text-neutral-500" />
                <span>Quick Response (24h)</span>
              </div>
            </div>
          </Card>

          {/* Social Links Card */}
          <Card className="bg-black border-neutral-900 hover:border-neutral-800 transition-colors p-6 sm:p-8">
            <h3 className="text-sm font-medium text-[#8A8F98] mb-4 uppercase tracking-wider">
              Profiles & Networks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://github.com/thanushgadde01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-900 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <IconBrandGithub className="w-4 h-4 text-[#8A8F98] group-hover:text-[#EDEDED]" />
                  <span className="text-xs font-medium text-[#EDEDED]">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98] group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-900 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <IconBrandLinkedin className="w-4 h-4 text-[#8A8F98] group-hover:text-[#EDEDED]" />
                  <span className="text-xs font-medium text-[#EDEDED]">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98] group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-neutral-900 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <IconBrandX className="w-4 h-4 text-[#8A8F98] group-hover:text-[#EDEDED]" />
                  <span className="text-xs font-medium text-[#EDEDED]">X / Twitter</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8F98] group-hover:text-white transition-colors" />
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer copyright */}
      <footer className="mt-20 pt-8 border-t border-[#1F1F24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8F98]">
        <div>
          Designed & Built by <span className="text-[#EDEDED] font-medium">Thanush Gadde</span>. Powered by Vite + React.
        </div>
        <div>
          © {CURRENT_YEAR} Thanush Gadde. All rights reserved.
        </div>
      </footer>
    </section>
  )
}

export default Contact
