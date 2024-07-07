/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations';

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ui: {
          green:"#2DCAB1",
          gray: "#7D879C",
          lightblack:"#2b3445",
          black:"#000",
          white:"#fff",
        },
        chips: {
          greeny:"#1cb59c",
          lightgreen:"#d3fff5",
          yellow:"#ffb800",
          lightyellow:"#fff8e5",
          red:"#f56565",
          pink:"#ffdfdf",
        }
      },  
      backgroundImage: {
        customGradient: "linear-gradient(90deg, #0d5287 0%, #1870ca 21%, #05aace 42%, #04d2c6 63%, #26e4c7 79%);",
      },
      fontFamily: {
        'sans': ['"Open Sans"'],
      },
    },
  },
  plugins: [animations],

};
