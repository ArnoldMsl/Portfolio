/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primarycolor: 'var(--primary-color)',
        secondaryMinor: 'var(--secondary-color-minor)',
        thirdColor: 'var(--third-color)',
      },
    },
  },
  plugins: [],
}

