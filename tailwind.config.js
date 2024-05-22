/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/gform/*.tsx",
    "./src/pages/gform/**/*.tsx",
    "./src/pages/gformeditor/*.tsx",
    "./src/components/gForm/**/*.{js,jsx,ts,tsx}",
    "./src/components/gForm/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

