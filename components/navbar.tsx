'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Knoudev
          </Link>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
          </div>
          <Button
            onClick={() => window.open('/cv-m.knoud.pdf', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Download CV
          </Button>
        </div>
      </div>
    </nav>
  )
}
