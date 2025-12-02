interface SocialMedia {
  name: string
  url: string
  icon: string
}

interface FooterProps {
  socialMedia: SocialMedia[]
}

export function Footer({ socialMedia }: FooterProps) {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-[#FFC107]/10 text-center text-[#8892b0] text-sm">
      <div className="mb-4">
        <p>© 2024 Jeremiah Agenyi. All rights reserved.</p>
      </div>
      <nav aria-label="Social media links">
        <div className="flex justify-center gap-4">
          {socialMedia.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#FFC107] transition-colors"
              aria-label={`Visit Jeremiah's ${social.name} profile`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  )
}

