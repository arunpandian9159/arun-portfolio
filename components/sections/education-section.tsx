"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const educationData = [
  {
    institution: "Manakula Vinayagar Institute of Technology",
    degree: "Bachelor of Technology in CSE",
    duration: "Jul 2021 - Jun 2025",
    grade: "CGPA – 7.5", 
    location: "Puducherry", 
  }, 
  { 
    institution: "Amalorpavam Higher Secondary School", 
    degree: "Higher Secondary Course (HSC)", 
    duration: "2020 - 2021", 
    grade: "Percentage - 87%",
    location: "Puducherry",
  },
  {
    institution: "Amalorpavam Higher Secondary School", 
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "2018 - 2019",
    grade: "Percentage - 82%",
    location: "Puducherry",
  }, 
]

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 bg-black/20 section-title aos-init aos-animate"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 group aos-init aos-animate"
              data-aos="fade-up"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="flex-1">
                    <CardTitle className="text-lg sm:text-xl text-purple-300 group-hover:text-purple-200 transition-colors">
                      {edu.institution}
                    </CardTitle>
                    <CardDescription className="text-white/80 text-base sm:text-lg mt-2">{edu.degree}</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 self-start">
                    {edu.location}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-white/70">{edu.duration}</span>
                  <span className="text-green-400 font-semibold">{edu.grade}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}