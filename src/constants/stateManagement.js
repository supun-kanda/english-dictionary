// action types
export const
    SEARCH_SUGGESSTION = 'SEARCH_SUGGESSTION',
    FETCH_SELECTED_WORD = 'FETCH_SELECTED_WORD',
    SET_SELECTED_WORD_ID = 'SET_SELECTED_WORD_ID',
    FETCH_WORD_GRID = 'FETCH_WORD_GRID';

// action states
export const
    ACTION_STATES = {
        COMPLETE: 'COMPLETE',
        IN_PROGRESS: 'IN_PROGRESS',
        FAILURE: 'FAILURE',
        SHOULD_UPDATE: 'SHOULD_UPDATE'
    };

// initial states
export const
    SEARCH_SUGGESSTION_INITIAL = {
        searchSuggestions: {
            isFetching: false,
            shouldUpdate: true,
        }
    },
    SELECTED_WORD_ID_INITIAL = {
        id: null,
        isFetching: false
    },
    FETCH_WORD_GRID_INITIAL = {
        isFetching: false,
        shouldUpdate: true,
    }
