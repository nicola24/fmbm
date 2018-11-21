import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Grid from '@material-ui/core/Grid';
import ExitToApp from '@material-ui/icons/ExitToApp';

import GetJobsGithub from '../../containers/GetJobsGithub';
import GetJobsEmployee from '../../containers/GetJobsEmployee';

import styles from './styles';

const EmployeeDashBoard = () => (
  <div style={styles.background}>
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="title" color="inherit">
              <Grid container spacing={16} alignItems="center">
                <Grid item>
                  <AssignmentInd />
                </Grid>
                <Grid item>
                 FMBM Job Listing Board - Employee
                </Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/" style={styles.link}>
              <ExitToApp />
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    <Grid
      container
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
    >
      <Grid item>
        <GetJobsEmployee />
      </Grid>
      <Grid item>
        <GetJobsGithub />
      </Grid>
    </Grid>
  </div>
);

export default EmployeeDashBoard;
