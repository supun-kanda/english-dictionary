// action types
export const
    SEARCH_SUGGESSTION = 'SEARCH_SUGGESSTION';

// action states
export const
    ACTION_STATES = {
        COMPLETE: 'COMPLETE',
        IN_PROGRESS: 'IN_PROGRESS',
        FAILURE: 'FAILURE'
    };

// initial states
export const SEARCH_SUGGESSTION_INITIAL = {
    searchSuggestions: {
        isFetching: false,
        shouldUpdate: true,
    }
};
