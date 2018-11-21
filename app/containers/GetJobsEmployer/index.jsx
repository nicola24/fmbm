import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import DisplayJobsEmployer from '../../components/DisplayJobsEmployer';

import {
  fetchJobsBegin,
  fetchJobsSuccess,
  fetchJobsError,
} from './actions';

class GetJobsEmployer extends PureComponent {
  componentDidMount() {
    const {
      fetchBegin,
      fetchError,
      fetchSuccess,
    } = this.props;

    fetchBegin();
    fetch('/api/getjobs')
      .then(res => res.json())
      .then(data => fetchSuccess(data))
      .catch(error => fetchError(error));
  }

  render() {
    return (
      <DisplayJobsEmployer {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBegin: () => dispatch(fetchJobsBegin()),
  fetchSuccess: jobs => dispatch(fetchJobsSuccess(jobs)),
  fetchError: error => dispatch(fetchJobsError(error)),
});

const mapStateToProps = state => ({
  listOfJobs: state.getJobsEmployerReducer.listOfJobs,
  loading: state.getJobsEmployerReducer.loading,
  error: state.getJobsEmployerReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(GetJobsEmployer);
