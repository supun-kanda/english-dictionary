// services
import { request } from "../services/graphql";

// queries
import { last5Words } from "../constants/queries";

// constants
import { SEARCH_SUGGESSTION, ACTION_STATES } from "../constants/stateManagement";

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
        return request(last5Words)
            .then(data => {
                return dispatch(finishFetching(data))
            })
            .catch(err => dispatch(failFetching(err)));
    };

