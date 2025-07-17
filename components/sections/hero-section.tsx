"use client"

import { Mail, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SkillIcon } from "@/components/ui/skill-icon"
import { InfiniteSkillsScroll } from "@/components/ui/infinite-skills-scroll"

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
            <div className="text-center w-full pt-20 sm:pt-32 md:pt-40">
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                ARUNPANDIAN C
              </h1>
              <div className="relative inline-block">
                <p className="text-base xs:text-lg sm:text-2xl md:text-4xl text-purple-300 mb-6 sm:mb-8 font-semibold">
                  I'm Frontend Developer
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg font-bold"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-base sm:text-lg font-bold"
                  onClick={() => window.open("/Resume.docx", "_blank")}
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Download CV
                </Button>
              </div>
              
              <div className="mt-20 sm:mt-28 md:mt-32 max-w-2xl mx-auto px-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Skills
                </h2>
                <InfiniteSkillsScroll skills={skills} />
              </div>
              
              <div className="mt-12 sm:mt-20 md:mt-32 lg:mt-40">
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