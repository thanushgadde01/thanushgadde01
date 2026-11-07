import React from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import { LiquidGlass } from "@/components/ui/liquid-glass"
import { Button } from "@/components/ui/button"
import {
  IconHome,
  IconUser,
  IconCode,
  IconCpu,
  IconSparkles,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react"
import { ArrowUpRight } from "lucide-react"

export const Navbar: React.FC = () => {
  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full" />,
      href: "#hero",
    },
    {
      title: "About",
      icon: <IconUser className="h-full w-full" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full" />,
      href: "#projects",
    },
    {
      title: "Tech Stack",
      icon: <IconCpu className="h-full w-full" />,
      href: "#tech-stack",
    },
    {
      title: "AI Focus",
      icon: <IconSparkles className="h-full w-full" />,
      href: "#ai-focus",
    },
    {
      title: "Contact",
      icon: <IconMail className="h-full w-full" />,
      href: "#contact",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/thanushgadde01",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/",
    },
  ]

  return (
    <>
      {/* Top Header Bar with Liquid Glass Effect */}
      <header className="fixed top-0 left-0 right-0 z-40">
        <LiquidGlass
          radius={0}
          scale={16}
          aberration={5}
          bevelDepth={10}
          frost={0.6}
          tint={0.3}
          className="border-b border-neutral-900 bg-black/75 shadow-lg backdrop-blur-xl"
        >
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-black border border-neutral-800 flex items-center justify-center font-bold text-sm text-white group-hover:border-neutral-600 transition-colors shadow-inner">
                TG
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-[#EDEDED] leading-none">
                  Thanush Gadde
                </span>
                <span className="text-[11px] text-[#8A8F98] leading-tight">
                  AI/ML Engineer
                </span>
              </div>
            </a>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-neutral-800 text-xs text-[#8A8F98]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open to Opportunities</span>
              </div>

              <a href="#contact">
                <Button size="sm" variant="outline" className="hidden sm:inline-flex text-xs">
                  Get In Touch
                </Button>
              </a>

              <a
                href="https://github.com/thanushgadde01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="text-xs">
                  <span>Resume / GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </LiquidGlass>
      </header>

      {/* Fixed Bottom Floating Dock with Liquid Glass */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </>
  )
}

export default Navbar
