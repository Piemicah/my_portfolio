/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wity: "#D7D7D7",
        mainblack: "rgb(30,30,30)",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        rale: ["Raleway", "sans-serif"],
        osas: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        gradbg:
          "radial-gradient(circle, rgba(26,21,21,0) 0%, rgba(1,1,1,0.16) 100%)",
      },
    },
  },
  plugins: [],
};
