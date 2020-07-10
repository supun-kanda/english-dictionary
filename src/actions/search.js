// services
import { request } from "../services/graphql";

// constants
import { SEARCH_SUGGESSTION, ACTION_STATES } from "../constants/stateManagement";
import { lastWordsQuery } from "../constants/queries";
import { searchSuggestionLimit } from "../constants/appConstants";

const
    startFetching = () => {
        return {
            type: SEARCH_SUGGESSTION,
            state: ACTION_STATES.IN_PROGRESS
        }
    },
    finishFetching = data => {
        return {
            type: SEARCH_SUGGESSTION,
            state: ACTION_STATES.COMPLETE,
            data: data.words
        }
    },
    failFetching = error => {
        return {
            type: SEARCH_SUGGESSTION,
            state: ACTION_STATES.FAILURE,
            error: error
        }
    }

export const searchSuggest = () =>
    dispatch => {
        dispatch(startFetching());
        return request(lastWordsQuery(searchSuggestionLimit))
            .then(data => dispatch(finishFetching(data)))
            .catch(err => dispatch(failFetching(err)));
    };

