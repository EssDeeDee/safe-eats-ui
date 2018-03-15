export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export function initiateSearch(value) {
  console.log('searchAction value', value)
  //make api call and return either success or error
  return {
    type: SEARCH_SUCCESS,
    value: value
  }
}