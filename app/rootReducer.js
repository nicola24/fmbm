import { combineReducers } from 'redux';
import postJobReducer from './containers/PostJob/reducer';
import getJobsEmployerReducer from './containers/GetJobsEmployer/reducer';
import getJobsGithubReducer from './containers/GetJobsGithub/reducer';
import employerDashReducer from './containers/EmployerDashboard/reducer';
import getJobsEmployeeReducer from './containers/GetJobsEmployee/reducer';

export default combineReducers({
  postJobReducer,
  getJobsEmployerReducer,
  getJobsGithubReducer,
  employerDashReducer,
  getJobsEmployeeReducer,
});
