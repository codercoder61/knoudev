'use client'

import { Card } from '@/components/ui/card'

const skillCategories = [
  {
    category: 'Frontend Development',
    skills: ['HTML/CSS','Sass','JavaScript', 'jQuery','Bootstrap', 'Tailwind CSS', 'TypeScript', 'React',   'Next.js'],
  },
  {
    category: 'Backend Development',
    skills: ['PHP','MySQL','Laravel','Node.js','Express.js','Flask', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
   skills: [
     'VirtualBox',
     'Vmware',
     'SSH',
     'Bash',
  'Axios',
     'phpMyAdmin',
     'cPanel',
     'MVC';
'POO',
  'AJAX',
  'Restful API',
  'Postman',
  'Webpack',
  'XAMPP',
  'Heroku',
  'Vercel',
  'Linux',
  'UML',
  'Merise',
  'Web Scraping',
  'Microsoft Office',
  'Jira (SCRUM)',
  'Git',
  'Docker',
  'WordPress',
  'AWS',
  'GitHub',
  'VS Code',
],

  },
  {
    category: 'Programming Languages',
    skills: ['Python', 'C++', 'C', 'VB.net', 'Assembly'],
  },
  ,
  {
    category: 'Other',
    skills: ['Algorithms & Data Stuctures', 'Electronics','Networks', 'Cyber Security', 'Mathematics', 'Physics','Soft Skills'],
  },
  {
    category: 'Languages',
    skills: ['Arabic', 'French', 'English'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.category}
              className="bg-background border border-border p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
