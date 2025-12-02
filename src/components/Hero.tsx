import { Button } from './ui/button'

interface HeroProps {
  title: string
  name: string
  tagline: string
  description: string
  cta: string
}

export function Hero({ title, name, tagline, description, cta }: HeroProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative"
      aria-labelledby="hero-heading"
    >
      <div className="absolute top-1/4 right-0 w-32 h-32 border-4 border-[#00BFA5]/10 rotate-12 hidden xl:block" aria-hidden="true"></div>

      <div className="max-w-4xl relative z-10">
        <div className="sr-only">
          <h1 id="hero-heading">Jeremiah Agenyi - Product Manager & Digital Communications Specialist</h1>
        </div>
        <p className="text-[#FFC107] font-mono mb-6 text-base md:text-lg" role="doc-subtitle">
          {title}
        </p>
        <h2 className="text-[#ccd6f6] text-4xl md:text-6xl lg:text-7xl mb-4 font-bold">
          {name}.
        </h2>
        <h3 className="text-[#8892b0] text-3xl md:text-5xl lg:text-6xl mb-6 font-semibold">
          {tagline}
        </h3>
        <p className="text-[#8892b0] max-w-2xl mb-12 text-lg leading-relaxed">
          {description}
        </p>
        <Button
          asChild
          variant="outline"
          className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 rounded-sm px-8 py-6 text-base transition-all"
          aria-label={`Get in touch with ${name}`}
        >
          <a href="#contact">{cta}</a>
        </Button>
      </div>
    </section>
  )
}

