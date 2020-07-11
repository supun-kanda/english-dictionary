// services
import { request } from "../services/graphql";

// constants
import { SEARCH_SUGGESSTION, ACTION_STATES } from "../constants/stateManagement";
import { lastWordsQuery } from "../constants/queries";
import { searchSuggestionLimit } from "../constants/appConstants";

const
    startFetch = () => ({
        type: SEARCH_SUGGESSTION,
        state: ACTION_STATES.IN_PROGRESS
    }),
    finishedFetch = data => ({
        type: SEARCH_SUGGESSTION,
        state: ACTION_STATES.COMPLETE,
        data: data.words
    }),
    failedFetch = error => ({
        type: SEARCH_SUGGESSTION,
        state: ACTION_STATES.FAILURE,
        error: error
    })

export const
    setSearchSuggesstionUpdateStatus = state => ({
        type: SEARCH_SUGGESSTION,
        state: ACTION_STATES.SHOULD_UPDATE,
        data: state
    }),
    searchSuggest = () =>
        dispatch => {
            dispatch(startFetch());
            return request(lastWordsQuery(searchSuggestionLimit))
                .then(data => dispatch(finishedFetch(data)))
                .catch(err => dispatch(failedFetch(err)));
        };

