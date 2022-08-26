/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm':'480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
      '2xl': '1536px'

    },
    extend: {
      'colors':{
        'cust-logo-blue':'#184bb2',
        'cust-logo-bluedark':'#0034b7',
        'cust-logo-green':'#019934',
        'cust-pri-clr': '#184bb2',
        'cust-sec-clr': '#019934',
        'cust-dark-grey': '#4c4f54',
        'cust-light-grey': '#777782',
        'cust-lighter-grey': '#8a9199',
        'cust-lightest-grey': '#f0f3fa'
        
      }
    },
  },
  plugins: [],
}
