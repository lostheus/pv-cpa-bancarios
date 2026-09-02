/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          600: '#243B53',
          700: '#1A365D',
          800: '#102A43',
          900: '#0B192C',
          950: '#060E18',
        },
        gold: {
          50: '#FDFBF0',
          100: '#FBF5DC',
          300: '#E8D282',
          400: '#D4B340',
          500: '#C59B27',
          600: '#A67D15',
          700: '#7E5B0B',
        },
        ink: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          900: '#0F172A',
        },
      },
      boxShadow: {
        lift: '0 20px 40px -15px rgba(11, 25, 44, 0.12), 0 0 1px rgba(11, 25, 44, 0.2)',
        card: '0 4px 20px -4px rgba(11, 25, 44, 0.08)',
      },
    },
  },
  plugins: [],
};
