/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  
  theme: {
    screens:{
      'xs':'360px',
      'sm':'480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1280px',
      '2xl': '1536px'

    },
    extend: {
      'colors':{
        'cust-logo-bluedark1':'#ff34b7',
        'cust-logo-blue':'#184bb2',
        'cust-logo-bluedark':'#0034b7',
        'cust-logo-green':'#019934',
        'cust-pri-clr': '#184bb2',
        'cust-sec-clr': '#019934',
        'cust-darkest-grey': '#222529',
        'cust-darker-grey': '#32373b',
        'cust-dark-grey': '#4c4f54',
        'cust-light-grey': '#a1a4b3',
        'cust-lighter-grey': '#e9e9f7',
        'cust-lightest-grey': '#f0f3fa',
        'cust-bodyback': '#f5fafc'
        
      }
    },
  },
  plugins: [],
}
