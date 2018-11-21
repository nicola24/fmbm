import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import ReadMoreReact from 'read-more-react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import styles from './styles';
import A from './A';

const JobGithub = ({ job }) => (
  <Grid item>
    <Card style={styles.card}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          {job.company_logo === null ? (
            <Avatar style={styles.avatar}>{`${job.company[0]}${job.company[1]}.`}</Avatar>
          ) : (
            <img src={job.company_logo} alt="logo" style={styles.img} />
          )}
        </Grid>
        <Grid item>
          <Typography variant="headline" component="h2" gutterBottom style={styles.title}>
            <A href={job.url} target="_blank" rel="noopener noreferrer" style={styles.link}>{job.title}</A>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="subheading" gutterBottom style={styles.sub}>
        {`${job.company} | ${job.location} | ${job.type}`}
      </Typography>
      <div style={styles.desc}>
        <ReadMoreReact text={job.description.replace(/<\/?[^>]+(>|$)/g, '')} ideal={200} />
      </div>
      <Typography variant="caption" gutterBottom>
        {`posted ${moment(job.created_at, 'ddd MMM DD').fromNow()}`}
      </Typography>
    </Card>
  </Grid>
);

JobGithub.propTypes = {
  job: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    created_at: PropTypes.string,
    company_logo: PropTypes.string,
  }).isRequired,
};

export default JobGithub;
