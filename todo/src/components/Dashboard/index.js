import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const Dashboard = () => {
  const styles = useStyles();

  return (
    <div>
      <Grid container justify='center' spacing={2}>
        <Grid item xs={12}>
          <Grid container justify='center'>
            <Grid item xs={11} sm={8} md={4}>
              <form>
                <FormControl fullWidth variant='outlined'>
                  <TextField
                    type={'text'}
                    placeholder='Search'
                    variant='outlined'
                    focused
                    classes={{ root: styles.searchBar }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton color='primary'>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </FormControl>
              </form>
            </Grid>
          </Grid>
        </Grid>
        {[...Array(3)].map((el, index) => (
          <Grid item xs={12} sm={6} md={4} xl={4} key={index}>
            <Typography variant='h6'>Todo</Typography>
            {[...Array(4)].map((el, index) => (
              <Accordion classes={{ root: styles.accordion }} key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Grid container>
                    <Grid item>
                      <Checkbox color='primary' />
                    </Grid>
                    <Grid item>
                      <Typography>Accordion 1</Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        ))}
      </Grid>

      <Fab variant='round' classes={{ root: styles.fabButton }} color='primary'>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;
