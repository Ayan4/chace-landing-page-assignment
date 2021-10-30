module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f1c086",
        blackbg: "#EFEFEF"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
