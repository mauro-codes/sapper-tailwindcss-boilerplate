const colors = require("tailwindcss/colors")
module.exports = {
  theme: {
    extend: {
      colors: {
        'cool-blue': '#6173EA',
        'cool-blue-dark': '#475CE1',
        'button-green': '#22C55E',
        'primary-orange': '#F97316',
        'secondary-bg-orange': '#FFF7ED',
      },
      height: {
        'custom-screen': 'calc(100vh - 96px)',
        '1/2': '50%',
        '3/4': '75%',
      },
      width:{
        'p176': '176px',
      },
      inset: {
        '55%': '55%',
        "16px" : "16px",
       }
    }
  },
  variants: {},
  plugins: []
}
