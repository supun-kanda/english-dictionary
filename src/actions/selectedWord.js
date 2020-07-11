// constants
import { FETCH_SELECTED_WORD, SET_SELECTED_WORD_ID, ACTION_STATES } from "../constants/stateManagement";
import { fetchSelectedWordQuery } from "../constants/queries";

// services
import { request } from "../services/graphql";

const
    startFetch = () => ({
        type: FETCH_SELECTED_WORD,
        state: ACTION_STATES.IN_PROGRESS
    }),
    finishedFetch = data => ({
        type: FETCH_SELECTED_WORD,
        state: ACTION_STATES.COMPLETE,
        data: data.word
    }),
    failedFetch = error => ({
        type: FETCH_SELECTED_WORD,
        state: ACTION_STATES.FAILURE,
        error: error
    });

export const
    setSelectedWordId = id => ({
        type: SET_SELECTED_WORD_ID,
        data: id
    }),
    fetchSelectedWord = id =>
        dispatch => {
            dispatch(startFetch());
            return request(fetchSelectedWordQuery(id))
                .then(data => dispatch(finishedFetch(data)))
                .catch(err => dispatch(failedFetch(err)))
        };
