import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "accent"
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "border-transparent bg-indigo-600/15 text-indigo-400 border border-indigo-500/30",
    secondary: "border-[#1F1F24] bg-[#16161A] text-[#8A8F98]",
    outline: "border-[#1F1F24] text-[#EDEDED]",
    success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    accent: "border-sky-500/30 bg-sky-500/10 text-sky-400",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

