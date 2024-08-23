/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "hsl(220, 98%, 61%)",
          grad1: "hsl(192, 100%, 67%)",
          grad2: "hsl(280, 87%, 65%)",
        },
        light: {
          gray: "hsl(0, 0%, 98%)",
          blue: {
            100: "hsl(236, 33%, 92%)",
            200: "hsl(233, 11%, 84%)",
            300: "hsl(236, 9%, 61%)",
            400: "hsl(235, 19%, 35%)",
          },
        },
        dark: {
          blue: "hsl(235, 21%, 11%)",
          grayBlue: {
            100: "hsl(235, 24%, 19%)",
            200: "hsl(234, 39%, 85%)",
            300: "hsl(236, 33%, 92%)",
            400: "hsl(234, 11%, 52%)",
            500: "hsl(233, 14%, 35%)",
            600: "hsl(237, 14%, 26%)",
          },
        },
      },
      backgroundImage: {
        "desktop-light": "url('./bg-desktop-light.jpg')",
        "desktop-dark": "url('./bg-desktop-dark.jpg')",
        "mobile-light": "url('./bg-mobile-light.jpg')",
        "mobile-dark": "url('./bg-mobile-dark.jpg')",
      },
      fontFamily: {
        body: ['Josefin Sans']
      }
    },
  },
  plugins: [],
};
