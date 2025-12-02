'use client'

import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react'

interface SocialMedia {
  name: string
  url: string
  icon: string
}

interface SocialLinksProps {
  socialMedia: SocialMedia[]
  email: string
}

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  twitter: <Twitter className="w-5 h-5" />,
  instagram: <Instagram className="w-5 h-5" />,
  codepen: <Mail className="w-5 h-5" />,
}

export function SocialLinks({ socialMedia, email }: SocialLinksProps) {
  return (
    <div className="fixed left-12 bottom-0 hidden lg:flex flex-col items-center gap-8 after:content-[''] after:block after:w-px after:h-24 after:bg-[#a8b2d1]">
      {socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#a8b2d1] hover:text-[#FFC107] hover:-translate-y-1 transition-all"
          aria-label={social.name}
        >
          {iconMap[social.icon] || <Mail className="w-5 h-5" />}
        </a>
      ))}
      <a
        href={`mailto:${email}`}
        className="text-[#a8b2d1] hover:text-[#FFC107] hover:-translate-y-1 transition-all"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  )
}

