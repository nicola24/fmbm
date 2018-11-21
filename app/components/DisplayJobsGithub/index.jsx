import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import JobGithub from '../JobGithub';

import styles from './styles';

const DisplayJobsGithub = ({ githubJobs, error, loading }) => {
  if (error) {
    return <Typography component="h2" variant="display1" gutterBottom style={styles.text}>{`Error: ${error.message}`}</Typography>;
  }

  if (loading) {
    return <CircularProgress style={styles.position} color="secondary" />;
  }

  return (
    <div>
      <Typography component="h2" variant="display1" gutterBottom style={styles.text}>GitHub Jobs</Typography>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {githubJobs.map(x => <JobGithub job={x} key={x.id} />)}
      </Grid>
    </div>
  );
};

DisplayJobsGithub.propTypes = {
  githubJobs: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

DisplayJobsGithub.defaultProps = {
  error: null,
};

export default DisplayJobsGithub;
