import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 556,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // action: {
    //   active: '',
    //   disabled: '',
    //   disabledBackground: '',
    //   hover: '',
    //   selected: '',
    // },
    background: {
      default: '',
      paper: '#120303',
    },
    // divider: '',
    // primary: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // secondary: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // error: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // warning: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // info: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // success: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    text: {
      primary: '#81FDC5',
      secondary: '#000',
      disabled: '#000',
    },
  },
  // spacing: 0,
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       background: '',
    //     },
    //   },
    // },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, #00FF8D 0%, #FF0010 100%)',
          color: '#000',
          border: '2px solid #FEF5CB',
          borderRadius: '0px',
          padding: '15px 50px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: '#FFFB0A',
          },
        },
        address: { fontStyle: 'normal' },
        img: {
          height: 'auto',
          display: 'block',
        },
        ul: { margin: 0, padding: 0, listStyle: 'none' },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
