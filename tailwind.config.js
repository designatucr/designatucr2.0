/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        design: {
          beige: "#FDF9ED",
          orange: "#FBC193",
          pink: "#FCD8CA",
          green: "#64A587",
          lightgreen: "#C4DBC1",
          brown: "#E9D8C9",
        },
      },
    },
  },
  plugins: [],
};
