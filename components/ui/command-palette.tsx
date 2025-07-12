"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "./button"
import { SearchModal } from "./search-modal"
import { KeyboardShortcuts } from "./keyboard-shortcuts"

interface CommandPaletteProps {
  onNavigate: (sectionId: string) => void
}

export function CommandPalette({ onNavigate }: CommandPaletteProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsSearchOpen(true)}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hidden sm:flex items-center gap-2"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search</span>
        <kbd className="px-2 py-1 bg-white/10 rounded text-xs">/</kbd>
      </Button>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={onNavigate}
      />

      <KeyboardShortcuts
        onOpenSearch={() => setIsSearchOpen(true)}
        onNavigateToSection={onNavigate}
      />
    </>
  )
}