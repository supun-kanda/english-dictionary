// services
import { request } from "../services/graphql";

// constants
import { SEARCH_SUGGESSTION, ACTION_STATES } from "../constants/stateManagement";
import { last5WordsQuery } from "../constants/queries";

// temp
import { setSelectedWordId } from "./selectedWord";

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
        dispatch(setSelectedWordId("5ee73bb1a8e0f30b6db0e679"));
        dispatch(startFetching());
        return request(last5WordsQuery)
            .then(data => dispatch(finishFetching(data)))
            .catch(err => dispatch(failFetching(err)));
    };

