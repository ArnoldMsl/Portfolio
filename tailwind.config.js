/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        secondaryMinor: 'var(--secondary-color-minor)',
        thirdColor: 'var(--third-color)',
      },
    },
  },
  plugins: [],
}

