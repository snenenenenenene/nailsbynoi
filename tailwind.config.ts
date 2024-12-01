/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-outfit)"],
      },
      animation: {
        "gradient-slow": "gradient 10s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "100% 50%",
          },
          "50%": {
            "background-position": "0% 50%",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
