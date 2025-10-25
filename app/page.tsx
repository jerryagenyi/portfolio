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

// Temporary placeholder - portfolio content will be built here
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: 'var(--navy)',
      color: 'var(--lightest-slate)',
      padding: '100px 50px',
      fontFamily: 'var(--font-calibre)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Jeremiah Agenyi
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--slate)', marginBottom: '2rem' }}>
          Full Stack Developer | Product Manager | Building exceptional digital experiences
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px' }}>
          Portfolio under construction. Check back soon for my latest work, experience, and projects.
        </p>
      </div>
    </main>
  );
}
