/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d88b8b',
        dark: '#1a1515',
        card: '#413639',
        tag: '#744343',
      },
    },
  },
  plugins: [],
}
