module.exports = {
  content: [
      './public/**/*.html',
      './public/**/*.js'
  ],
  theme: {
    extend: {
        colors:
        {
            'cyan':'hsl(179, 62%, 43%)',
            'light-cyan':'#3abebc',
            'bright-yellow':'hsl(71, 73%, 54%)',
            'light-gray':'hsl(204, 43%, 93%)',
            'grayish-blue':'hsl(218, 22%, 67%)'
        }
        ,
        fontFamily:
        {
            'karla':['karla']
        },
    },
  },
  plugins: [],
}
