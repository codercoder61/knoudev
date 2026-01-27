'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Blackjack Game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://pneuexpress.xyz/blackjack/',
  },
  {
    id: 2,
    title: 'IPTV Templates Shop',
    tags: ['HTML', 'CSS', 'JavaScript','Vercel','Github','jQuery','VS Code','Font Awesome'],
    link: 'https://iptv-template-shop-nine.vercel.app/',
  },
  {
    id: 3,
    title: 'Seriemania',
    tags: ['HTML', 'CSS', 'JavaScript','Vercel','Github','VS Code','Font Awesome'],
    link: 'https://seriemania.vercel.app/',
  },
  {
    id: 4,
    title: 'Pneu Express',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome'],
    link: 'https://pneuexpress.xyz/',
  },
  {
    id: 5,
    title: 'ShareMyDocs',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome'],
    link: 'https://sharemydocs.lovestoblog.com/',
  },
  {
    id: 6,
    title: 'Audiobooks4u',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['Node.Js','EJS','HTML5','CSS3','JavaScript'],
    link: 'https://audiobooks4u-seven.vercel.app/',
  },
  {
    id: 7,
    title: 'Movies4u',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome'],
    link: 'https://movies4u-lovat.vercel.app/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border border-border hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  onClick={() => window.open(project.link, '_blank')}
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
