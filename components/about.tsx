'use client'

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-8">About Me</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate developer dedicated to creating exceptional digital
            experiences. With expertise in modern web technologies, I blend creative apps with
            robust engineering to build solutions that users love.
          </p>
          <p>
            My journey in tech started with a curiosity about how things work. Over the years, I've
            developed a deep understanding of frontend and backend technologies, always staying
            updated with the latest industry trends and best practices.
          </p>
          <p>
            I believe in clean, maintainable code and user-centered design. Every project I
            undertake is an opportunity to solve real problems and make a positive impact through
            technology.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to open
            source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  )
}
