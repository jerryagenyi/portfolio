import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  date: string
  description: string
  technologies: string[]
  github: string
  external: string
  featured: boolean
}

interface ProjectsProps {
  title: string
  projects: Project[]
}

export function Projects({ title, projects }: ProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-[#ccd6f6] text-2xl md:text-3xl whitespace-nowrap">
          <span className="text-[#FFC107] font-mono mr-2">03.</span>
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent flex-1 max-w-md"></div>
      </div>

      <div className="space-y-24">
        {featuredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`grid md:grid-cols-12 gap-4 items-center ${
              idx % 2 === 0 ? '' : 'md:direction-rtl'
            }`}
          >
            <div className="md:col-span-7 relative group">
              <a
                href={project.external || project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded overflow-hidden bg-[#FFC107] transition-all"
              >
                <Image
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop`}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full aspect-[16/10] object-cover mix-blend-multiply opacity-25 group-hover:opacity-0 transition-opacity"
                />
              </a>
            </div>

            <div
              className={`md:col-span-5 relative ${
                idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}
            >
              <p className="text-[#FFC107] font-mono text-sm mb-2 drop-shadow-[0_0_6px_rgba(255,193,7,0.3)]">Featured Project</p>
              <h3 className="text-[#ccd6f6] text-2xl mb-4">
                <a
                  href={project.external || project.github || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFC107] hover:drop-shadow-[0_0_10px_rgba(255,193,7,0.4)] transition-all"
                >
                  {project.title}
                </a>
              </h3>

              <div className="bg-[#1a1a1a] p-6 rounded shadow-lg shadow-[#FFC107]/5 mb-4 z-10 relative border border-[#FFC107]/10 hover:border-[#FFC107]/30 transition-all">
                <p className="text-[#a8b2d1]">{project.description}</p>
              </div>

              <ul
                className={`flex flex-wrap gap-3 font-mono text-sm text-[#a8b2d1] mb-4 ${
                  idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                {project.technologies.map((tech) => (
                  <li key={tech} className="hover:text-[#FFC107] transition-colors">{tech}</li>
                ))}
              </ul>

              <div
                className={`flex gap-4 ${
                  idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'
                }`}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8b2d1] hover:text-[#FFC107] hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.4)] transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8b2d1] hover:text-[#FFC107] hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.4)] transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

