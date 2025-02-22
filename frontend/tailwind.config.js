/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#0D141D",
        sec: "#09342C",
        tri: "#FF5F1F",        
      },

    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      Kanit: ["Kanit", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [ require("flowbite/plugin")],
};
