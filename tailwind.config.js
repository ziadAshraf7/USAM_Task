/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#04AE95',
        darkGrey: '#4A4A4A',
        white: '#FFFFFF',
        amber: '#FFB941',
        offWhite: '#F2F2F2',
        darkCyan: '#037C6A',
        aqua: '#D1FAF4',
        gray: '#777777',
        emeraldGreen: '#024B40',
        lavenderGray: '#B2B3CF',
        stoneGray: '#969696',
        softMint: '#83FCEA',
        brightAqua: '#1FFAD9 ',
        staleBlue : "#626381"
      },
    },
    fontFamily: {
      poppins: ['poppins'],
    },
    fontSize: {
      'heading-xl': '44px',
      'heading-lg': '40px',
      'heading-md': '28px',
      'heading-sm': '26px',
      'subtitle-lg': '22px',
      'subtitle-md': '18px',
      'body-text': '16px',
      'caption': '14px',
    },
  },
  plugins: [],
}
