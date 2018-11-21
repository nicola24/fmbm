import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {
  addTitle,
  addBudget,
  addCategory,
  addDescription,
  addAdmin,
} from './actions';

import toggleLeft from '../EmployerDashboard/actions';

import styles from './styles';

class PostJob extends Component {
  onSubmit(e) {
    const {
      title,
      category,
      budget,
      description,
      admin,
    } = this.props;

    fetch('/api/postjob', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        category,
        budget,
        description,
        admin,
        time: moment(),
      }),
    }).catch(err => console.log(err));

    this.toggleLeft();
    e.preventDefault();
    e.target.reset();
  }

  render() {
    const {
      onChangeTitle,
      onChangeBudget,
      onChangeCategory,
      onChangeDescription,
      onChangeAdmin,
    } = this.props;
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
        >
          <form onSubmit={e => this.onSubmit(e)}>
            <Typography component="h2" variant="display1" gutterBottom style={styles.text}>Add a new job:</Typography>
            <Grid item>
              <TextField
                label="Job Title"
                onChange={onChangeTitle}
                type="text"
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Job Category"
                onChange={onChangeCategory}
                type="text"
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Budget"
                onChange={onChangeBudget}
                type="number"
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Job Description"
                multiline
                rows="5"
                onChange={onChangeDescription}
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Posted by"
                onChange={onChangeAdmin}
                type="text"
                margin="normal"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" color="primary" style={{ marginTop: 10 }}>
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeTitle: e => dispatch(addTitle(e.target.value)),
  onChangeBudget: e => dispatch(addBudget(e.target.value)),
  onChangeCategory: e => dispatch(addCategory(e.target.value)),
  onChangeDescription: e => dispatch(addDescription(e.target.value)),
  onChangeAdmin: e => dispatch(addAdmin(e.target.value)),
  toggleLeft: () => toggleLeft(),
});

const mapStateToProps = state => ({
  title: state.postJobReducer.title,
  category: state.postJobReducer.category,
  budget: state.postJobReducer.budget,
  description: state.postJobReducer.description,
  admin: state.postJobReducer.admin,
});

PostJob.propTypes = {
  onChangeTitle: PropTypes.func.isRequired,
  onChangeBudget: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangeDescription: PropTypes.func.isRequired,
  onChangeAdmin: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  budget: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  admin: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostJob);
