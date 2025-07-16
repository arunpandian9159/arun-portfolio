"use client"

import { Code, Brain, Trophy, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import React from "react"

export function SkillsSection() {
  // Card data (reuse from previous carousel)
  const skillCards = [
    {
      id: 1,
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <span><Code className="w-5 h-5" /></span>
              Frontend Development
            </h4>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"].map((name, i) => (
                <Badge key={name} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300">
                  <span className={[
                    "text-orange-400",
                    "text-blue-400",
                    "text-yellow-400",
                    "text-cyan-400",
                    "text-teal-400"
                  ][i]}>
                    <Code className="w-3 h-3" />
                  </span>
                  <span className="ml-1 text-xs">{name}</span>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <span><Code className="w-5 h-5" /></span>
              Backend Development
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "Python", "Supabase", "MongoDB"].map((name, i) => (
                <Badge key={name} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300">
                  <span className={[
                    "text-green-400",
                    "text-gray-400",
                    "text-blue-400",
                    "text-green-400",
                    "text-green-600"
                  ][i]}>
                    <Code className="w-3 h-3" />
                  </span>
                  <span className="ml-1 text-xs">{name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Soft Skills",
      icon: <Brain className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Leadership", "Time Management"].map((name, i) => (
                <Badge key={name} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300">
                  <span className={[
                    "text-purple-400",
                    "text-blue-400",
                    "text-green-400",
                    "text-yellow-400",
                    "text-red-400",
                    "text-orange-400"
                  ][i]}>
                    <Brain className="w-3 h-3" />
                  </span>
                  <span className="ml-1 text-xs">{name}</span>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "VS Code", "Postman", "Vercel", "Cursor"].map((name, i) => (
                <Badge key={name} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300">
                  <span className={[
                    "text-orange-400",
                    "text-gray-400",
                    "text-blue-400",
                    "text-orange-400",
                    "text-black",
                    "text-purple-400"
                  ][i]}>
                    <Code className="w-3 h-3" />
                  </span>
                  <span className="ml-1 text-xs">{name}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Achievements",
      icon: <Trophy className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Professional Experience
            </h4>
            <div className="space-y-2">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start">
                <Trophy className="w-3 h-3 text-green-400" />
                <span className="ml-2 text-xs">Frontend Development Intern - Tripmilestone Tours</span>
              </Badge>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Academic Achievements
            </h4>
            <div className="space-y-2">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start">
                <Award className="w-3 h-3 text-yellow-400" />
                <span className="ml-2 text-xs">Typewriting - Distinction (Senior)</span>
              </Badge>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Competitions
            </h4>
            <div className="space-y-2">
              {["ICT Learnathon 2023", "Skill-a-thon 2024"].map((title, i) => (
                <Badge key={title} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start">
                  <Trophy className={`w-3 h-3 ${["text-blue-400", "text-purple-400"][i]}`} />
                  <span className="ml-2 text-xs">{title}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Certifications",
      icon: <Award className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Advanced Certifications
            </h4>
            <div className="space-y-2">
              {["Capgemini Fullstack Course", "Skill-a-thon 2024"].map((name, i) => (
                <Badge key={name} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start">
                  <Award className={`w-3 h-3 ${["text-blue-400", "text-red-400"][i]}`} />
                  <span className="ml-2 text-xs">{name}</span>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-pink-300 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Intermediate Certifications
            </h4>
            <div className="space-y-2">
              {["ICT Learnathon 2023", "Python Certificate"].map((name, i) => (
                <Badge key={name} variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start">
                  <Award className={`w-3 h-3 ${["text-orange-400", "text-green-400"][i]}`} />
                  <span className="ml-2 text-xs">{name}</span>
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-purple-400 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Professional Certifications
            </h4>
            <div className="space-y-2">
              <Badge variant="outline" className="bg-white/10 border-white/20 text-white/90 hover:bg-white/20 transition-all duration-300 w-full justify-start">
                <Award className="w-3 h-3 text-cyan-400" />
                <span className="ml-2 text-xs">Frontend Development Internship</span>
              </Badge>
            </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {skillCards.map((card) => (
            <Card
              key={card.id}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer aos-init aos-animate"
              data-aos="fade-up"
            >
              <CardHeader>
                <CardTitle className="text-xl text-purple-300 group-hover:text-purple-200 transition-colors flex items-center gap-2">
                  {card.icon}
                  {card.title}
                </CardTitle>
              </CardHeader>
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