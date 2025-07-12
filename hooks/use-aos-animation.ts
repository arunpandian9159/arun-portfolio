"use client"

import { useEffect } from "react"

export function useAOSAnimation() {
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
}