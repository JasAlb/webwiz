/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#08090D', // Deep midnight black
          secondary: '#11131A', // Dark charcoal
          elevated: '#171924',
          card: '#0D0F15',
        },
        accent: {
          DEFAULT: '#8B5CF6', // Electric violet
          hover: '#7C3AED',
          light: '#A78BFA',
          soft: '#C4B5FD', // Soft lavender
          glow: 'rgba(139, 92, 246, 0.45)',
        },
        surface: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(139, 92, 246, 0.3)',
          subtle: 'rgba(255, 255, 255, 0.03)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA', // Muted silver
          muted: '#71717A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.18) 0%, rgba(8, 9, 13, 0) 70%)',
        'radial-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(8, 9, 13, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1.5deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
