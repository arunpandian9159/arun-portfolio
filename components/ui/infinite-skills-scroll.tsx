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
  // Duplicate the skills array for seamless looping
  const skillList = [...skills, ...skills]

  return (
    <div className="infinite-scroll-container">
      <div className="infinite-scroll-track gap-8">
        {skillList.map((skill, idx) => (
          <SkillIcon key={skill.name + idx} skill={skill} index={idx} />
        ))}
      </div>
    </div>
  )
} 