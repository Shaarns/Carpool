import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
    body2: {
      fontSize: '1.05rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    h4: {
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    h5: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiCardContent: {
      root: {
        background: 'transparent',
      },
    },
    MuiCard: {
      root: {
        boxShadow: 'none',
        border: ' none',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        margin: '10px 10px 0 0',
        padding: '8px 5px 8px 5px',
        fontSize: '14px',
        borderRadius: '0.25rem',
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        // height: '0px',
      },
    },
    MuiLink: {
      root: {
        fontFamily: 'Segoe UI',
        fontSize: '16px',
        fontWeight: 600,
      },
    },
  },
});
export default theme;
