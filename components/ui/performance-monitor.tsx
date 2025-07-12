"use client"

import { useEffect, useState } from "react"

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number
}

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({})

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== 'development') return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: (entry as PerformanceEventTiming).processingStart - entry.startTime }))
            break
          case 'layout-shift':
            if (!(entry as LayoutShift).hadRecentInput) {
              setMetrics(prev => ({ 
                ...prev, 
                cls: (prev.cls || 0) + (entry as LayoutShift).value 
              }))
            }
            break
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming
            setMetrics(prev => ({ 
              ...prev, 
              ttfb: navEntry.responseStart - navEntry.requestStart 
            }))
            break
        }
      }
    })

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })
    } catch (e) {
      console.warn('Performance Observer not supported:', e)
    }

    return () => observer.disconnect()
  }, [])

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-3 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        {metrics.fcp && (
          <div className={`${metrics.fcp < 1800 ? 'text-green-400' : metrics.fcp < 3000 ? 'text-yellow-400' : 'text-red-400'}`}>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        {metrics.lcp && (
          <div className={`${metrics.lcp < 2500 ? 'text-green-400' : metrics.lcp < 4000 ? 'text-yellow-400' : 'text-red-400'}`}>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        {metrics.fid && (
          <div className={`${metrics.fid < 100 ? 'text-green-400' : metrics.fid < 300 ? 'text-yellow-400' : 'text-red-400'}`}>
            FID: {Math.round(metrics.fid)}ms
          </div>
        )}
        {metrics.cls !== undefined && (
          <div className={`${metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}`}>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        {metrics.ttfb && (
          <div className={`${metrics.ttfb < 800 ? 'text-green-400' : metrics.ttfb < 1800 ? 'text-yellow-400' : 'text-red-400'}`}>
            TTFB: {Math.round(metrics.ttfb)}ms
          </div>
        )}
      </div>
    </div>
  )
}