// constants
import { SET_SELECTED_WORD_ID, FETCH_SELECTED_WORD, SELECTED_WORD_ID_INITIAL, ACTION_STATES } from "../constants/stateManagement";

export function selectedWord(state = SELECTED_WORD_ID_INITIAL, action) {
    if (action.type === SET_SELECTED_WORD_ID)
        return {
            id: action.data
        }
    else if (action.type !== FETCH_SELECTED_WORD)
        return state;

    switch (action.state) {
        case ACTION_STATES.IN_PROGRESS:
            return {
                isFetching: true
            };
        case ACTION_STATES.COMPLETE:
            return {
                isFetching: false,
                ...action.data
            };
        case ACTION_STATES.FAILURE:
            return {
                isFetching: false,
                error: action.error
            };
        default:
            return state;
    }
}

