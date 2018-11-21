import {
  ADD_TITLE,
  ADD_BUDGET,
  ADD_CATEGORY,
  ADD_DESCRIPTION,
  ADD_ADMIN,
} from './constants';

export function addTitle(title) {
  return {
    type: ADD_TITLE,
    payload: title,
  };
}

export function addBudget(budget) {
  return {
    type: ADD_BUDGET,
    payload: budget,
  };
}

export function addCategory(category) {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
}

export function addDescription(description) {
  return {
    type: ADD_DESCRIPTION,
    payload: description,
  };
}

export function addAdmin(admin) {
  return {
    type: ADD_ADMIN,
    payload: admin,
  };
}
