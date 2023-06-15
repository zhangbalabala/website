const { defaultTheme } = require('react-select');

module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'rgb(0,0,0,0)',
      transparentw: 'rgb(255,255,255,0)',
      current: 'currentColor',
      black: 'rgb(0,0,0)',
      white: 'rgb(255,255,255)',
      // NEW DESIGN SYSTEM
      primary: 'rgb(0,102,255)',
      'primary-dark': 'rgb(0,88,219)',
      red: 'rgb(255,13,0)',
      'red-dark': 'rgb(230,11,0)',
      orange: 'rgb(255,149,0)',
      'orange-dark': 'rgb(230,134,0)',
      yellow: 'rgb(255,204,0)',
      'yellow-dark': 'rgb(230,184,0)',
      green: 'rgb(50,195,86)',
      'green-dark': 'rgb(45,174,77)',
      pink: 'rgb(255,36,76)',
      'pink-dark': 'rgb(235,0,63)',
      indigo: 'rgb(81,78,212)',
      'indigo-dark': 'rgb(60,58,207)',
      teal: 'rgb(50,182,205)',
      'teal-dark': 'rgb(45,164,185)',
      mint: 'rgb(5,189,180)',
      'mint-dark': 'rgb(4,164,156)',
      gray: {
        1: 'rgb(249,249,252)',
        5: 'rgb(243,243,248)',
        10: 'rgb(229,229,235)',
        20: 'rgb(209,209,215)',
        30: 'rgb(199,199,205)',
        40: 'rgb(174,174,179)',
        50: 'rgb(142,142,148)',
        60: 'rgb(99,99,103)',
        70: 'rgb(72,72,75)',
        80: 'rgb(58,58,59)',
        90: 'rgb(44,44,48)',
        100: 'rgb(24,24,27)',
      },
      gradients: {
        'electric-cyan': 'rgb(0,191,255)',
      },
      // OLD DESIGN SYSTEM
      'cool-gray': {
        5: 'rgb(249,250,252)',
        10: 'rgb(242,244,248)',
        20: 'rgb(221,225,230)',
        30: 'rgb(193,199,205)',
        40: 'rgb(162,169,176)',
        50: 'rgb(135,141,150)',
        60: 'rgb(105,112,119)',
        70: 'rgb(77,83,88)',
        80: 'rgb(52,58,63)',
        90: 'rgb(33,39,42)',
        100: 'rgb(18,22,25)',
      },
      blue: {
        10: 'rgb(237,245,255)',
        20: 'rgb(208,226,255)',
        30: 'rgb(166,200,255)',
        40: 'rgb(120,169,255)',
        50: 'rgb(69,137,255)',
        60: 'rgb(15,98,254)',
        70: 'rgb(0,67,206)',
        80: 'rgb(0,45,156)',
        90: 'rgb(0,29,108)',
        100: 'rgb(0,17,65)',
      },
      'red-old': {
        10: 'rgb(255,241,241)',
        20: 'rgb(255,215,217)',
        30: 'rgb(255,179,184)',
        40: 'rgb(255,131,137)',
        50: 'rgb(250,77,86)',
        60: 'rgb(218,30,40)',
        70: 'rgb(162,25,31)',
        80: 'rgb(117,14,19)',
        90: 'rgb(82,4,8)',
        100: 'rgb(45,7,9)',
      },
      'orange-old': {
        10: 'rgb(255,242,232)',
        20: 'rgb(255,217,190)',
        30: 'rgb(255,183,132)',
        40: 'rgb(255,131,43)',
        50: 'rgb(235,98,0)',
        60: 'rgb(186,78,0)',
        70: 'rgb(138,56,0)',
        80: 'rgb(94,41,0)',
        90: 'rgb(62,26,0)',
        100: 'rgb(35,16,0)',
      },
      'green-old': {
        10: 'rgb(222,251,230)',
        20: 'rgb(167,240,186)',
        30: 'rgb(111,220,140)',
        40: 'rgb(66,190,101)',
        50: 'rgb(36,161,72)',
        60: 'rgb(25,128,56)',
        70: 'rgb(14,96,39)',
        80: 'rgb(4,67,23)',
        90: 'rgb(2,45,13)',
        100: 'rgb(7,25,8)',
      },
      neutral: {
        10: 'rgb(250,251,252)',
        20: 'rgb(244,245,247)',
        30: 'rgb(235,236,240)',
        40: 'rgb(223,225,230)',
        50: 'rgb(193,199,208)',
        60: 'rgb(179,186,197)',
        70: 'rgb(165,173,186)',
        80: 'rgb(151,160,175)',
        100: 'rgb(122,134,154)',
        200: 'rgb(107,119,140)',
        300: 'rgb(94,108,132)',
        400: 'rgb(80,95,121)',
        500: 'rgb(66,82,110)',
        600: 'rgb(52,69,99)',
        700: 'rgb(37,56,88)',
        800: 'rgb(23,43,77)',
        900: 'rgb(9,30,66)',
      },
    },
    extend: {
      screens: {
        xs: '512px',
        '3xl': '1582px',
        ...defaultTheme.screens,
      },
      borderRadius: {
        '4xl': '2.75rem',
        'full-percentage': '100%',
      },
      boxShadow: {
        subtle: '0 32px 40px 0 rgba(24, 24, 27, 0.04)',
        'switch-button': '0px 8px 12px rgba(0, 0, 0, 0.04)',
        'subtle-hard': '0 32px 40px 0 rgba(24, 24, 27, 0.08)',
        'box-floating': '0 0 96px 0 rgba(24, 24, 27, 0.06), 0 0 48px 0 rgba(24, 24, 27, 0.02)',
      },
      fontSize: {
        'supporting-1': '0.5rem',
        'supporting-2': '0.625rem',
      },
      animation: {
        'pingpong-v': 'pingpong-v 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pingpong-v': {
          '0%, 100%': { top: '0%' },
          '50%': { top: '100%' },
        },
      },
      transitionDelay: {
        250: '250ms',
      },
      opacity: {
        1: '0.01',
        2: '0.02',
        3: '0.03',
        4: '0.04',
        6: '0.06',
        7: '0.07',
        8: '0.08',
        9: '0.09',
        15: '0.15',
        75: '0.75',
      },
      ringWidth: {
        5: '5px',
        6: '6px',
        7: '7px',
        12: '12px',
      },
      rotate: {
        10: '10deg',
      },
      scale: {
        98: '.98',
        99: '.99',
        200: '2',
        300: '3',
        400: '4',
        500: '5',
      },
      animation: {
        'fade-in-r-large': '1s cubic-bezier(.25,.65,.35,1) fade-r-large',
        'fade-in-r': '0.75s cubic-bezier(.25,.65,.35,1) fade-r',
        'scroll-y': '60s linear scroll-y normal infinite',
        'scroll-y-reverse': '60s linear scroll-y reverse infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-refresh': 'spin 1s',
      },
      keyframes: {
        'fade-r-large': {
          '0%': { transform: 'translateX(80px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 100 },
        },
        'fade-r': {
          '0%': { transform: 'translateX(24px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 100 },
        },
        'scroll-y': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(25%)' },
        },
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '2/1': '2 / 1',
        '1/2': '1 / 2',
        '16/9': '16 / 9',
        '9/16': '9 / 16',
      },
      dropShadow: {
        'float-soft': [
          '0 2px 0 rgba(255,255,255,0.25)',
          '-80px 100px 24px rgba(0, 0, 0, 0.1)',
          '-40px 80px 40px rgba(0, 0, 0, 0.05)',
        ],
        float: ['-120px 100px 24px rgba(0, 0, 0, 0.1)'],
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
