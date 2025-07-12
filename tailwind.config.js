/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal
        'holo-blue': '#00d4ff',
        'holo-purple': '#9d4edd',
        'holo-cyan': '#7209b7',
        'dark-bg': '#0a0a0f',
        'dark-secondary': '#1a1a2e',
        'dark-tertiary': '#16213e',
        'light-accent': '#f8f9fa',
        'gold-accent': '#ffd700',
        'sith-red': '#dc2626',
        
        // Gradientes personalizados
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'holo-gradient': 'linear-gradient(135deg, #00d4ff 0%, #9d4edd 50%, #7209b7 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'holo': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(157, 78, 221, 0.2)',
        'holo-strong': '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow': '0 0 20px rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'holo-pulse': 'holo-pulse 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'holo-pulse': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(157, 78, 221, 0.2)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 60px rgba(157, 78, 221, 0.4)',
            transform: 'scale(1.02)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { textShadow: '0 0 5px rgba(0, 212, 255, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(157, 78, 221, 0.6)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      fontFamily: {
        'tech': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
