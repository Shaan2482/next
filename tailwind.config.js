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
    extend: {
      flex:{
        "1/4":"1 1 25%",
        "2/4":"1 1 50%",
        "3/4":"1 1 75%",
        "base":"1 1 0%",
        "20%":"1 1 20%"
      }
    },
  },
  plugins: [],
}
