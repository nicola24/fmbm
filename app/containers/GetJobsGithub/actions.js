import {
  FETCH_JOBS_BEGIN,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from './constants';

export function fetchJobsBegin() {
  return {
    type: FETCH_JOBS_BEGIN,
  };
}

export function fetchJobsSuccess(jobs) {
  return {
    type: FETCH_JOBS_SUCCESS,
    payload: jobs,
  };
}

export function fetchJobsError(error) {
  return {
    type: FETCH_JOBS_ERROR,
    payload: error,
  };
}
