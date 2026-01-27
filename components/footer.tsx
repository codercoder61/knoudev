'use client'

import { Github, Facebook, MessageCircle, Mail } from 'lucide-react'

export function Footer() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub 1',
      url: 'https://github.com/codercoder61',
    },
    {
      icon: Github,
      label: 'GitHub 2',
      url: 'https://github.com/mohamed-knoud',
    },
    {
      icon: Github,
      label: 'GitHub 3',
      url: 'https://github.com/coderceder61',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/2120698522728',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://web.facebook.com/simo.knoud',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=mohamedknoud@gmail.com',
    }
  ]

  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <p className="text-primary-foreground/80">
              Creating exceptional digital experiences through design and development.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a  onClick={() => scrollToSection('about')} className="hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a  onClick={() => scrollToSection('projects')} className="hover:text-primary-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a  onClick={() => scrollToSection('skills')} className="hover:text-primary-foreground transition-colors">
                  Skills
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                  const Icon = social.icon
                  const isMail = social.url.startsWith('mailto:')

                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target={isMail ? undefined : '_blank'}
                      rel={isMail ? undefined : 'noopener noreferrer'}
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
