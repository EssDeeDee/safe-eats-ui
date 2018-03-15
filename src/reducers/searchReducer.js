import {
  SEARCH_SUCCESS,
  SEARCH_ERROR
  } from '../actions/searchActions';
import { initialState } from '../state/initialState';
export default function search(state = initialState, action) {
  console.log('searchReducer', action)
  switch (action.type) {
    case SEARCH_SUCCESS:
      console.log('initiate search?')
      return action.value;
    case SEARCH_ERROR:
      return state;
    default:
      return state;
  }
}