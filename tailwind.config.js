module.exports = {
  content: ["./src/App.jsx", "./src/components/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
        screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
        },
        colors: {
          'fire-engine-red': '#d0172aff',
          'rosy-brown': '#d4a5a9ff',
          'fire-brick': '#b31425ff',
          'french-gray': '#d1d0d5cb',
          'seasalt': '#f8f7f8ff',
          'dark-purple': '#2c0e37',
          'melon': '#daa89b',
        },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
