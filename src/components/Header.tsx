'use client'

import { useState, useEffect } from 'react'
import { Button } from './ui/button'

interface NavItem {
  name: string
  url: string
  id: string
}

interface HeaderProps {
  navigation: NavItem[]
}

export function Header({ navigation }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg shadow-[#FFC107]/10 backdrop-blur-md bg-black/95' : ''
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-24">
        <div className="flex items-center">
          <a href="/" className="text-[#FFC107] hover:text-[#FFC107]/80 transition-all" aria-label="Jeremiah Agenyi - Home">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect
                  x="5"
                  y="5"
                  width="90"
                  height="90"
                  stroke="#FFC107"
                  strokeWidth="3"
                  fill="none"
                  rx="4"
                />
                <rect
                  x="15"
                  y="15"
                  width="20"
                  height="20"
                  fill="#00BFA5"
                  rx="2"
                />
                <text
                  x="50%"
                  y="58%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#FFC107"
                  fontSize="36"
                  fontFamily="SF Mono, Monaco, Inconsolata, Courier New, monospace"
                >
                  JA
                </text>
              </g>
            </svg>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item, idx) => (
            <a
              key={item.id}
              href={item.url}
              className="group flex items-center gap-2 hover:text-[#FFC107] transition-all"
            >
              <span className="text-[#FFC107] font-mono text-sm">0{idx + 1}.</span>
              <span className="text-[#ccd6f6]">{item.name}</span>
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="ml-4 border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 rounded-sm transition-all"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#ccd6f6] hover:text-[#FFC107] transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-[#FFC107]/10">
          <div className="px-6 py-4 space-y-4">
            {navigation.map((item, idx) => (
              <a
                key={item.id}
                href={item.url}
                className="block group flex items-center gap-2 hover:text-[#FFC107] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[#FFC107] font-mono text-sm">0{idx + 1}.</span>
                <span className="text-[#ccd6f6]">{item.name}</span>
              </a>
            ))}
            <Button
              asChild
              variant="outline"
              className="w-full border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 rounded-sm transition-all"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume">
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

