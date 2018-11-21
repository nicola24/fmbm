import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import DisplayJobsGithub from '../../components/DisplayJobsGithub';

import {
  fetchJobsBegin,
  fetchJobsSuccess,
  fetchJobsError,
} from './actions';

class getJobsGithub extends PureComponent {
  componentDidMount() {
    const {
      fetchBegin,
      fetchError,
      fetchSuccess,
    } = this.props;

    fetchBegin();
    fetch('/api/githubjobs')
      .then(res => res.json())
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  }

  render() {
    return (
      <DisplayJobsGithub {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBegin: () => dispatch(fetchJobsBegin()),
  fetchSuccess: jobs => dispatch(fetchJobsSuccess(jobs)),
  fetchError: error => dispatch(fetchJobsError(error)),
});

const mapStateToProps = state => ({
  githubJobs: state.getJobsGithubReducer.githubJobs,
  loading: state.getJobsGithubReducer.loading,
  error: state.getJobsGithubReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(getJobsGithub);
