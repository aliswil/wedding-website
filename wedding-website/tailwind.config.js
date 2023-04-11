const defaultTheme = require("tailwindcss/defaultTheme");

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
    fontFamily: {
      display: ["Raleway", ...defaultTheme.fontFamily.sans],
      mark: ["Marck Script"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "bg-bigscreen": "url('/1.jpeg')",
        "bg-mobile": "url('/2.jpeg')",
      }),
    },
  },
  plugins: [],
};
