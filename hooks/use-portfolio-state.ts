"use client"

import { useState, useEffect, useCallback } from "react"
import { useDebounce } from "./use-debounce";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
]  

export function usePortfolioState() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Debounce mouse position for better performance
  const debouncedMousePosition = useDebounce(mousePosition, 16) // ~60fps

  // Mouse tracking effect with throttling
  useEffect(() => {
    let animationFrameId: number

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  // Scroll tracking effect with throttling
  useEffect(() => {
    const sectionIds = navItems.map(item => item.id)
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let closestSection = sectionIds[0]
          let minDistance = Infinity
          
          sectionIds.forEach(id => {
            const el = document.getElementById(id)
            if (el) {
              const rect = el.getBoundingClientRect()
              const distance = Math.abs(rect.top - 80) // 80px offset for nav
              if (distance < minDistance && rect.bottom > 80) {
                minDistance = distance
                closestSection = id
              }
            }
          })
          
          setActiveSection(closestSection)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }, [])

  return {
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    mousePosition: debouncedMousePosition,
    scrollToSection,
  }
}