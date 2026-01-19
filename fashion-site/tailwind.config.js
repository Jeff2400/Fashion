/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-cream',
    'text-gold',
    'shadow-lg',
    'rounded-2xl',
    'animate-fade-in',
    'animate-fade-in-down',
  ],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Bright, cohesive palette
        'brand-primary': '#FF6B6B',   // Vivid Coral (primary accent)
        'brand-accent': '#FFD166',    // Warm Gold (secondary accent)
        'brand-cta': '#2B2D42',       // Deep Ink (CTA)
        'brand-bg': '#FFFFFF',        // Pure White (page background)
        'brand-cream': '#FFF8EE',     // Soft cream for sections
        'brand-card': '#F3F4F6',      // Light neutral for cards
        'text-primary': '#0F1724',    // Dark slate for primary text
        'text-secondary': '#6B7280',  // Muted gray for secondary text
        'success': '#8FD694',         // Fresh green for success
        // Compatibility keys used in components
        'brand-background': '#FFF8EE',
        'brand-secondary': '#9AA0A6',
        'gold': '#FFD166',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        'card': '1.25rem',
      },
      boxShadow: {
        luxury: '0 4px 32px 0 rgba(31, 41, 51, 0.08)',
        card: '0 2px 12px 0 rgba(143, 169, 198, 0.10)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideUp: 'slideUp 0.8s cubic-bezier(0.4,0,0.2,1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
