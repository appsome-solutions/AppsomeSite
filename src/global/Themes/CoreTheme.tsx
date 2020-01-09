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
        dark: '#140C1E',
        light: '#ECEEF1',
      },
      border: {
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
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)',
};
