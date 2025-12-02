import { Button } from './ui/button'

interface ContactProps {
  title: string
  description: string
  cta: string
  email: string
}

export function Contact({ title, description, cta, email }: ContactProps) {
  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-24 max-w-3xl mx-auto text-center">
      <p className="text-[#FFC107] font-mono mb-4">04. What's Next?</p>
      <h2 className="text-[#ccd6f6] text-4xl md:text-5xl mb-6">{title}</h2>
      <p className="text-[#8892b0] text-lg mb-12 leading-relaxed max-w-xl mx-auto">
        {description}
      </p>
      <Button
        asChild
        variant="outline"
        className="border-[#FFC107] text-[#FFC107] hover:bg-[#FFC107]/10 rounded-sm px-8 py-6 text-base transition-all"
      >
        <a href={`mailto:${email}`}>{cta}</a>
      </Button>
    </section>
  )
}

