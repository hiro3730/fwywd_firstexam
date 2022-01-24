module.exports = {
  mode:"jit",
  //pargeと同じ？
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    //中央揃え
    container:{
      center:true,
    },
    extend: {
      //カラーコード
     colors: {
       transparent: "transparent",
       current: "currentColor",
       black: colors.black,
       white: colors.white,
       "text-black": '#243c5a',
       "text-green": "#008c8d",
       "bg-green": "#6bc2c3",
       "bg-black": "#262c3a",
       "progress-pale": "#c5eaea",
       "progress-deep": "#2bb9ba",
       "border-green": "#c5eaea",
      }, 
    },
  },
  plugins: [],
}
