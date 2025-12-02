import Image from 'next/image'

interface AboutProps {
  title: string
  content: string
  expertise: string[]
}

export function About({ title, content, expertise }: AboutProps) {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 max-w-7xl mx-auto" aria-labelledby="about-heading">
      <div className="flex items-center gap-4 mb-10">
        <h2 id="about-heading" className="text-[#ccd6f6] text-2xl md:text-3xl whitespace-nowrap">
          <span className="text-[#FFC107] font-mono mr-2">01.</span>
          {title}
        </h2>
        <div className="h-px bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent flex-1 max-w-md" aria-hidden="true"></div>
      </div>

      <div className="grid md:grid-cols-[3fr_2fr] gap-12">
        <div className="space-y-4 text-[#8892b0] text-lg leading-relaxed">
          {content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          <div className="mt-8">
            <p className="mb-4 font-semibold">Here are a few areas I specialize in:</p>
            <ul className="grid grid-cols-2 gap-2 font-mono text-sm" role="list">
              {expertise.map((skill) => (
                <li key={skill} className="flex items-center gap-2 group" role="listitem">
                  <span className="text-[#FFC107] group-hover:text-[#00BFA5] transition-colors" aria-hidden="true">▹</span>
                  <span className="group-hover:text-[#ccd6f6] transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative group">
          <div className="relative z-10">
            <div className="relative rounded overflow-hidden border-2 border-[#FFC107] group-hover:border-[#00BFA5] transition-all">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Professional headshot of Jeremiah Agenyi"
                width={400}
                height={400}
                className="w-full aspect-square object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all"
                priority
              />
            </div>
          </div>
          <div className="absolute inset-0 border-2 border-[#FFC107] rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:border-[#00BFA5] transition-all" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  )
}

