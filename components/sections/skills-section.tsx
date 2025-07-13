"use client"

import { useState } from "react"
import { 
  Award, 
  Briefcase, 
  User, 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Wrench, 
  Brain,
  Users,
  MessageCircle,
  Zap,
  Star,
  Trophy,
  Target,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  color: string
}

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: Skill[]
  color: string
}

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("technical")

  const technicalSkills: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Palette className="w-5 h-5" />,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "HTML5", level: 95, icon: <Code className="w-4 h-4" />, color: "text-orange-400" },
        { name: "CSS3", level: 90, icon: <Palette className="w-4 h-4" />, color: "text-blue-400" },
        { name: "JavaScript", level: 85, icon: <Zap className="w-4 h-4" />, color: "text-yellow-400" },
        { name: "React.js", level: 80, icon: <Globe className="w-4 h-4" />, color: "text-cyan-400" },
        { name: "Tailwind CSS", level: 88, icon: <Sparkles className="w-4 h-4" />, color: "text-teal-400" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-5 h-5" />,
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 75, icon: <Database className="w-4 h-4" />, color: "text-green-400" },
        { name: "Express.js", level: 70, icon: <Globe className="w-4 h-4" />, color: "text-gray-400" },
        { name: "Python", level: 80, icon: <Code className="w-4 h-4" />, color: "text-blue-400" },
        { name: "Supabase", level: 65, icon: <Database className="w-4 h-4" />, color: "text-green-400" },
        { name: "MongoDB", level: 60, icon: <Database className="w-4 h-4" />, color: "text-green-600" },
      ]
    }
  ]

  const softSkills = [
    { name: "Problem Solving", icon: <Brain className="w-4 h-4" />, color: "text-purple-400" },
    { name: "Communication", icon: <MessageCircle className="w-4 h-4" />, color: "text-blue-400" },
    { name: "Team Collaboration", icon: <Users className="w-4 h-4" />, color: "text-green-400" },
    { name: "Adaptability", icon: <Zap className="w-4 h-4" />, color: "text-yellow-400" },
    { name: "Leadership", icon: <Target className="w-4 h-4" />, color: "text-red-400" },
    { name: "Time Management", icon: <Star className="w-4 h-4" />, color: "text-orange-400" },
  ]

  const tools = [
    { name: "Git", icon: <Code className="w-4 h-4" />, color: "text-orange-400" },
    { name: "GitHub", icon: <Globe className="w-4 h-4" />, color: "text-gray-400" },
    { name: "VS Code", icon: <Code className="w-4 h-4" />, color: "text-blue-400" },
    { name: "Postman", icon: <Wrench className="w-4 h-4" />, color: "text-orange-400" },
    { name: "Vercel", icon: <Globe className="w-4 h-4" />, color: "text-black" },
    { name: "Cursor", icon: <Zap className="w-4 h-4" />, color: "text-purple-400" },
  ]

  const achievements = [
    {
      title: "Typewriting - Distinction (Senior)",
      icon: <Award className="w-5 h-5" />,
      color: "text-yellow-400",
      category: "Academic"
    },
    {
      title: "Frontend Development Intern",
      subtitle: "Tripmilestone Tours Pvt Ltd",
      icon: <Briefcase className="w-5 h-5" />,
      color: "text-green-400",
      category: "Professional"
    },
    {
      title: "ICT Learnathon 2023",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-blue-400",
      category: "Competition"
    },
    {
      title: "Skill-a-thon 2024",
      icon: <Star className="w-5 h-5" />,
      color: "text-purple-400",
      category: "Competition"
    },
    {
      title: "NSS Activities",
      subtitle: "Cycle Rally, NCC Air Force",
      icon: <User className="w-5 h-5" />,
      color: "text-cyan-400",
      category: "Social"
    }
  ]

  const certifications = [
    { name: "Capgemini Fullstack Course", color: "text-blue-400", level: "Advanced" },
    { name: "ICT Learnathon 2023", color: "text-orange-400", level: "Intermediate" },
    { name: "Skill-a-thon 2024", color: "text-red-400", level: "Advanced" },
    { name: "Python Certificate", color: "text-green-400", level: "Intermediate" },
    { name: "MongoDB Basics", color: "text-purple-400", level: "Beginner" },
    { name: "Frontend Development Internship", color: "text-cyan-400", level: "Professional" },
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
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, soft skills, and professional achievements
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/5 backdrop-blur-md border border-white/10">
            <TabsTrigger 
              value="technical" 
              className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 text-white/70"
            >
              <Code className="w-4 h-4 mr-2" />
              Technical
            </TabsTrigger>
            <TabsTrigger 
              value="soft" 
              className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300 text-white/70"
            >
              <Brain className="w-4 h-4 mr-2" />
              Soft Skills
            </TabsTrigger>
            <TabsTrigger 
              value="achievements" 
              className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-300 text-white/70"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger 
              value="certifications" 
              className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-300 text-white/70"
            >
              <Award className="w-4 h-4 mr-2" />
              Certifications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {technicalSkills.map((category, index) => (
                <Card
                  key={category.title}
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.icon}
                      <span>{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                          data-aos="zoom-in"
                          data-aos-delay={skillIndex * 50}
                        >
                          <span className={skill.color}>{skill.icon}</span>
                          <span className="ml-2">{skill.name}</span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="soft" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-blue-300 flex items-center space-x-2">
                    <Brain className="w-5 h-5" />
                    <span>Soft Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <span className={skill.color}>{skill.icon}</span>
                        <span className="ml-2">{skill.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-green-300 flex items-center space-x-2">
                    <Wrench className="w-5 h-5" />
                    <span>Tools & Platforms</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge
                        key={tool.name}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <span className={tool.color}>{tool.icon}</span>
                        <span className="ml-2">{tool.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-green-300 flex items-center space-x-2">
                    <Trophy className="w-5 h-5" />
                    <span>Professional Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {achievements.filter(achievement => achievement.category === "Professional").map((achievement, index) => (
                      <Badge
                        key={achievement.title}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <span className={achievement.color}>{achievement.icon}</span>
                        <span className="ml-2">{achievement.title}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-blue-300 flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Academic Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {achievements.filter(achievement => achievement.category === "Academic").map((achievement, index) => (
                      <Badge
                        key={achievement.title}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <span className={achievement.color}>{achievement.icon}</span>
                        <span className="ml-2">{achievement.title}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-purple-300 flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Competitions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {achievements.filter(achievement => achievement.category === "Competition").map((achievement, index) => (
                      <Badge
                        key={achievement.title}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <span className={achievement.color}>{achievement.icon}</span>
                        <span className="ml-2">{achievement.title}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-cyan-300 flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Social Activities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {achievements.filter(achievement => achievement.category === "Social").map((achievement, index) => (
                      <Badge
                        key={achievement.title}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <span className={achievement.color}>{achievement.icon}</span>
                        <span className="ml-2">{achievement.title}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-yellow-300 flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>Advanced Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {certifications.filter(cert => cert.level === "Advanced").map((cert, index) => (
                      <Badge
                        key={cert.name}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <Award className={`w-4 h-4 ${cert.color}`} />
                        <span className="ml-2">{cert.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-orange-300 flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span>Intermediate Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {certifications.filter(cert => cert.level === "Intermediate").map((cert, index) => (
                      <Badge
                        key={cert.name}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <Star className={`w-4 h-4 ${cert.color}`} />
                        <span className="ml-2">{cert.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-green-300 flex items-center space-x-2">
                    <Briefcase className="w-5 h-5" />
                    <span>Professional Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {certifications.filter(cert => cert.level === "Professional").map((cert, index) => (
                      <Badge
                        key={cert.name}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <Briefcase className={`w-4 h-4 ${cert.color}`} />
                        <span className="ml-2">{cert.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-blue-300 flex items-center space-x-2">
                    <Code className="w-5 h-5" />
                    <span>Beginner Certifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {certifications.filter(cert => cert.level === "Beginner").map((cert, index) => (
                      <Badge
                        key={cert.name}
                        variant="outline"
                        className="bg-white/5 border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        <Code className={`w-4 h-4 ${cert.color}`} />
                        <span className="ml-2">{cert.name}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}