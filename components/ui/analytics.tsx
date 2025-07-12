"use client"

import { useEffect } from "react"

// Simple analytics tracking
export function Analytics() {
  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      if (typeof window !== "undefined") {
        console.warn("Page viewed:", window.location.pathname)
        // Here you would integrate with your analytics service
        // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: window.location.pathname })
      }
    }

    // Track section views
    const trackSectionView = (sectionId: string) => {
      console.warn("Section viewed:", sectionId)
      // Here you would track section engagement
    }

    // Track scroll depth
    let maxScrollDepth = 0
    const trackScrollDepth = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth
        
        // Track milestone scroll depths
        if (scrollDepth >= 25 && maxScrollDepth < 25) {
          console.warn("Scroll depth: 25%")
        } else if (scrollDepth >= 50 && maxScrollDepth < 50) {
          console.warn("Scroll depth: 50%")
        } else if (scrollDepth >= 75 && maxScrollDepth < 75) {
          console.warn("Scroll depth: 75%")
        } else if (scrollDepth >= 90 && maxScrollDepth < 90) {
          console.warn("Scroll depth: 90%")
        }
      }
    }

    // Track time on page
    const startTime = Date.now()
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      console.warn("Time on page:", timeSpent, "seconds")
    }

    // Set up event listeners
    trackPageView()
    window.addEventListener("scroll", trackScrollDepth, { passive: true })
    window.addEventListener("beforeunload", trackTimeOnPage)

    // Track section intersections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            trackSectionView(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", trackScrollDepth)
      window.removeEventListener("beforeunload", trackTimeOnPage)
      observer.disconnect()
    }
  }, [])

  return null
}

// Hook for tracking custom events
export const useAnalytics = () => {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    console.warn("Event tracked:", eventName, properties)
    // Here you would send the event to your analytics service
  }

  const trackClick = (elementName: string, location?: string) => {
    trackEvent("click", { element: elementName, location })
  }

  const trackDownload = (fileName: string) => {
    trackEvent("download", { file: fileName })
  }

  const trackContact = (method: string) => {
    trackEvent("contact", { method })
  }

  return {
    trackEvent,
    trackClick,
    trackDownload,
    trackContact,
  }
}