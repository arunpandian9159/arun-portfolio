"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X } from "lucide-react"
import { Button } from "./button"
import { NAV_ITEMS } from "@/lib/constants"
import type { NavItem } from "@/lib/types"

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (sectionId: string) => void
}

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<NavItem[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim()) {
      const filtered = [...NAV_ITEMS].filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      )
      setResults(filtered)
    } else {
      setResults([...NAV_ITEMS])
    }
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
      if (e.key === "/" && !isOpen) {
        e.preventDefault()
        // Open search modal when "/" is pressed
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const handleSelect = (sectionId: string) => {
    onNavigate(sectionId)
    onClose()
    setQuery("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl w-full max-w-lg mx-4">
        <div className="p-4 border-b border-white/10">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-white/60" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search sections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute right-2 top-2 p-1 hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="max-h-64 overflow-y-auto">
          {results.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
            >
              <span className="text-white/90">{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="p-3 border-t border-white/10 text-xs text-white/60 text-center">
          Press <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd> to close
        </div>
      </div>
    </div>
  )
}