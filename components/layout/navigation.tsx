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
} from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

interface NavigationProps {
  activeSection: string
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
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

export function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <nav className="hidden sm:flex fixed left-0 top-0 h-full w-16 md:w-20 lg:w-64 bg-slate-900/95 backdrop-blur-md border-r border-white/10 z-50 flex-col">
      {/* Profile Section */}
      <div className="p-4 lg:p-6 text-center border-b border-white/10">
        <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 relative">
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
  )
}