/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
    colors: {
      'darkBlue': '#064291',
      'lightBlue': '#c5e4ff',
      'blue': '#C2E3FC',
      'yellow': '#ffc301',
      'background': '#F3F4F6',
      'gray': '#4A5463',
    },
    extend: {},
  },
  plugins: [],
}

