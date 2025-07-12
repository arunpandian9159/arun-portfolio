"use client"

import { useEffect, useState } from 'react'
import { useAdaptiveLoading } from '@/hooks/use-mobile-performance'

interface MobileLoadingProps {
  children: React.ReactNode
}

export function MobileLoading({ children }: MobileLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const { enableAnimations } = useAdaptiveLoading()

  useEffect(() => {
    // Simulate loading time based on device capabilities
    const loadingTime = enableAnimations ? 1000 : 500
    
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingTime)

    return () => clearTimeout(timer)
  }, [enableAnimations])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className={`w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full ${enableAnimations ? 'animate-spin' : ''} mx-auto mb-4`} />
          <h2 className="text-xl font-semibold text-white mb-2">Loading Portfolio</h2>
          <p className="text-purple-300">Optimizing for your device...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-700 rounded ${className}`} />
  )
}

export function ImageSkeleton({ width, height }: { width: number; height: number }) {
  return (
    <div 
      className="animate-pulse bg-gray-700 rounded-lg flex items-center justify-center"
      style={{ width, height }}
    >
      <svg
        className="w-8 h-8 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  )
}