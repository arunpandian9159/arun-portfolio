import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll utilities
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Animation utilities
export const getAnimationDelay = (index: number, baseDelay: number = 0.2) => {
  return `${index * baseDelay}s`
}

// Theme utilities
export const getStoredTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    return (localStorage.getItem("theme") as "light" | "dark") || "dark"
  }
  return "dark"
}

export const setStoredTheme = (theme: "light" | "dark") => {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme)
  } 
}

// Form utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const createMailtoLink = (to: string, subject: string, body: string): string => {
  const params = new URLSearchParams({
    subject,
    body,
  })
  return `mailto:${to}?${params.toString()}`
}
