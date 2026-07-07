/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#003399",
          yellow: "#FFCC00",
          accent: "#1A22B2",
          chip: "#344EAD",
          ink: "#2C2B2B",
          cream: "#FFF9EF",
          light: "#EDF0F5",
          watermark: "#DEE1E5",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

