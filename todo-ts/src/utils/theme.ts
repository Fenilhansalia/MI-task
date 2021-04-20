import { createMuiTheme } from '@material-ui/core/styles';

export const colors = {
  common: {
    white: '#ffffff',
    black: '#212121',
  },
  primary: {
    dark: '#1891ff',
    main: '#2596ff',
    light: '#e6f7ff',
  },
  secondary: {
    main: '#1890FF',
  },
  error: {
    main: '#ef6565',
    light: 'rgb(242, 131, 131)',
  },
};

export const theme = createMuiTheme({
  palette: {
    common: colors.common,
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
    },
    error: colors.error,
  },
});
