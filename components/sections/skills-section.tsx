"use client"

import { Code, Brain, Trophy, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"

const skillTitles = [
  "Technical Skills",
  "Soft Skills",
  "Achievements",
  "Certifications"
]

export function SkillsSection() {
  // Card data (reuse from previous carousel)
  const skillCards = [
    {
      id: 1,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <span><Code className="w-5 h-5" /></span>
              Frontend Development
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <span><Code className="w-5 h-5" /></span>
              Backend Development
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
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
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Soft Skills
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Adaptability</li>
              <li>Leadership</li>
              <li>Time Management</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Tools & Platforms
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
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
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Professional Experience
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>Frontend Development Intern - Tripmilestone Tours</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Academic Achievements
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>Typewriting - Distinction (Senior)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competitions
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>ICT Learnathon 2023</li>
              <li>Skill-a-thon 2024</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 4,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Advanced Certifications
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>Capgemini Fullstack Course</li>
              <li>Skill-a-thon 2024</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Intermediate Certifications
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
              <li>ICT Learnathon 2023</li>
              <li>Python Certificate</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Professional Certifications
            </h4>
            <ul className="pl-10 text-white/90 text-sm list-disc">
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
      className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 bg-black/20 section-title aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore my technical skills, soft skills, achievements, and certifications
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          {skillTitles.map((title, i) => (
            <div key={i} className="flex-1 text-center text-lg font-semibold text-purple-200">
              {title}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skillCards.map((card, i) => (
            <Card
              key={i}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer aos-init aos-animate"
              data-aos="fade-up"
            >
              <CardContent>
                {card.content}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}