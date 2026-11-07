import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden group"

    const variants = {
      default:
        "bg-black text-[#EDEDED] border border-neutral-800 shadow-[0_0_20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)] hover:border-neutral-600 hover:text-white hover:shadow-[0_0_25px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.25)] active:scale-[0.98]",
      secondary:
        "bg-neutral-950 text-[#EDEDED] border border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900 active:scale-[0.98]",
      outline:
        "border border-neutral-800 bg-black/60 text-[#EDEDED] hover:border-neutral-600 hover:bg-neutral-950 active:scale-[0.98]",
      ghost: "text-[#8A8F98] hover:text-[#EDEDED] hover:bg-neutral-900/50",
      link: "text-white underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-5 py-2 rounded-xl",
      sm: "h-8 px-3.5 rounded-lg text-xs",
      lg: "h-12 px-7 rounded-xl text-base",
      icon: "h-10 w-10 rounded-xl",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
