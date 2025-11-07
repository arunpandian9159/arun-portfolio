// Navigation types
export interface NavItem {
  id: string
  label: string
}

// Skill types
export interface Skill {
  name: string
  icon: string
}

// Education types
 export interface Education {
  institution: string
  degree: string
  duration: string
  grade: string
  location: string
}

// Project types
export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  teamSize: number
}

// Contact types
export interface ContactInfo {
  icon: string
  label: string
  value: string
  href: string
  color: string
  bgColor: string
}

// Certificate types
export interface Certificate {
  src: string
  alt: string
  title: string
}

// Personal info types
export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  birthday: string
  age: string
  degree: string
  college: string
  status: string
  profileImage: string
  resume: string
}

// Social links types
export interface SocialLinks {
  github: string
  linkedin: string
  email: string
  phone: string
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  message: string
}

// Animation types
export interface MousePosition {
  x: number
  y: number
}

// Theme types
export type Theme = "light" | "dark"

// Component props types
export interface SectionProps {
  className?: string
}

export interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}