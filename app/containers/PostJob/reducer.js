import {
  ADD_TITLE,
  ADD_BUDGET,
  ADD_CATEGORY,
  ADD_DESCRIPTION,
  ADD_ADMIN,
} from './constants';

const initialState = {
  title: '',
  category: '',
  budget: '',
  description: '',
  admin: '',
};

const postJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case ADD_BUDGET:
      return {
        ...state,
        budget: action.payload,
      };
    case ADD_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ADD_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };
    case ADD_ADMIN:
      return {
        ...state,
        admin: action.payload,
      };
    default:
      return state;
  }
};

export default postJobReducer;
