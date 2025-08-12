/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main Palette from the Style Guide
        primary: {
          DEFAULT: '#7e4ce0', // lila-principal
          light: '#976cff',   // lila-clar
          dark: '#6939b5'     // lila-fosc-alt
        },
        secondary: '#8014cc',  // lila-secundari
        accent: {
          DEFAULT: '#cd147d', // magenta
          light: '#f77abb'    // rosa-clar
        },
        neutral: {
          text: '#401f6e',     // dark purple for text
          'text-subtle': '#5a4e7a',
          background: '#ffffff',
          light: '#f7f5fa', // very light, almost white purple
          border: '#e9e4f5',
          dark: '#401f6e'      // dark purple for footer bg
        }
      },
      fontFamily: {
        sans: ['Anek Bangla', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Titillium Web', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem',
        '3xl': '2rem', '4xl': '2.75rem', '5xl': '3.5rem', '6xl': '4.5rem'
      },
      fontWeight: {
        light: 300, regular: 400, medium: 500, semibold: 600, bold: 700, black: 900
      },
      lineHeight: {
        tight: 1.2, normal: 1.5, relaxed: 1.75
      },
      borderRadius: {
        md: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      boxShadow: {
        sm: '0 2px 4px 0 rgb(64 31 110 / 0.04)',
        md: '0 4px 8px -1px rgb(64 31 110 / 0.06), 0 2px 4px -2px rgb(64 31 110 / 0.06)',
        lg: '0 10px 15px -3px rgb(64 31 110 / 0.07), 0 4px 6px -4px rgb(64 31 110 / 0.07)',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    }
  },
  plugins: [],
}