'use client'

import { Header } from '../src/components/Header'
import { Hero } from '../src/components/Hero'
import { About } from '../src/components/About'
import { Experience } from '../src/components/Experience'
import { Projects } from '../src/components/Projects'
import { Contact } from '../src/components/Contact'
import { Footer } from '../src/components/Footer'
import { SocialLinks } from '../src/components/SocialLinks'
import { portfolioData } from '../src/lib/portfolio-data'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Decorative geometric elements inspired by logo */}
      <div className="fixed top-20 right-10 w-16 h-16 border-2 border-[#FFC107]/20 rotate-12 pointer-events-none hidden lg:block"></div>
      <div className="fixed top-1/3 left-10 w-12 h-12 border-2 border-[#00BFA5]/20 -rotate-6 pointer-events-none hidden lg:block"></div>
      <div className="fixed bottom-1/4 right-1/4 w-8 h-8 border-2 border-[#FFC107]/10 rotate-45 pointer-events-none hidden lg:block"></div>

      <Header navigation={portfolioData.navigation} />

      <main className="pt-24">
        <Hero
          title={portfolioData.sections.hero.title}
          name={portfolioData.sections.hero.name}
          tagline={portfolioData.sections.hero.tagline}
          description={portfolioData.sections.hero.description}
          cta={portfolioData.sections.hero.cta}
        />

        <About
          title={portfolioData.sections.about.title}
          content={portfolioData.sections.about.content}
          expertise={portfolioData.profile.expertise}
        />

        <Experience
          title={portfolioData.sections.experience.title}
          jobs={portfolioData.experience}
        />

        <Projects
          title={portfolioData.sections.projects.title}
          projects={portfolioData.projects}
        />

        <Contact
          title={portfolioData.sections.contact.title}
          description={portfolioData.sections.contact.description}
          cta={portfolioData.sections.contact.cta}
          email={portfolioData.metadata.email}
        />
      </main>

      <Footer socialMedia={portfolioData.socialMedia} />

      <SocialLinks
        socialMedia={portfolioData.socialMedia}
        email={portfolioData.metadata.email}
      />
    </div>
  )
}