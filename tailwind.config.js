/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      colors: {
        main: "#071529",
        "main-dark": "#050F1D",
        accent: "#35E5A4",
        card: "#162C4B",
        "card-dark": "#394454",
        "card-light": "#394454",
        faint: "#B2B6BD",
        "faint-dark": "#78787A",
        line: "#394454",
        "grad-1":"rgba(55, 242, 173, 0.5)",
        "grad-2":"rgba(55, 152, 242, 0.5)",
      },
    },
  },
  plugins: [],
};
