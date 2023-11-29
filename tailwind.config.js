/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : "#B88E2F",
        "background" : "#F9F1E7"
      },
      animation : {
        toBottom: 'toBottom 1s forwards' 
      },
      keyframes : {
        toBottom : {
          '0%' : { Transform: 'translateY(-50%)' },
          '100%' : { transform: 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}

