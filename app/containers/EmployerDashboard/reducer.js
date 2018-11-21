import TOGGLE_LEFT from './constants';

const initialState = {
  expanded: false,
};

const employerDashReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LEFT:
      return {
        ...state,
        expanded: !state.expanded,
      };
    default:
      return state;
  }
};

export default employerDashReducer;
