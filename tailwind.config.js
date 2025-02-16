/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-1': "url('./assets/Services-and-Stats-Images/hero-bg.jpg')",
        'home-2': "url('./assets/Menu-and-Offers-Images/pexels-shottrotter-1309778.jpg')"
      },
      colors: {
        "coffee": "#6F4E37",
        "dark-coffee": "#5C4033",
        "light-brown": "	#C4A484",
        "tan": "	#D2B48C",
        "wheat": "#F5DEB3",
        "almond": "#EADDCA",
        "light-black": "#100C08",
        'coral-orange' : '#B45309',
        'cyann' : '#00FFFF'
      },
      fontFamily: {
        exo: ['Exo'],
        ibm: ['IBM Plex Mono'],
        lexend: ['Lexend']
      }
    }    
  },
  plugins: [],
}
