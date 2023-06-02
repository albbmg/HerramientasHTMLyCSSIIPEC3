module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
    },
    extend: {
      fontWeight: {
        text: "normal",
        title: "bold",
      },
      spacing: {
        "small-space": "1rem",
        "large-space": "5rem",
      },
      borderRadius: {
        images: "20px",
        buttons: "100px",
      },
      colors: {
        "primary-color": "#000",
        "secondary-color": "#FFF",
        "contrast-color": "#0c7",
        "link-color": "#a3a3a3",
        "card-bg-color":"#f8f9fa",
      },
    },
  },
  variants: {},
  plugins: [],
};
