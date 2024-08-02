
export const LIST_RECENT_SEARCH = 'LIST_RECENT_SEARCH';

export function handleRecentSearchList(recentSearchList) {
  return {
    type: LIST_RECENT_SEARCH,
    recentSearchList,
  };
}
