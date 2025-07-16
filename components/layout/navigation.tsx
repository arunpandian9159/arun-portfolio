"use client"

import React from "react"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  User,
  GraduationCap,
  Code,
  Award,
  Menu,
  X,
  Home as HomeIcon, // Add Home icon
  Brain // Add Brain icon
} from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

interface NavigationProps {
  activeSection: string
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
}

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon }, // Use Home icon
  { id: "about", label: "About", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Brain }, // Use Brain icon
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
]

export function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed left-0 top-0 h-full w-16 md:w-20 lg:w-64 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 flex-col">
        {/* Profile Section */}
        <div className="p-4 lg:p-6 text-center border-b border-white/10">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-4 relative">
            <OptimizedImage
              src="/images/profile.jpg"
              alt="Arunpandian C"
              width={80}
              height={80}
              className="w-full h-full object-cover object-top rounded-full border-2 border-purple-400"
              priority
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
        <div className="flex-1 flex flex-col px-2 md:px-4 lg:px-6 justify-start my-8 md:my-12 space-y-2 md:space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center space-x-3 px-2 md:px-3 py-2 md:py-3 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105 ${
                activeSection === item.id ? "bg-purple-500/20 text-purple-300" : "text-white/80"
              }`}
            >
              <item.icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              <span className="hidden lg:inline text-sm lg:text-base">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/10 hover:bg-slate-800/90 transition-all duration-300 hover:scale-110 shadow-lg"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-md border-l border-white/10 p-6 transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Profile Section */}
            <div className="text-center mb-8 pt-16">
              <div className="w-20 h-20 mx-auto mb-4 relative">
                <OptimizedImage
                  src="/images/profile.jpg"
                  alt="Arunpandian C"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-top rounded-full border-2 border-purple-400"
                  priority
                />
              </div>
              <h3 className="text-white font-semibold text-xl mb-4">Arunpandian C</h3>
              
              {/* Mobile Social Media Icons */}
              <div className="flex justify-center mb-6 items-center space-x-4">
                <a
                  href="https://github.com/arunpandian9159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Arunpandian-C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:arunpandiancse25@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="tel:+918072396488"
                  className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/20"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-4 w-full px-4 py-4 text-left hover:bg-white/10 transition-all duration-300 rounded-xl transform hover:scale-105 ${
                    activeSection === item.id ? "bg-purple-500/20 text-purple-300" : "text-white/90"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-lg font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}