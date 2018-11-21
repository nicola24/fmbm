import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class ApplyJob extends Component {
  applyUser() {
    const { id } = this.props;

    fetch(`/api/postapplicant/${id}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        applied: [
          {
            user: 'Nicolas Peyrichou',
            time: moment(),
          },
        ],
      }),
    }).catch(err => console.log(err));
  }

  render() {
    const { applied } = this.props;

    const userHasApply = () => {
      return applied.filter(x => x.user === 'Nicolas Peyrichou').length === 1 ? (
        <Typography gutterBottom style={{ fontStyle: 'italic' }}>
          ✔︎ you applied to this position
        </Typography>
      ) : (
        <Button variant="contained" size="small" color="primary" onClick={() => this.applyUser()}>
          Apply
        </Button>
      );
    };

    return (
      <div>
        {applied === undefined ? (
          <Button variant="contained" size="small" color="primary" onClick={() => this.applyUser()}>
           Apply
          </Button>
        ) : userHasApply()}
      </div>
    );
  }
}

ApplyJob.propTypes = {
  applied: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.string.isRequired,
};

ApplyJob.defaultProps = {
  applied: undefined,
};

export default ApplyJob;
