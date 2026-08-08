'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [

  {
    id: 5,
    title: 'ShareMyDocs',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome','PHP','MySQL'],
    link: 'https://sharemydocs.lovestoblog.com/',
  },
   {
    id: 5779843,
    title: 'tanglee',
    tags: ['React.Js', 'PHP', 'MySQL', 'Vercel', 'Github', 'Namecheap', 'VS Code'],
    link: 'https://tangleee.vercel.app/',
  },
  {
    id: 536123,
    title: 'MoviexFlix',
    tags: ['Next.Js','TMDP API'],
    link: 'https://movies-website-puce-theta.vercel.app/',
  },
  {
    id: 5525,
    title: 'Inventory MS',
    tags: ['HTML', 'CSS', 'JavaScript','jQuery','VS Code','Font Awesome','PHP','MySQL'],
    link: 'https://pneuexpress.online/myProject/',
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
    title: 'AnimeHub',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['Next.JS','MySQL','Express.Js'],
    link: 'https://aniimehub.vercel.app/',
  },
  {
    id: 11,
    title: 'Dating App',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['Next.JS','Supabase'],
    link: 'https://v0-dating-app-features-roan.vercel.app/auth/login',
  },
  {
    id: 12,
    title: 'Good Vibes',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['React.JS','JSON','PHP'],
    link: 'https://goodvibes-wine.vercel.app/',
  },
  {
    id: 8552,
    title: 'Arab Ateist Library',
    description:
      'Intelligent chatbot with natural language processing and machine learning capabilities.',
    tags: ['Next.JS'],
    link: 'https://arabatheisthub.vercel.app/',
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
    id: 49,
    title: 'Les Pionniers du Savoir - رواد المعرفة',
    tags: ['Next.JS','Supabase'],
    link: 'https://ruwad-knowledge.vercel.app/',
  },
    
  {
    id: 3,
    title: 'Seriemania',
    tags: ['HTML', 'CSS','React.Js', 'JavaScript','Vercel','Github','VS Code','Font Awesome'],
    link: 'https://seriesmania.vercel.app/',
  },
  {
    id: 669,
    title: 'BlackJack',
    tags: ['HTML', 'CSS','JavaScript'],
    link: 'https://pneuexpress.online/blackjack/',
  },
  {
    id: 518546,
    title: 'DevForum',
    tags: ['AI Generated'],
    link: 'https://developer-forum-web-30cz.bolt.host/#/',
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
