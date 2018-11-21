import {
  FETCH_JOBS_BEGIN,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from './constants';

const initialState = {
  listOfJobs: [],
  loading: false,
  error: null,
};

const getJobsEmployerReducer = (state = initialState, action) => {
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
        listOfJobs: action.payload,
      };
    case FETCH_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        listOfJobs: [],
      };
    default:
      return state;
  }
};

export default getJobsEmployerReducer;
