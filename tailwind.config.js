/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        placeholderColor: "rgba(0, 0, 0, 0.5)",
        outlineColor: "#4096ff",
        souvenirs: "#38bdf8",
        food: "#fb923c",
        transport: "#10b981",
        accomodation: "#6b21a8",
      },
      maxWidth: {
        1500: "1500px",
      },
      width: {
        600: "600px",
      },
    },
  },
  plugins: [],
};
