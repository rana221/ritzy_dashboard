module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        blue :{
          300 : "#3DE7FB",
          400 : "#8DC4EC",
        },
      
      }
    },
  },
  variants: {
    extend: { 
      backgroundColor: ['active']
    },
  },
  plugins: [],

  
}

