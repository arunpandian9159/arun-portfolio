"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  connectionType: string
  effectiveType: string
  downlink: number
  rtt: number
  saveData: boolean
}

interface DeviceMemory {
  deviceMemory?: number
}

export function useMobilePerformance() {
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics | null>(null)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false)

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return

    // Get network information
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

    if (connection) {
      const metrics: PerformanceMetrics = {
        connectionType: connection.type || 'unknown',
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0,
        saveData: connection.saveData || false
      }
      setPerformanceMetrics(metrics)

      // Determine if we should reduce animations based on connection
      const shouldReduce = 
        metrics.saveData || 
        metrics.effectiveType === 'slow-2g' || 
        metrics.effectiveType === '2g' ||
        metrics.downlink < 1.5

      setShouldReduceAnimations(shouldReduce)
    }

    // Check device memory
    const deviceMemory = (navigator as DeviceMemory).deviceMemory
    const isLowMemory = deviceMemory ? deviceMemory <= 4 : false

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Determine if it's a low-end device
    const lowEnd = isLowMemory || prefersReducedMotion || 
      (connection && (connection.saveData || connection.effectiveType === 'slow-2g'))

    setIsLowEndDevice(lowEnd)

    // Listen for connection changes
    const handleConnectionChange = () => {
      if (connection) {
        const newMetrics: PerformanceMetrics = {
          connectionType: connection.type || 'unknown',
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          saveData: connection.saveData || false
        }
        setPerformanceMetrics(newMetrics)

        const shouldReduce = 
          newMetrics.saveData || 
          newMetrics.effectiveType === 'slow-2g' || 
          newMetrics.effectiveType === '2g' ||
          newMetrics.downlink < 1.5

        setShouldReduceAnimations(shouldReduce)
      }
    }

    if (connection) {
      connection.addEventListener('change', handleConnectionChange)
    }

    return () => {
      if (connection) {
        connection.removeEventListener('change', handleConnectionChange)
      }
    }
  }, [])

  return {
    performanceMetrics,
    isLowEndDevice,
    shouldReduceAnimations,
    isSlowConnection: performanceMetrics?.effectiveType === 'slow-2g' || performanceMetrics?.effectiveType === '2g',
    isSaveDataEnabled: performanceMetrics?.saveData || false
  }
}

export function useAdaptiveLoading() {
  const { isLowEndDevice, shouldReduceAnimations, isSlowConnection } = useMobilePerformance()

  return {
    // Reduce image quality for low-end devices
    imageQuality: isLowEndDevice ? 60 : 85,
    
    // Disable heavy animations on slow connections
    enableAnimations: !shouldReduceAnimations,
    
    // Lazy load more aggressively on slow connections
    lazyLoadMargin: isSlowConnection ? '50px' : '200px',
    
    // Reduce animation duration for low-end devices
    animationDuration: isLowEndDevice ? 0.2 : 0.5,
    
    // Enable preloading only on fast connections
    enablePreloading: !isSlowConnection && !isLowEndDevice
  }
}