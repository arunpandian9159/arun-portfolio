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
  User,
  GraduationCap,
  Code,
  Award,
  Briefcase,
  ChevronDown,
  Menu,
  X,
  Download, // Re-add Download icon
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add aos-animate class when element comes into view
          entry.target.classList.add("aos-animate")

          // Handle stagger children with dynamic timing
          const children = entry.target.querySelectorAll(".aos-init:not(.aos-animate)")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("aos-animate")
            }, index * 150)
          })
        } else {
          // Remove animation classes when element goes out of view for re-animation
          entry.target.classList.remove("aos-animate")
          const children = entry.target.querySelectorAll(".aos-animate")
          children.forEach((child) => {
            child.classList.remove("aos-animate")
          })
        }
      })
    }, observerOptions)

    // Observe all elements with aos-init class
    const elementsToAnimate = document.querySelectorAll(".aos-init")
    elementsToAnimate.forEach((element) => observer.observe(element))

    return () => {
      elementsToAnimate.forEach((element) => observer.unobserve(element))
    }
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
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  // Update activeSection on scroll
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id);
    const handleScroll = () => {
      let closestSection = sectionIds[0];
      let minDistance = Infinity;
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Distance from top of viewport (positive = below top, negative = above top)
          const distance = Math.abs(rect.top - 80); // 80px offset for nav
          if (distance < minDistance && rect.bottom > 80) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });
      setActiveSection(closestSection);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden flex">
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
          className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 120,
            top: mousePosition.y - 120,
          }}
        />
      </div>

      {/* Vertical Navigation */}
      <nav className="hidden sm:flex fixed left-0 top-0 h-full w-16 md:w-20 lg:w-64 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 flex-col">
        {/* Profile Section */}
        <div className="p-4 lg:p-6 text-center border-b border-white/10">
          <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 relative">
            <img
              src="/images/profile.jpg"
              alt="Arunpandian C"
              className="w-full h-full object-cover object-top rounded-full border-2 border-purple-400"
            />
          </div>
          <div className="hidden lg:block">
            <h3 className="text-white font-semibold text-lg mb-2">Arunpandian C</h3>
            {/* Social Media Icons */}
            <div className="flex justify-center mb-4 items-center space-x-3">
              <a
                href="https://github.com/arunpandian9159"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-purple-500/25"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Github className="w-5 h-5 animate-spin3d" />
              </a>
              <a
                href="https://www.linkedin.com/in/Arunpandian-C"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-purple-500/25"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Linkedin className="w-5 h-5 animate-spin3d" />
              </a>
              <a
                href="mailto:arunpandiancse25@gmail.com"
                className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-purple-500/25"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Mail className="w-5 h-5 animate-spin3d" />
              </a>
              <a
                href="tel:+918072396488"
                className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-purple-500/25"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Phone className="w-5 h-5 animate-spin3d" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-1 flex flex-col px-4 lg:px-6 justify-start my-12 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                activeSection === item.id ? "bg-purple-500/20 text-purple-300" : "text-white/80"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
            <div className="absolute left-0 top-0 h-full w-64 bg-black/80 backdrop-blur-md border-r border-white/10 p-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
                ARUNPANDIAN C
              </div>
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full px-4 py-3 text-left hover:bg-white/10 transition-colors rounded-lg"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex-1 ml-0 sm:ml-16 md:ml-20 lg:ml-64">
        {/* Hero Section */}
        <section id="home" className="min-h-[70vh] sm:min-h-screen relative overflow-hidden">
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex px-4 lg:px-8 flex-row items-center ml-0 mr-0">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex h-screen justify-center items-center my-0">
                {/* Text Content */}
                <div className="text-center">
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    ARUNPANDIAN C
                  </h1>
                  <div className="relative inline-block">
                    <p className="text-lg sm:text-2xl md:text-4xl text-purple-300 mb-6 sm:mb-8 animate-slideInLeft font-semibold">
                      I'm Frontend Developer
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-bounceIn">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-lg font-bold"
                    >
                      <Mail className="w-6 h-6 mr-3" />
                      Get In Touch
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-400 text-purple-300 hover:bg-purple-500/20 px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-lg font-bold"
                      onClick={() => window.open("/Resume.docx", "_blank")}
                    >
                      <Download className="w-6 h-6 mr-3" />
                      Download CV
                    </Button>
                  </div>
                  <div className="mt-10 sm:mt-16 md:mt-20 max-w-6xl mx-auto px-2">
                    <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Skills
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                      {[
                        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
                      ].map((skill, index) => (
                        <div
                          key={skill.name}
                          className="flex flex-col items-center group cursor-pointer transform hover:scale-110 transition-all duration-300 animate-moveLeftToRight"
                          style={{
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 group-hover:drop-shadow-lg group-hover:drop-shadow-purple-400/50 transition-all duration-300" 
                            title={skill.name}
                          />
                          <span className="text-xs sm:text-sm md:text-base text-white/80 group-hover:text-purple-300 transition-colors duration-300 font-medium text-center">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-20 sm:mt-32 md:mt-40 animate-bounce">
                    <ChevronDown
                      className="w-8 h-8 mx-auto text-purple-400 cursor-pointer hover:text-purple-300 transition-colors"
                      onClick={() => scrollToSection("about")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        {/* About Section */}
        <section id="about" className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="mb-12">
              <p className="text-lg text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
                I am an Frontend Developer with a strong foundation in effective communication principles and a
                passion for creating intuitive, user-centered designs. My goal is to enhance user understanding and
                interaction with digital products through clear, accessible, and engaging experiences that support
                usability and drive user satisfaction.
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src="/images/profile.jpg"
                      alt="Arunpandian C"
                      className="w-32 h-40 sm:w-48 sm:h-60 md:w-64 md:h-80 object-cover rounded-lg border-2 border-white/20 shadow-lg"
                    />
                  </div>

                  {/* Personal Information */}
                  <div className="flex-1 mt-6 md:mt-0">
                    <h3 className="text-2xl font-bold text-purple-300 mb-2">Frontend Developer</h3>
                    <p className="text-white/80 mb-8 italic">
                      Passionate about creating seamless digital experiences through thoughtful design and clean code.
                      Dedicated to continuous learning and staying updated with the latest industry trends.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">Birthday:</span>
                          <span className="text-white/90">25 September 2003</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">Phone:</span>
                          <span className="text-white/90">+91 8072396488</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">City:</span>
                          <span className="text-white/90">Puducherry, India</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">College:</span>
                          <span className="text-white/90">Manakula vinayagar Institute of technology</span>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">Age:</span>
                          <span className="text-white/90">21</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">Degree:</span>
                          <span className="text-white/90">B.Tech in CSE</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">Email:</span>
                          <span className="text-white/90">arunpandiancse25@gmail.com</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-purple-300 font-semibold w-20">Job:</span>
                          <span className="text-green-400 font-semibold">Open to Work</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="text-white/80 leading-relaxed">
                        Completed my B.Tech Computer Science Engineering course at Manakula Vinayagar Institute
                        of Technology. I specialize in frontend development with expertise in React, JavaScript, and
                        modern UI frameworks. My experience includes working as a Frontend Development Intern 
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 bg-black/20 section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
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
              ].map((edu, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 group aos-init aos-animate"
                  data-aos="fade-up"
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

        {/* Projects Section */}
        <section id="projects" className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {[
                {
                  id: "vehicle-detection",
                  title: "Vehicle Detection and Identification",
                  description:
                    "A system used to detect and identify vehicles, including number plate detection for security purposes.",
                  tech: ["Python"],
                  teamSize: 3,
                },
                {
                  id: "nft-certification",
                  title: "NFT Based Certification System for digital artwork using Polygon Blockchain",
                  description:
                    "A decentralized certification system for digital artwork leveraging NFT technology on the Polygon blockchain. Ensures authenticity, ownership, and provenance tracking.",
                  tech: ["JavaScript", "Solidity"],
                  teamSize: 3,
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group cursor-pointer aos-init aos-animate"
                  data-aos="fade-up"
                  onClick={() => setSelectedProject(project.id)}
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

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-purple-300">Project Details</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {selectedProject === "nft-certification" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        NFT Based Certification System for Digital Artwork using Polygon Blockchain
                      </h4>
                      <p className="text-white/80 leading-relaxed mb-4">
                        This project presents a decentralized certification system for digital artwork leveraging 
                        Non-Fungible Token (NFT) technology on the Polygon blockchain. The system ensures authenticity, 
                        ownership verification, and provenance tracking for digital art pieces, providing artists and 
                        collectors with a secure and transparent platform for digital art certification.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-lg font-semibold text-purple-300 mb-3">Conference Presentation</h5>
                        <div className="bg-white/5 rounded-lg p-4 mb-4">
                          <img 
                            src="/SRM Conference image.jpg" 
                            alt="Conference Presentation" 
                            className="w-full rounded-lg mb-3"
                          />
                          <p className="text-white/80 text-sm">
                            Presented at the 2nd International Conference on Data Science and Business Systems 
                            (ICDSBS 2025) at SRM Institute of Science and Technology, Chennai.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-purple-300 mb-3">Certificate of Presentation</h5>
                        <div className="bg-white/5 rounded-lg p-4 mb-4">
                          <img 
                            src="/certificate of presentation.png" 
                            alt="Certificate of Presentation" 
                            className="w-full rounded-lg mb-3"
                          />
                          <p className="text-white/80 text-sm">
                            Official certificate recognizing the presentation of the research paper.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Publication Details</h5>
                      <div className="bg-white/5 rounded-lg p-4">
                        <div className="space-y-2">
                          <p className="text-white/90"><strong>Paper ID:</strong> 622</p>
                          <p className="text-white/90"><strong>Conference:</strong> 2nd International Conference on Data Science and Business Systems (ICDSBS 2025)</p>
                          <p className="text-white/90"><strong>Venue:</strong> SRM Institute of Science and Technology, Chennai</p>
                          <p className="text-white/90"><strong>Date:</strong> 17-18 April 2025</p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <a
                              href="https://ieeexplore.ieee.org/document/11031552"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>View Published Paper on IEEE Xplore</span>
                            </a>
                            <a
                              href="/622_Final Camera Ready Copy.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                            >
                              <Download className="w-5 h-5" />
                              <span>Download Research Paper PDF</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Technical Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {["JavaScript", "Solidity", "Polygon Blockchain", "NFT", "Smart Contracts", "Web3"].map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Key Features</h5>
                      <ul className="text-white/80 space-y-2">
                        <li>• Decentralized certification system for digital artwork</li>
                        <li>• NFT-based ownership and authenticity verification</li>
                        <li>• Polygon blockchain integration for cost-effective transactions</li>
                        <li>• Provenance tracking and history maintenance</li>
                        <li>• Smart contract automation for certification processes</li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedProject === "vehicle-detection" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Vehicle Detection and Identification
                      </h4>
                      <p className="text-white/80 leading-relaxed mb-4">
                        A comprehensive system designed to detect and identify vehicles using computer vision 
                        techniques. The system includes advanced number plate detection capabilities for 
                        enhanced security and monitoring purposes.
                      </p>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Technical Stack</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {["Python", "OpenCV", "Machine Learning", "Computer Vision"].map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Key Features</h5>
                      <ul className="text-white/80 space-y-2">
                        <li>• Real-time vehicle detection and tracking</li>
                        <li>• Automatic number plate recognition (ANPR)</li>
                        <li>• Vehicle classification and identification</li>
                        <li>• Security monitoring and surveillance integration</li>
                        <li>• Data logging and reporting capabilities</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-purple-300 mb-3">Project Details</h5>
                      <div className="bg-white/5 rounded-lg p-4">
                        <p className="text-white/90"><strong>Team Size:</strong> 3 members</p>
                        <p className="text-white/90"><strong>Role:</strong> Developer and System Designer</p>
                        <p className="text-white/90"><strong>Duration:</strong> Academic Project</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        <section
          id="skills"
          className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 bg-black/20 section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
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

        {/* Certificates Section */}
        <section
          id="certificates"
          className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certificate Gallery
            </h2>
            <div className="flex justify-center gap-4 md:gap-6">
              <div className="certificate-card w-32 h-80 md:w-40 md:h-96 lg:w-48 lg:h-[28rem]">
                <div className="certificate-card-inner">
                  <img
                    src="/Capgemini.png"
                    alt="Capgemini Fullstack Course Certificate"
                    className="rounded-lg"
                  />
                  <div className="certificate-overlay">
                    <p className="text-white font-semibold text-xs md:text-sm">Capgemini Fullstack Training</p>
                  </div>
                </div>
              </div>
              <div className="certificate-card w-32 h-80 md:w-40 md:h-96 lg:w-48 lg:h-[28rem]">
                <div className="certificate-card-inner">
                  <img
                    src="/Learnathon.png"
                    alt="ICT Learnathon 2023 Certificate"
                    className="rounded-lg"
                  />
                  <div className="certificate-overlay">
                    <p className="text-white font-semibold text-xs md:text-sm">ICT Learnathon 2023</p>
                  </div>
                </div>
              </div>
              <div className="certificate-card w-32 h-80 md:w-40 md:h-96 lg:w-48 lg:h-[28rem]">
                <div className="certificate-card-inner">
                  <img
                    src="/Skill la thon.png"
                    alt="Skill-a-thon 2024 Certificate"
                    className="rounded-lg"
                  />
                  <div className="certificate-overlay">
                    <p className="text-white font-semibold text-xs md:text-sm">UiPath Skill-a-thon 2024</p>
                  </div>
                </div>
              </div>
              <div className="certificate-card w-32 h-80 md:w-40 md:h-96 lg:w-48 lg:h-[28rem]">
                <div className="certificate-card-inner">
                  <img
                    src="/python-certiport.png"
                    alt="Python Certificate"
                    className="rounded-lg"
                  />
                  <div className="certificate-overlay">
                    <p className="text-white font-semibold text-xs md:text-sm">Python Certification</p>
                  </div>
                </div>
              </div>
              <div className="certificate-card w-32 h-80 md:w-40 md:h-96 lg:w-48 lg:h-[28rem]">
                <div className="certificate-card-inner">
                  <img
                    src="/tripxplo intern certificate.png"
                    alt="Tripmilestone Internship Certificate"
                    className="rounded-lg"
                  />
                  <div className="certificate-overlay">
                    <p className="text-white font-semibold text-xs md:text-sm">Frontend Development Internship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 sm:py-16 md:py-20 px-2 sm:px-4 lg:px-8 section-title aos-init aos-animate" data-aos="fade-up">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 8072396488",
                  href: "tel:+918072396488",
                  color: "text-green-400",
                  bgColor: "hover:shadow-green-500/20",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "arunpandiancse25@gmail.com",
                  href: "mailto:arunpandiancse25@gmail.com",
                  color: "text-blue-400",
                  bgColor: "hover:shadow-blue-500/20",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Arunpandian-C",
                  href: "https://www.linkedin.com/in/Arunpandian-C",
                  color: "text-blue-500",
                  bgColor: "hover:shadow-blue-500/20",
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "arunpandian9159",
                  href: "https://github.com/arunpandian9159",
                  color: "text-purple-400",
                  bgColor: "hover:shadow-purple-500/20",
                },
              ].map((contact, index) => (
                <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="group">
                  <Card
                    className={`bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:shadow-2xl ${contact.bgColor} cursor-pointer h-full`}
                  >
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center h-48">
                      <contact.icon
                        className={`w-10 h-10 mx-auto mb-4 ${contact.color} group-hover:scale-125 transition-transform duration-300`}
                      />
                      <h3 className="text-white/90 font-semibold mb-3 text-base">{contact.label}</h3>
                      <p className="text-white/70 text-xs break-all leading-relaxed">{contact.value}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8">
                Ready to collaborate on your next project? Let's create something amazing together!
              </p>
              <Button
                onClick={() => window.open("mailto:arunpandiancse25@gmail.com", "_blank")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-base sm:text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 sm:py-6 md:py-8 px-2 sm:px-4 lg:px-8 border-t border-white/10 bg-black/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-white/60">
              © 2025 Arunpandian C. All rights reserved. Built with passion and creativity.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
