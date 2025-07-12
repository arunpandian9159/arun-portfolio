"use client"

import { memo } from "react"
import { OptimizedImage } from "./optimized-image"

interface SkillIconProps {
  skill: {
    name: string
    icon: string
  }
  index: number
}

export const SkillIcon = memo(function SkillIcon({ skill, index }: SkillIconProps) {
  return (
    <div
      className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300 animate-moveLeftToRight"
      style={{
        animationDelay: `${index * 0.2}s`
      }}
    >
      <OptimizedImage
        src={skill.icon}
        alt={skill.name}
        width={48}
        height={48}
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 group-hover:drop-shadow-lg group-hover:drop-shadow-purple-400/50 transition-all duration-300"
      />
      <span className="text-xs sm:text-sm md:text-base text-white/80 group-hover:text-purple-300 transition-colors duration-300 font-medium text-center">
        {skill.name}
      </span>
    </div>
  )
})