import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Div from './Div';

import styles from './styles';

const Login = () => (
  <Div>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="display3" gutterBottom style={styles.title}>
          FMBM Job Listing Board
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary" style={styles.space}>
          <Link to="/employee" style={styles.button}>Login</Link>
        </Button>
        <Button variant="outlined" color="secondary" style={styles.space}>
          <Link to="/employer" style={styles.button}>Admin</Link>
        </Button>
      </Grid>
    </Grid>
  </Div>
);

export default Login;
