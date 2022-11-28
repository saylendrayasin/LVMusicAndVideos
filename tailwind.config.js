/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0ea5e9",
        second: "#64748b",
        dark: "#0c4a6e",
      },
      screens: {
        // "2xl": "1420px",
      },
    },
  },
  plugins: [],
};
