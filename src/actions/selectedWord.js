// constants
import { FETCH_SELECTED_WORD, SET_SELECTED_WORD_ID, ACTION_STATES } from "../constants/stateManagement";
import { fetchSelectedWordQuery } from "../constants/queries";

// services
import { request } from "../services/graphql";

const
    startFetching = () => {
        return {
            type: FETCH_SELECTED_WORD,
            state: ACTION_STATES.IN_PROGRESS
        }
    },
    finishFetching = data => {
        return {
            type: FETCH_SELECTED_WORD,
            state: ACTION_STATES.COMPLETE,
            data: data.word
        }
    },
    failFetching = error => {
        return {
            type: FETCH_SELECTED_WORD,
            state: ACTION_STATES.FAILURE,
            error: error
        }
    };

export const
    setSelectedWordId = id => {
        return {
            type: SET_SELECTED_WORD_ID,
            data: id
        }
    },
    fetchSelectedWord = id =>
        dispatch => {
            dispatch(startFetching());
            return request(fetchSelectedWordQuery(id))
                .then(data => dispatch(finishFetching(data)))
                .catch(err => dispatch(failFetching(err)))
        };
