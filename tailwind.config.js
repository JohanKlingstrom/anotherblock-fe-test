/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '411px',
      'md': '960px',
      'lg': '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['"Aeonik"'],
      },
    },
  },
};
