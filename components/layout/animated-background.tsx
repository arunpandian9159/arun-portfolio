"use client"

import React from "react"

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number }
}

export function AnimatedBackground({ mousePosition }: AnimatedBackgroundProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>
      {/* Mouse follower */}
      <div
        className="absolute w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${(mousePosition.x || 0) - 120}px`,
          top: `${(mousePosition.y || 0) - 120}px`,
        }}
      />
    </div>
  )
}