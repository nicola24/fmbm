import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import JobEmployee from '../JobEmployee';

import styles from './styles';

const DisplayJobsEmployee = ({ listOfJobs, error, loading }) => {
  if (error) {
    return <Typography component="h2" variant="display1" gutterBottom>{`Error: ${error.message}`}</Typography>;
  }

  if (loading) {
    return <CircularProgress style={styles.position} color="secondary" />;
  }

  return (
    <div>
      <Typography component="h2" variant="display1" gutterBottom style={styles.text}>{`Number of available: ${listOfJobs.length}`}</Typography>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {listOfJobs.map(x => <JobEmployee job={x.job} key={x.id} id={x.id} />)}
      </Grid>
    </div>
  );
};

DisplayJobsEmployee.propTypes = {
  listOfJobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

DisplayJobsEmployee.defaultProps = {
  error: null,
};

export default DisplayJobsEmployee;
