import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import ReadMoreReact from 'read-more-react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const JobEmployer = ({ job }) => (
  <Grid item>
    <Card style={styles.card}>
      <Typography variant="headline" component="h2" gutterBottom color="primary">
        {job.title}
      </Typography>
      <Typography variant="subheading" gutterBottom>
        {`${job.category} | $${job.budget}k`}
      </Typography>
      <div style={styles.desc}>
        <ReadMoreReact text={job.description} ideal={200} />
      </div>
      {job.applied === undefined ? null : (
        <div>
          <Typography variant="subheading" gutterBottom>
            {`Number of applicants: ${job.applied.length}`}
          </Typography>
          <Typography ariant="body2" gutterBottom style={styles.applicant}>
            Applicants:
          </Typography>
          {job.applied.map((x, i) => (
            <Typography ariant="body1" gutterBottom key={i} style={styles.applied}>
              {`• ${x.user} applied on ${moment.utc(x.time).format('ddd MMM DD')}`}
            </Typography>
          ))}
        </div>
      )}
      <Typography variant="caption" gutterBottom>
        {`Posted by ${job.admin} - ${moment.utc(job.time).startOf('min').fromNow()}.`}
      </Typography>
    </Card>
  </Grid>
);

JobEmployer.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    budget: PropTypes.string,
    description: PropTypes.string,
    admin: PropTypes.string,
    time: PropTypes.string,
    applied: PropTypes.array,
  }).isRequired,
};

export default JobEmployer;
