
export const LIST_RECENT_SEARCH = 'LIST_RECENT_SEARCH';
export const SAVE_SERVICE_LIST = 'SAVE_SERVICE_LIST';
export const SAVE_HISTORY_LIST = 'SAVE_HISTORY_LIST';
export const SAVE_SERVICE_FAVOURITE_LIST = 'SAVE_SERVICE_FAVOURITE_LIST';

export function recentSearchList(recentSearchList) {
  return {
    type: LIST_RECENT_SEARCH,
    recentSearchList,
  };
}
