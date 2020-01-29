import 'antd/dist/antd.min.css';

export const CoreTheme = {
  colors: {
    main: {
      primary: '#543C52',
      secondary: '#F55951',
      tetiary: '#EDD2CB',
    },
    utils: {
      text: {
        dark: '#361D32',
        light: '#ECEEF1',
      },
      border: {
        light: 'rgba(241,232,230,0.5)',
        mid: '#DEDEDE',
        dark: '#392F46',
      },
      link: '#3C7EFF',
      placeholder: '#959595',
      background: {
        mid: {
          color: '#F1E8E6',
        },
        light: '#FFFFFF',
        accent: '#FAF6FF',
      },
    },
    functional: {
      hover: '#ff7875',
      error: '#C64D4D',
      success: '#4DC66E',
      disabled: '#A5A5A5',
      primary: {
        hover: '#8a6587',
      },
      main: {
        primary: {
          opacity: 'rgba(84, 60, 82, 0.05)',
        },
      },
    },
  },
  textDecorationLine: 'underline',
  typography: {
    subtitle1: {
      fontWeight: 'normal',
      fontSize: '16px',
      textTransform: 'none',
      letterSpacing: '0.0015em',
    },
    subtitle2: {
      fontWeight: '500',
      fontSize: '14px',
      textTransform: 'none',
      letterSpacing: '0.001em',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '16px',
      letterSpacing: '0.005em',
      lineHeight: '19px',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '14px',
      textTransform: 'none',
      letterSpacing: '0.0025em',
      lineHeight: '16px',
    },
    button: {
      fontWeight: '500',
      fontSize: '14px',
      textTransform: 'uppercase',
      letterSpacing: '0.0125em',
    },
    caption: {
      fontWeight: 'normal',
      fontSize: '12px',
      textTransform: 'none',
      letterSpacing: '0.004em',
    },
    overline: {
      fontWeight: 'normal',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.015em',
    },
  },
  zIndex: {
    satellite: '5000',
    skyscraper: '1000',
    towerBlock: '500',
    house: '200',
    bungalowChimney: '110',
    bungalow: '100',
    shed: '50',
    postbox: '10',
    curb: '1',
    pavement: '0',
    pothole: '-10',
    ditch: '-20',
    sewer: '-100',
    mine: '-300',
    seabed: '-1000',
  },
};
