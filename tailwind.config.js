/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm':'480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1440px'

    },
    extend: {
      'colors':{
        'cust-pri-clr': '#003366',
        'cust-sec-clr': '#336600',
        'cust-dark-grey': '#333333',
        'cust-light-grey': '#999999',
        'cust-lightest-grey': '#e5e5e5'
      }
    },
  },
  plugins: [],
}
