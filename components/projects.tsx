'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  
  {
    id: 3,
    title: 'Seriemania',
    tags: ['HTML', 'CSS','React.Js', 'JavaScript','Vercel','Github','VS Code','Font Awesome'],
    link: 'https://seriesmania.vercel.app/',
  },
  {
    id: 5,
    title: 'ShareMyDocs',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome','PHP','MySQL'],
    link: 'https://sharemydocs.lovestoblog.com/',
  },
  {
    id: 8,
    title: 'Hianime api',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['JavaScript','Axios','Cheerio','Cors','Express.JS','Node.Js'],
    link: 'https://github.com/codercoder61/hianime_api/tree/main',
  },
  {
    id: 10,
    title: 'AnimeFlix',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['Next.JS'],
    link: 'https://animeflix-mu-opal.vercel.app/',
  },
  {
    id: 11,
    title: 'tanglee',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['React.JS','PHP','MYSQL'],
    link: 'https://tangleee.vercel.app/',
  },
  {
    id: 12,
    title: 'goodVibes',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['React.JS','JSON','PHP'],
    link: 'https://goodvibes-wine.vercel.app/',
  },
  {
    id: 13,
    title: 'IP address locator',
    description:
      'IP address locator',
    tags: ['HTML','CSS','JavaScript','API'],
    link: 'https://thisip.rf.gd/',
  },
  {
    id: 14,
    title: 'Safety Brigade Gestion de Stock',
    description:
      'IP address locator',
    tags: ['HTML','CSS','JavaScript','jQuery','PHP','MySQL'],
    link: 'https://safetybrigade.free.nf/menu.php',
  },
  {
    id: 15,
    title: 'Pneu Express',
    description:
      'Site de vente de pneus',
    tags: ['HTML','CSS','JavaScript','jQuery','PHP','MySQL'],
    link: 'https://pneuexpress.online/',
  },
  {
    id: 16,
    title: 'StreamVibe',
    description:
      'StreamVibe',
    tags: ['Next.JS'],
    link: 'https://streamvibe-ten.vercel.app/',
  },
  {
    id: 17,
    title: 'netClassroom',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome','PHP','MySQL'],
    link: 'https://pneuexpress.online/ruwad/',
  },
  {
    id: 18,
    title: 'pictogram (Social Network)',
    tags: ['React.Js','VS Code','Font Awesome','PHP','MySQL'],
    link: 'https://pictogram-woad.vercel.app/',
  },
  {
    id: 19,
    title: 'foody',
    tags: ['React.Js','VS Code','Font Awesome','PHP','MySQL'],
    link: 'https://fooddy-phi.vercel.app/',
  },
  {
    id: 20,
    title: 'Arab Atheists Library',
    tags: ['Next.js','PHP'],
    link: 'https://bookfinder-chi.vercel.app/',
  },
  {
    id: 21,
    title: 'Movies4u',
    tags: ['HTML5','CSS3','JavaScript'],
    link: 'https://movies4u.free.nf/',
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
