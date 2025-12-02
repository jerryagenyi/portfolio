import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107',
        secondary: '#00BFA5',
        accent: '#FFC107',
        muted: '#8892b0',
        background: '#000000',
        foreground: '#ccd6f6',
        card: {
          DEFAULT: '#0a0a0a',
          foreground: '#ccd6f6',
        },
        popover: {
          DEFAULT: '#0a0a0a',
          foreground: '#ccd6f6',
        },
      },
      fontFamily: {
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Courier New', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}

export default config

