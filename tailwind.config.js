/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
    extend: {
      colors: {
        primary: "#fed7ba",
        brown: "#8b0000",
        dark_brown: "#84292B",
        grey: "#D9D9D9",
        pink: "#D27F7F80",
        grey_color:"#716C6C",
        grey_light:"#CCC6C6CC",
      },
      fonts: {
        ff_nutino: "Nunito Sans",
        ff_poppins: "Poppins"
      },
      fontFamily:{
        'sans': 'Poppins, Arial, sans-serif',
        ff_nutino: "Nunito Sans",
        ff_poppins: "Poppins"
      },

      fontWeight:{
        fw_light:'300',
        fw_med:'400',
        fw_dark:'500',
        fw_bold:'600',
        fw_xbold:'700',
      },
      fontSize: {
        fs_16: "16px",
        fs_24: "24px",
        fs_32: "32px",
        fs_36: "36px",
        fs_40: "40px",
        fs_48: "48px",
        fs_60: "60px",
        fs_64: "64px",
        fs_96: "94px",
      },
      backgroundImage:{
        'giftCard':"url('./assets/img/home/gitt-card.jfif')"
      }
    },
  },
  plugins: [],
};
