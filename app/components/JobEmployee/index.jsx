import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import ReadMoreReact from 'read-more-react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ApplyJob from '../ApplyJob';

import styles from './styles';

const JobEmployee = ({ job, id }) => (
  <Grid item>
    <Card style={styles.card}>
      <Typography variant="headline" component="h2" gutterBottom color="primary">
        {job.title}
      </Typography>
      {job.applied === undefined ? (
        <Typography variant="subheading" gutterBottom>
          {`${job.category} | $${job.budget}k | 0 applicants`}
        </Typography>
      ) : (
        <Typography variant="subheading" gutterBottom>
          {`${job.category} | $${job.budget}k | ${job.applied.length} applicants`}
        </Typography>)}
      <div style={styles.desc}>
        <ReadMoreReact text={job.description} ideal={200} />
      </div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="caption" gutterBottom>
            {`Posted ${moment.utc(job.time).startOf('min').fromNow()}.`}
          </Typography>
        </Grid>
        <Grid item>
          <ApplyJob id={id} applied={job.applied} />
        </Grid>
      </Grid>
    </Card>
  </Grid>
);

JobEmployee.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    budget: PropTypes.string,
    description: PropTypes.string,
    admin: PropTypes.string,
    time: PropTypes.string,
    applied: PropTypes.array,
  }).isRequired,
  id: PropTypes.string.isRequired,
};

export default JobEmployee;
