// services
import { request } from "../services/graphql";

// constants
import { FETCH_WORD_GRID, ACTION_STATES } from "../constants/stateManagement";
import { paginateWords } from "../constants/queries";
import { wordGridpaginationLimit } from "../constants/appConstants";

const
    startFetch = () => ({
        type: FETCH_WORD_GRID,
        state: ACTION_STATES.IN_PROGRESS
    }),
    finishedFetch = data => ({
        type: FETCH_WORD_GRID,
        state: ACTION_STATES.COMPLETE,
        data: data.words
    }),
    failedFetch = error => ({
        type: FETCH_WORD_GRID,
        state: ACTION_STATES.FAILURE,
        error: error
    })

export const fetchWordGridBatch = pageNumber =>
    dispatch => {
        dispatch(startFetch());
        return request(paginateWords(pageNumber, wordGridpaginationLimit))
            .then(data => dispatch(finishedFetch(data)))
            .catch(err => dispatch(failedFetch(err)));
    };

