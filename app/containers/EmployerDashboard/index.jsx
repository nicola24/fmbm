import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import ExitToApp from '@material-ui/icons/ExitToApp';

import PostJob from '../PostJob';
import GetJobsEmployer from '../GetJobsEmployer';
import GetJobsGithub from '../GetJobsGithub';

import styles from './styles';

import toggleLeft from './actions';

class EmployerDashBoard extends Component {
  render() {
    const { expanded, toggleLeftMenu } = this.props;
    return (
      <div style={styles.background}>
        <AppBar position="sticky">
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <Typography variant="title" color="inherit">
                  <Grid container spacing={16} alignItems="center">
                    <Grid item>
                      <IconButton
                        color="inherit"
                        onClick={() => toggleLeftMenu()}
                      >
                        <EditIcon />
                      </IconButton>
                    </Grid>
                    <Grid item>
                     FMBM Job Listing Board - Employer
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
        <Drawer anchor="left" open={expanded} onClose={() => toggleLeftMenu()}>
          <div style={styles.bar}>
            <PostJob />
          </div>
        </Drawer>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item>
            <GetJobsEmployer />
          </Grid>
          <Grid item>
            <GetJobsGithub />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleLeftMenu: () => dispatch(toggleLeft()),
});

const mapStateToProps = state => ({
  expanded: state.employerDashReducer.expanded,
});

EmployerDashBoard.propTypes = {
  toggleLeftMenu: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployerDashBoard);
