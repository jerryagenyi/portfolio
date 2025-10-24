'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'var(--navy)'
    }}>
      <div style={{ textAlign: 'center' }}>
        <Image
          src="/logo-ja-small.jpg"
          alt="Jerry Agenyi Logo"
          width={300}
          height={300}
          priority
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </main>
  );
}
