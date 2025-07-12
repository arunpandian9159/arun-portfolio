"use client"

import { useEffect } from "react"

interface KeyboardShortcutsProps {
  onOpenSearch: () => void
  onNavigateToSection: (sectionId: string) => void
}

export function KeyboardShortcuts({ onOpenSearch, onNavigateToSection }: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return
      }

      // Search modal
      if (e.key === "/" || (e.ctrlKey && e.key === "k")) {
        e.preventDefault()
        onOpenSearch()
        return
      }

      // Navigation shortcuts
      const shortcuts: Record<string, string> = {
        "1": "home",
        "2": "about", 
        "3": "education",
        "4": "projects",
        "5": "skills",
        "6": "certificates",
        "7": "contact",
        "h": "home",
        "a": "about",
        "e": "education",
        "p": "projects",
        "s": "skills",
        "c": "contact",
      }

      if (shortcuts[e.key]) {
        e.preventDefault()
        onNavigateToSection(shortcuts[e.key])
      }

      // Scroll to top
      if (e.key === "t" || e.key === "Home") {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }

      // Scroll to bottom
      if (e.key === "b" || e.key === "End") {
        e.preventDefault()
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onOpenSearch, onNavigateToSection])

  return null
}