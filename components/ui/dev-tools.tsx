"use client"

import { useState, useEffect } from "react"
import { Monitor, Zap, Eye, Settings } from "lucide-react"
import { Button } from "./button"

export function DevTools() {
  const [isOpen, setIsOpen] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
  const [showOutlines, setShowOutlines] = useState(false)

  useEffect(() => {
    if (showGrid) {
      document.body.style.backgroundImage = `
        linear-gradient(rgba(255,0,255,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,0,255,0.1) 1px, transparent 1px)
      `
      document.body.style.backgroundSize = '20px 20px'
    } else {
      document.body.style.backgroundImage = 'none'
    }

    return () => {
      document.body.style.backgroundImage = 'none'
    }
  }, [showGrid])

  useEffect(() => {
    if (showOutlines) {
      const style = document.createElement('style')
      style.textContent = `
        * { outline: 1px solid rgba(255,0,0,0.3) !important; }
        *:hover { outline: 2px solid rgba(255,0,0,0.6) !important; }
      `
      document.head.appendChild(style)
      return () => {
        if (document.head.contains(style)) {
          document.head.removeChild(style)
        }
      }
    }
  }, [showOutlines])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed top-20 right-4 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600/80 hover:bg-purple-600 text-white"
      >
        <Settings className="w-4 h-4" />
      </Button>
      
      {isOpen && (
        <div className="absolute top-12 right-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-48">
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Dev Tools
          </h3>
          
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowGrid(!showGrid)}
              className={`w-full justify-start ${showGrid ? 'bg-purple-600/50' : ''}`}
            >
              <Monitor className="w-4 h-4 mr-2" />
              Grid Overlay
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowOutlines(!showOutlines)}
              className={`w-full justify-start ${showOutlines ? 'bg-purple-600/50' : ''}`}
            >
              <Eye className="w-4 h-4 mr-2" />
              Element Outlines
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                console.warn('Performance:', performance.getEntriesByType('navigation'))
                console.warn('Memory:', (performance as unknown as Record<string, unknown>).memory)
              }}
              className="w-full justify-start"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Log Performance
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}