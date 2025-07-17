import React from "react"
import { SkillIcon } from "./skill-icon"

interface Skill {
  name: string
  icon: string
}

interface InfiniteSkillsScrollProps {
  skills: Skill[]
}

export function InfiniteSkillsScroll({ skills }: InfiniteSkillsScrollProps) {
  return (
    <div className="scroll mx-auto" style={{"--time": "10s"} as React.CSSProperties}>
      <div>
        {skills.map((skill, idx) => (
          <span key={skill.name + idx}>
            <span className="imgBox">
              <img src={skill.icon} alt={skill.name} />
            </span>
            {skill.name}
          </span>
        ))}
      </div>
      <div>
        {skills.map((skill, idx) => (
          <span key={skill.name + "-dup-" + idx}>
            <span className="imgBox">
              <img src={skill.icon} alt={skill.name} />
            </span>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  )
} 