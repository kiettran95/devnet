import axios from 'axios';

import {
  ADD_ISSUE,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ISSUES,
  GET_ISSUE,
  ISSUE_LOADING,
  DELETE_ISSUE
} from './types';

// Add Issue
export const addIssue = issueData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/issues', issueData)
    .then(res =>
      dispatch({
        type: ADD_ISSUE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Issues
export const getIssues = () => dispatch => {
  dispatch(setIssueLoading());
  axios
    .get('/api/issues')
    .then(res =>
      dispatch({
        type: GET_ISSUES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ISSUES,
        payload: null
      })
    );
};

// Get Issue
export const getIssue = id => dispatch => {
  dispatch(setIssueLoading());
  axios
    .get(`/api/issues/${id}`)
    .then(res =>
      dispatch({
        type: GET_ISSUE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ISSUE,
        payload: null
      })
    );
};

// Delete Issue
export const deleteIssue = id => dispatch => {
  axios
    .delete(`/api/issues/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ISSUE,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setIssueLoading = () => {
  return {
    type: ISSUE_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
