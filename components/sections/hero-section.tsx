"use client"

import { Mail, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SkillIcon } from "@/components/ui/skill-icon"

interface HeroSectionProps { 
  scrollToSection: (sectionId: string) => void
}

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }, 
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
]

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex px-4 sm:px-6 lg:px-8 flex-row items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex min-h-screen justify-center items-center py-8 sm:py-0">
            {/* Text Content */}
            <div className="text-center w-full">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse leading-tight">
                ARUNPANDIAN C
              </h1>
              <div className="relative inline-block">
                <p className="text-lg xs:text-xl sm:text-2xl md:text-4xl text-purple-300 mb-6 sm:mb-8 animate-slideInLeft font-semibold">
                  I'm Frontend Developer
                </p>
              </div>

              <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center animate-bounceIn">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-xs sm:text-sm font-bold"
                  style={{ fontSize: '0.6rem' }}
                >
                  <Mail className="w-2 h-2 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="w-auto border-purple-400 text-purple-300 hover:bg-purple-500/20 px-2 py-1 sm:px-4 sm:py-2 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-xs sm:text-sm font-bold"
                  style={{ fontSize: '0.6rem' }}
                  onClick={() => window.open("/Resume.docx", "_blank")}
                >
                  <Download className="w-2 h-2 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Download CV
                </Button>
              </div>
              
              <div className="mt-8 sm:mt-16 md:mt-20 max-w-6xl mx-auto px-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  {skills.map((skill, index) => (
                    <SkillIcon key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
              
              <div className="mt-12 sm:mt-20 md:mt-32 lg:mt-40 animate-bounce">
                <ChevronDown
                  className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-purple-400 cursor-pointer hover:text-purple-300 transition-colors"
                  onClick={() => scrollToSection("about")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}