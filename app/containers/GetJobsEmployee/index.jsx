import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import DisplayJobsEmployee from '../../components/DisplayJobsEmployee';

import {
  fetchJobsBegin,
  fetchJobsSuccess,
  fetchJobsError,
} from './actions';

class GetJobsEmployee extends PureComponent {
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
      <DisplayJobsEmployee {...this.props} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBegin: () => dispatch(fetchJobsBegin()),
  fetchSuccess: jobs => dispatch(fetchJobsSuccess(jobs)),
  fetchError: error => dispatch(fetchJobsError(error)),
});

const mapStateToProps = state => ({
  listOfJobs: state.getJobsEmployeeReducer.listOfJobs,
  loading: state.getJobsEmployeeReducer.loading,
  error: state.getJobsEmployeeReducer.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(GetJobsEmployee);
