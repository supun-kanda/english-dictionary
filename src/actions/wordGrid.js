// services
import { request } from "../services/graphql";

// constants
import { FETCH_WORD_GRID, ACTION_STATES } from "../constants/stateManagement";
import { paginateWords } from "../constants/queries";
import { wordGridpaginationLimit } from "../constants/appConstants";

const
    startFetching = () => {
        return {
            type: FETCH_WORD_GRID,
            state: ACTION_STATES.IN_PROGRESS
        }
    },
    finishFetching = data => {
        return {
            type: FETCH_WORD_GRID,
            state: ACTION_STATES.COMPLETE,
            data: data.words
        }
    },
    failFetching = error => {
        return {
            type: FETCH_WORD_GRID,
            state: ACTION_STATES.FAILURE,
            error: error
        }
    }

export const fetchWordGridBatch = (cursor) =>
    dispatch => {
        dispatch(startFetching());
        return request(paginateWords(cursor, wordGridpaginationLimit))
            .then(data => dispatch(finishFetching(data)))
            .catch(err => dispatch(failFetching(err)));
    };

