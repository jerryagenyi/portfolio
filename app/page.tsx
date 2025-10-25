// 'use client';

// import Image from 'next/image';

// LANDING PAGE COMMENTED OUT - SHOWING FULL PORTFOLIO INSTEAD
// Uncomment below to show landing page with centered logo

// export default function Home() {
//   return (
//     <main style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: 'var(--navy)'
//     }}>
//       <div style={{ textAlign: 'center' }}>
//         <Image
//           src="/logo-ja-small.jpg"
//           alt="Jerry Agenyi Logo"
//           width={300}
//           height={300}
//           priority
//           style={{ maxWidth: '100%', height: 'auto' }}
//         />
//       </div>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import portfolioData from '@/llm.json';

export default function Home() {
  const { portfolio } = portfolioData;
  const { hero, about, contact } = portfolio.sections;
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main style={{ backgroundColor: 'var(--dark-navy)', color: 'var(--slate)' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(10, 25, 47, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        padding: '20px 50px',
        borderBottom: '1px solid rgba(100, 255, 218, 0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--green)' }}>JA</div>
          <div style={{ display: 'flex', gap: '40px' }}>
            {portfolio.navigation.map((item) => (
              <a key={item.id} href={item.url} style={{ color: 'var(--lightest-slate)', fontSize: '14px', transition: 'color 0.3s' }}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 50px',
        marginTop: '70px'
      }}>
        <div style={{ maxWidth: '1000px' }}>
          <p style={{ color: 'var(--green)', fontSize: '16px', marginBottom: '20px' }}>
            {hero.title}
          </p>
          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 'bold',
            color: 'var(--lightest-slate)',
            marginBottom: '20px'
          }}>
            {hero.name}
          </h1>
          <h2 style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: 'bold',
            color: 'var(--slate)',
            marginBottom: '30px'
          }}>
            {hero.tagline}
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '600px',
            color: 'var(--slate)',
            marginBottom: '40px'
          }}>
            {hero.description}
          </p>
          <a href="#contact" style={{
            padding: '12px 30px',
            border: '2px solid var(--green)',
            color: 'var(--green)',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'all 0.3s',
            display: 'inline-block'
          }}>
            {hero.cta}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '100px 50px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '50px',
            color: 'var(--lightest-slate)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <span style={{ color: 'var(--green)' }}>01.</span> {about.title}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div>
              {about.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                  color: 'var(--slate)'
                }}>
                  {paragraph}
                </p>
              ))}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px'
            }}>
              {portfolio.skills.languages.map((skill) => (
                <div key={skill} style={{
                  padding: '15px',
                  backgroundColor: 'rgba(100, 255, 218, 0.05)',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: 'var(--green)'
                }}>
                  ▸ {skill}
                </div>
              ))}
              {portfolio.skills.frameworks.map((skill) => (
                <div key={skill} style={{
                  padding: '15px',
                  backgroundColor: 'rgba(100, 255, 218, 0.05)',
                  border: '1px solid rgba(100, 255, 218, 0.2)',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: 'var(--green)'
                }}>
                  ▸ {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="jobs" style={{ padding: '100px 50px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '50px',
            color: 'var(--lightest-slate)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <span style={{ color: 'var(--green)' }}>02.</span> Where I've Worked
          </h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '200px' }}>
              {portfolio.experience.map((job, idx) => (
                <button
                  key={job.id}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    padding: '15px 20px',
                    backgroundColor: activeTab === idx ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                    border: activeTab === idx ? '2px solid var(--green)' : '2px solid rgba(100, 255, 218, 0.2)',
                    color: activeTab === idx ? 'var(--green)' : 'var(--slate)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    textAlign: 'left',
                    fontSize: '14px'
                  }}
                >
                  {job.company}
                </button>
              ))}
            </div>
            <div style={{ flex: 1, paddingLeft: '30px', borderLeft: '2px solid rgba(100, 255, 218, 0.2)' }}>
              {portfolio.experience[activeTab] && (
                <div>
                  <h3 style={{ color: 'var(--lightest-slate)', marginBottom: '5px' }}>
                    {portfolio.experience[activeTab].title}
                  </h3>
                  <p style={{ color: 'var(--green)', fontSize: '14px', marginBottom: '20px' }}>
                    {portfolio.experience[activeTab].company}
                  </p>
                  <p style={{ color: 'var(--slate)', fontSize: '14px', marginBottom: '20px' }}>
                    {portfolio.experience[activeTab].startDate} — {portfolio.experience[activeTab].endDate}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {portfolio.experience[activeTab].highlights.map((highlight, idx) => (
                      <li key={idx} style={{
                        color: 'var(--slate)',
                        marginBottom: '10px',
                        fontSize: '14px',
                        lineHeight: '1.6'
                      }}>
                        ▸ {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '100px 50px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '50px',
            color: 'var(--lightest-slate)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <span style={{ color: 'var(--green)' }}>03.</span> Some Things I've Built
          </h2>
          <div style={{ display: 'grid', gap: '50px' }}>
            {portfolio.projects.map((project) => (
              <div key={project.id} style={{
                padding: '30px',
                backgroundColor: 'rgba(100, 255, 218, 0.05)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                borderRadius: '4px'
              }}>
                <h3 style={{ color: 'var(--lightest-slate)', marginBottom: '10px' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--slate)', marginBottom: '20px', lineHeight: '1.6' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} style={{
                      padding: '5px 12px',
                      backgroundColor: 'rgba(100, 255, 218, 0.1)',
                      color: 'var(--green)',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noopener noreferrer" style={{
                      color: 'var(--green)',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}>
                      Visit →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                      color: 'var(--green)',
                      textDecoration: 'none',
                      fontSize: '14px'
                    }}>
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '100px 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '32px',
            marginBottom: '30px',
            color: 'var(--lightest-slate)'
          }}>
            {contact.title}
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: 'var(--slate)',
            marginBottom: '40px'
          }}>
            {contact.description}
          </p>
          <a href={`mailto:${portfolio.metadata.email}`} style={{
            padding: '12px 30px',
            border: '2px solid var(--green)',
            color: 'var(--green)',
            textDecoration: 'none',
            borderRadius: '4px',
            transition: 'all 0.3s',
            display: 'inline-block'
          }}>
            {contact.cta}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '50px',
        textAlign: 'center',
        borderTop: '1px solid rgba(100, 255, 218, 0.1)',
        color: 'var(--slate)',
        fontSize: '14px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '30px' }}>
          {portfolio.socialMedia.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{
              color: 'var(--slate)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              {social.name}
            </a>
          ))}
        </div>
        <p>© 2024 Jeremiah Agenyi. All rights reserved.</p>
      </footer>
    </main>
  );
}
