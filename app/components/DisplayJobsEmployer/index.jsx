import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import JobEmployer from '../JobEmployer';

import styles from './styles';

const DisplayJobsEmployer = ({ listOfJobs, error, loading }) => {
  if (error) {
    return <Typography component="h2" variant="display1" gutterBottom>{`Error: ${error.message}`}</Typography>;
  }

  if (loading) {
    return <CircularProgress style={styles.position} color="secondary" />;
  }

  return (
    <div>
      <Typography component="h2" variant="display1" gutterBottom style={styles.text}>{`Number of jobs available: ${listOfJobs.length}`}</Typography>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {listOfJobs.map(x => <JobEmployer job={x.job} key={x.id} />)}
      </Grid>
    </div>
  );
};

DisplayJobsEmployer.propTypes = {
  listOfJobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

DisplayJobsEmployer.defaultProps = {
  error: null,
};

export default DisplayJobsEmployer;
