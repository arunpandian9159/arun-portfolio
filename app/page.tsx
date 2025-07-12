"use client"

import { AnimatedBackground } from "@/components/layout/animated-background"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { ContactSection } from "@/components/sections/contact-section"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { Analytics } from "@/components/ui/analytics"
import { PerformanceMonitor } from "@/components/ui/performance-monitor"
import { usePortfolioState } from "@/hooks/use-portfolio-state"
import { useAOSAnimation } from "@/hooks/use-aos-animation"
export default function Portfolio() {
  const {
    activeSection,
    isMenuOpen,
    setIsMenuOpen,
    mousePosition,
    scrollToSection,
  } = usePortfolioState()

  useAOSAnimation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden flex">
      <ScrollProgress />
      <AnimatedBackground mousePosition={mousePosition} />
      <Analytics />
      <PerformanceMonitor />
      
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Main Content */}
      <div className="flex-1 ml-0 sm:ml-16 md:ml-20 lg:ml-64">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </div>
      
      <BackToTop />
    </div>
  )
}
