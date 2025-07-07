"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  User,
  GraduationCap,
  Code,
  Award,
  Briefcase,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>

        {/* Mouse follower */}
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ARUNPANDIAN C
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                    activeSection === item.id ? "bg-purple-500/20 text-purple-300" : "text-white/80"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 animate-slideDown">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-white/10 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              ARUNPANDIAN C
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-8 animate-slideInLeft">
              Aspiring UI/UX Designer & Frontend Developer
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
              Passionate about creating intuitive, user-centered designs that enhance user understanding and interaction
              with digital products. Committed to crafting clear, accessible, and engaging experiences that support
              usability and drive user satisfaction.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounceIn">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown
              className="w-8 h-8 mx-auto text-purple-400 cursor-pointer hover:text-purple-300 transition-colors"
              onClick={() => scrollToSection("about")}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <CardContent className="p-8">
              <p className="text-lg text-white/90 leading-relaxed text-center">
                I am an aspiring UI/UX designer with a strong foundation in effective communication principles and a
                passion for creating intuitive, user-centered designs. My goal is to enhance user understanding and
                interaction with digital products through clear, accessible, and engaging experiences that support
                usability and drive user satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {[
              {
                institution: "Manakula Vinayagar Institute of Technology",
                degree: "Bachelor of Technology in CSE",
                duration: "Jul 2021 - Jun 2025",
                grade: "CGPA – 7.5 (7th semester)",
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
            ].map((edu, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-purple-300 group-hover:text-purple-200 transition-colors">
                        {edu.institution}
                      </CardTitle>
                      <CardDescription className="text-white/80 text-lg mt-2">{edu.degree}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                      {edu.location}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">{edu.duration}</span>
                    <span className="text-green-400 font-semibold">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Vehicle Detection and Identification",
                description:
                  "A system used to detect and identify vehicles, including number plate detection for security purposes.",
                tech: ["Python"],
                teamSize: 3,
              },
              {
                title: "NFT Based Certification System",
                description:
                  "A decentralized certification system for digital artwork leveraging NFT technology on the Polygon blockchain. Ensures authenticity, ownership, and provenance tracking.",
                tech: ["JavaScript", "Solidity"],
                teamSize: 3,
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300 group-hover:text-purple-200 transition-colors flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-white/60">Team Size: {project.teamSize}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-300">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white/90 font-semibold mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/90 font-semibold mb-2">Software</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Word", "Excel"].map((software) => (
                        <Badge
                          key={software}
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition-colors"
                        >
                          {software}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-purple-300">Achievements & Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-white/90">Typewriting - Distinction (Senior)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-green-400" />
                    <span className="text-white/90">Frontend Development Intern at Tripmilestone Tours Pvt Ltd</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-400" />
                    <span className="text-white/90">ICT Learnathon 2023, Skill-a-thon 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-purple-400" />
                    <span className="text-white/90">NSS Activities: Cycle Rally, NCC Air Force</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 8072396488",
                href: "tel:+918072396488",
                color: "text-green-400",
              },
              {
                icon: Mail,
                label: "Email",
                value: "arunpandiancse25@gmail.com",
                href: "mailto:arunpandiancse25@gmail.com",
                color: "text-blue-400",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "Arunpandian-C",
                href: "https://www.linkedin.com/in/Arunpandian-C",
                color: "text-blue-500",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "arunpandian9159",
                href: "https://github.com/arunpandian9159",
                color: "text-purple-400",
              },
            ].map((contact, index) => (
              <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <contact.icon
                      className={`w-8 h-8 mx-auto mb-4 ${contact.color} group-hover:scale-125 transition-transform duration-300`}
                    />
                    <h3 className="text-white/90 font-semibold mb-2">{contact.label}</h3>
                    <p className="text-white/70 text-sm break-all">{contact.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-white/80 text-lg mb-8">
              Ready to collaborate on your next project? Let's create something amazing together!
            </p>
            <Button
              onClick={() => window.open("mailto:arunpandiancse25@gmail.com", "_blank")}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">© 2024 Arunpandian C. All rights reserved. Built with passion and creativity.</p>
        </div>
      </footer>
    </div>
  )
}
