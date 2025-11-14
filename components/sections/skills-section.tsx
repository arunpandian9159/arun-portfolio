"use client"

import React from "react"
import { Code, Brain, Trophy, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const cardAccents = [
  "from-purple-500 to-pink-500",
  "from-blue-500 to-cyan-500", 
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-pink-500"
]

const cardIcons = [
  <Code className="w-12 h-12 mx-auto drop-shadow-lg text-purple-400/80" key="tech" />, 
  <Brain className="w-12 h-12 mx-auto drop-shadow-lg text-blue-400/80" key="soft" />, 
  <Trophy className="w-12 h-12 mx-auto drop-shadow-lg text-green-400/80" key="achieve" />, 
  <Award className="w-12 h-12 mx-auto drop-shadow-lg text-yellow-400/80" key="cert" />
]

export function SkillsSection() {
  const skillCards = [
    {
      id: 1,
      title: "Technical Skills",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-purple-300 flex items-center gap-2 mt-2">
              <Code className="w-5 h-5" />
              Frontend Development
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-pink-300 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Backend Development 
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Supabase</li>
              <li>MongoDB</li>
            </ul>
          </div>  
        </div>
      ) 
    },
    { 
      id: 2,
      title: "Soft Skills",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-blue-300 flex items-center gap-2 mt-2">
              <Brain className="w-5 h-5" />
              Soft Skills
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Adaptability</li>
              <li>Time Management</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Tools & Platforms
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Vercel</li>
              <li>Cursor</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Achievements",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-green-300 flex items-center gap-2 mt-2">
              <Trophy className="w-5 h-5" />
              Professional Experience
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Frontend Development Intern - Tripmilestone Tours</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-pink-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Academic Achievements
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Typewriting - Distinction (Senior)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-purple-300 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competitions
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>ICT Learnathon 2023</li>
              <li>Skill-a-thon 2024</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Certifications",
      content: (
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-yellow-300 flex items-center gap-2 mt-2">
              <Award className="w-5 h-5" />
              Advanced Certifications
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Capgemini Fullstack Course</li>
              <li>Skill-a-thon 2024</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-pink-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Intermediate Certifications
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>ICT Learnathon 2023</li>
              <li>Python Certificate</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Professional Certifications
            </h4>
            <ul className="pl-8 text-white/90 text-lg list-disc">
              <li>Frontend Development Internship</li>
            </ul>
          </div>
        </div>
      )
    }
  ]

  return (
    <section
      id="skills"
      className="relative py-14 sm:py-20 md:py-28 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 section-title aos-init aos-animate overflow-x-hidden"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Skills & Expertise
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore my technical skills, soft skills, achievements, and certifications
          </p>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCards.map((card, i) => (
            <Card
              key={i}
              className={`relative group bg-white/10 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 overflow-hidden rounded-2xl p-0 min-h-[420px] flex flex-col justify-start items-center before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-gradient-to-r ${cardAccents[i]} before:rounded-t-2xl before:z-10`}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
            >
              <div className="relative z-20 flex flex-col items-center w-full h-full p-7 pt-8">
                <div className="mb-3">{cardIcons[i]}</div>
                <div className="text-xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
                  {card.title}
                </div>
                <CardContent className="p-0 w-full">
                  {card.content}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
    </section>
  )
}