"use client"

import { ReactNode, useRef, useEffect, useState } from "react"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export function LazySection({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "50px" 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!hasBeenVisible) {
            setHasBeenVisible(true)
          }
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, hasBeenVisible])

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'animate-in' : ''}`}
      data-visible={isVisible}
    >
      {hasBeenVisible ? children : <div className="h-96 bg-transparent" />}
    </div>
  )
}