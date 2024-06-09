/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        placeholderColor: "rgba(0, 0, 0, 0.5)",
        outlineColor: "#4096ff",
        souvenirs: "#6366f1",
        food: "#fb923c",
        transport: "#10b981",
        accomodation: "#f43f5e",
        navBackground: "rgba(255, 255, 255, 0.9)",
      },
      minWidth: {
        400: "400px",
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
