'use client'

import { Github, Facebook, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
            Creative Developer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Building beautiful, functional web experiences with modern technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={() => window.open('https://github.com/codercoder61', '_blank')}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub 1
            </Button>
            <Button
              onClick={() => window.open('https://github.com/mohamed-knoud', '_blank')}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub 2
            </Button>
            <Button
              onClick={() => window.open('https://github.com/coderceder61', '_blank')}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub 3
            </Button>
            <Button
              onClick={() => window.open('https://wa.me/+2120698522728', '_blank')}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
            <Button
              onClick={() => window.open('https://web.facebook.com/simo.knoud', '_blank')}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
