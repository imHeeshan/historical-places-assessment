const Primary = {
    50: '#E6E6FE',
    100: '#CECEFD',
    200: '#9D9DFB',
    300: '#6C6CF9',
    400: '#3B3BF7',
    500: '#6464F9',
    600: '#060693',
    700: '#6464F9',
    800: '#040462',
    900: '#020231',
    950: '#010119',
  };
  const Neutrals = {
    50: '#f7f7f7',
    100: '#F1F1F2',
    200: '#eeeeef',
    300: '#ebebeb',
    350: '#b1b1b6',
    400: '#767680',
    600: '#62626A',
    700: '#4A4A4F',
    800: '#313135',
    900: '#19191A',
    950: '#0C0C0D',
  };
  
  const Success = {
    500: '#00B66F',
    50: '#E1FAF0',
    300: '#21E8A9',
    700: '#006D42',
    900: '#013F27',
  };
  
  const Error = {
    500: '#EF4444',
    50: '#FEF2F2',
    300: '#FFC5CA',
    700: '#B91C1C',
    900: '#7F1D1D',
  };
  
  const Yellow = {
    50: '#FFF7E5',
    100: '#FFEECC',
    200: '#FFDD99',
    300: '#FFCC66',
    400: '#FFBb33',
    500: '#FFAA00',
    600: '#CC8800',
    700: '#996600',
    800: '#664400',
    900: '#332200',
    950: '#1A1100',
  };
  const Magenta = {
    50: '#FBE6FF',
    100: '#F7CDFE',
    200: '#EF9AFE',
    300: '#E768FD',
    400: '#DF35FD',
    500: '#E34EFD',
    600: '#AC02CA',
    700: '#810297',
    800: '#560165',
    900: '#2B0132',
    950: '#150019',
  };
  const defaultThemeColors = {
    background: '#1c1b20',
    card: '#fff', // white
    text: '#000', // black
    notification: '#ff453a', // red
    lightBackground: '#EFF8FB', //EFF5FB
    lightBlack: '#454545',
    bar: '#37384c',
  };
  
  const orangeGradient = ['#ffac01', '#ff6f61'];
  const blueGradient = [Primary[500], '#0808C4'];
  const magentaGradient = ['#E44FFD', '#A202CA'];
  
  const colors = {
    ...defaultThemeColors,
    Primary,
    Neutrals,
    Error,
    Magenta,
    Success,
    Yellow,
    blue: '#0096FF',
    green: '#049651',
    red: '#DD1712',
    white: '#fff',
    black: '#000',
    grey: '#888',
    lightWhite: '#FAFAFA',
    whiteOpacity: 'rgba(255, 255, 255, 0.60)',
    blackOpacity: 'rgba(12, 12, 13, 0.6)',
    orange: '#ffac01',
    peach: '#ff6f61',
    gray: '#D9D9D9',
    transparent: '#FFFFFF80',
    orangeGradient,
    blueGradient,
    magentaGradient,
  };
  export {defaultThemeColors, colors};
  