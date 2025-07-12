"use client"

import { Award, Briefcase, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 bg-black/20 section-title aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Technical Skills Card */}
          <Card
            className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 aos-init aos-animate"
            data-aos="fade-up"
          >
            <CardHeader>
              <CardTitle className="text-purple-300">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white/90 font-semibold mb-1">Frontend</h4>
                  <p className="text-white/80">HTML5, CSS3, JavaScript, React.js, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-white/90 font-semibold mb-1">Backend</h4>
                  <p className="text-white/80">Node.js, Express.js, Supabase, Python</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills & Tools Card */}
          <Card
            className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 aos-init aos-animate"
            data-aos="fade-up"
          >
            <CardHeader>
              <CardTitle className="text-purple-300">Soft Skills & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white/90 font-semibold mb-1">Soft Skills</h4>
                  <p className="text-white/80">Problem Solving, Communication, Team Collaboration, Adaptability</p>
                </div>
                <div>
                  <h4 className="text-white/90 font-semibold mb-1">Tools & Platforms</h4>
                  <p className="text-white/80">Git, GitHub, VS Code, Postman, Vercel, cursor</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements & Experience Card */}
          <Card
            className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 aos-init aos-animate"
            data-aos="fade-up"
          >
            <CardHeader>
              <CardTitle className="text-purple-300">Achievements & Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/80">Typewriting - Distinction (Senior)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-5 h-5 text-green-400" />
                  <span className="text-white/80">Frontend Development Intern at Tripmilestone Tours Pvt Ltd</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80">ICT Learnathon 2023, Skill-a-thon 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-purple-400" />
                  <span className="text-white/80">NSS Activities: Cycle Rally, NCC Air Force</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Certifications Card */}
          <Card
            className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 aos-init aos-animate"
            data-aos="fade-up"
          >
            <CardHeader>
              <CardTitle className="text-purple-300">Professional Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-white/90 text-sm">Capgemini Fullstack Course</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span className="text-white/90 text-sm">ICT Learnathon 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-red-400" />
                  <span className="text-white/90 text-sm">Skill-a-thon 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-green-400" />
                  <span className="text-white/90 text-sm">Python Certificate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-white/90 text-sm">MongoDB Basics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-4 h-4 text-cyan-400" />
                  <span className="text-white/90 text-sm">Frontend Development Internship</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}