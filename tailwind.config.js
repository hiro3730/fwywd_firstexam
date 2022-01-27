const colors=require("tailwindcss/colors")

module.exports = {
  mode:"jit",
 
  purge: [
    './public/**/*.html',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
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
       "text-black": '#384359',
       "text-green":'#008c8d' ,
       "bg-green":'#6bc2c3' ,
       "bg-black":'#262c3a' ,
       "progress-pale":'#c5eaea' ,
       "progress-deep":'#2bb9ba' ,
       "border-green":'#c5eaea' ,
      }, 
    },
  },
  plugins: [],
};
