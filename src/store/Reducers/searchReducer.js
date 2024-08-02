import * as actions from '../Actions/searchAction';

export const intialState = {
  recentSearchList: [],
};

export default function searchReducer(state = intialState, action) {
  switch (action.type) {
    case actions.LIST_RECENT_SEARCH:
      return {
        ...state,
        recentSearchList: action.recentSearchList,
      }
    default:
      return state;
  }
}
