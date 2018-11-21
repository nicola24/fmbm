import {
  FETCH_JOBS_BEGIN,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from './constants';

const initialState = {
  githubJobs: [],
  loading: false,
  error: null,
};

const getJobsGithubReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        githubJobs: action.payload,
      };
    case FETCH_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        githubJobs: [],
      };
    default:
      return state;
  }
};

export default getJobsGithubReducer;
