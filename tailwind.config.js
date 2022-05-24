module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '3rem',
      },
    },
    extend: {
      fontFamily: {
        heading: ["Shippori Mincho B1"],
      },
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        ".container": {
          "@screen md": {
            maxWidth: "100vw",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    }
  ],
}
