'use client';

import { config } from '@/lib/config';

export default function Home() {
  return (
    <main>
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 50px' }}>
        <h1 style={{ color: 'var(--green)', fontSize: '14px', margin: '0 0 30px 0' }}>Hi, my name is</h1>
        <h2 style={{ fontSize: 'clamp(40px, 8vw, 80px)', color: 'var(--lightest-slate)', margin: 0 }}>Jeremiah Agenyi.</h2>
        <h3 style={{ fontSize: 'clamp(40px, 8vw, 80px)', color: 'var(--slate)', margin: '10px 0 0 0' }}>I build things for the web.</h3>
        <p style={{ maxWidth: '540px', color: 'var(--slate)', margin: '20px 0 0 0' }}>I&apos;m a software engineer specializing in building exceptional digital experiences.</p>
        <a href={`mailto:${config.email}`} style={{ color: 'var(--green)', border: '2px solid var(--green)', padding: '18px 46px', marginTop: '50px', display: 'inline-block', textDecoration: 'none' }}>Get In Touch</a>
      </section>

      <section id="about" style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 50px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--lightest-slate)' }}>About</h2>
        <p style={{ color: 'var(--slate)', lineHeight: 1.8 }}>Hello! I&apos;m Jeremiah, a full-stack developer. I enjoy creating beautiful and functional user experiences.</p>
      </section>

      <section id="jobs" style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 50px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--lightest-slate)' }}>Experience</h2>
        <div style={{ marginBottom: '50px' }}>
          <div style={{ color: 'var(--lightest-slate)', fontWeight: 600 }}>Your Job Title</div>
          <a href="#" style={{ color: 'var(--green)', textDecoration: 'none' }}>Your Company</a>
          <div style={{ color: 'var(--slate)', fontSize: '14px' }}>Your Date Range</div>
        </div>
      </section>

      <section id="projects" style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 50px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--lightest-slate)' }}>Projects</h2>
        <div style={{ marginBottom: '50px' }}>
          <div style={{ color: 'var(--lightest-slate)', fontWeight: 600 }}>Your Project Name</div>
          <a href="#" style={{ color: 'var(--green)', textDecoration: 'none' }}>View Project</a>
          <div style={{ color: 'var(--slate)', fontSize: '14px' }}>Your project description goes here</div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: '600px', margin: '0 auto', padding: '100px 50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(40px, 8vw, 60px)', color: 'var(--lightest-slate)' }}>Get In Touch</h2>
        <p style={{ color: 'var(--slate)', marginBottom: '50px' }}>My inbox is always open. Feel free to get in touch!</p>
        <a href={`mailto:${config.email}`} style={{ color: 'var(--green)', border: '2px solid var(--green)', padding: '18px 46px', display: 'inline-block', textDecoration: 'none' }}>Say Hello</a>
      </section>
    </main>
  );
}
