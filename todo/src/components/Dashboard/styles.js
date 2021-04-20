import { colors } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return createStyles({
    searchBar: {
      borderRadius: '70px',
    },
    fabButton: {
      bottom: 25,
      left: '100%',
      position: 'sticky',
      boxShadow: 'none',
      borderRadius: 10,
    },
    accordion: {
      marginTop: 5,
      marginBottom: 5,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      borderColor: theme.palette.primary.main,
      '&::before': {
        background: 'transparent',
      },
    },
    paper: {
      boxShadow: theme.shadows[0],
      // borderStyle: 'solid',
      // borderWidth: 2,
      // borderColor: theme.palette.primary.main,
      padding: 15,
      background: 'fafafa',
    },
  });
});

export default styles;
