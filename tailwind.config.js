/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1366px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1920px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
     fontFamily:{
      "Roboto_con":['Roboto Condensed','sans-serif'],
      "Staatliches":['Staatliches', 'cursive'],
      "Inter":['Inter','sans-serif'],
      "Poppins":['Poppins','sans-serif'],
      "Arimo":['Arimo','sans-serif'],
      "Roboto":['Roboto','sans-serif']
     },
     colors:{
      "grey":"#989EB3",
      "redc":"#990A0A",
      "dark_grey":"#292B30",
      "yellow":"#F9D978"
     }

    },
  },
  plugins: [],
}

