/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // blue-600
        secondary: "#06b6d4",
        border: "var(--color-border)",
        ring: "var(--color-ring)", // cyan-500
      },
    },
  },
  plugins: [],
};