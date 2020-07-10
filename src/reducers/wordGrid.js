// constants
import { FETCH_WORD_GRID, SEARCH_SUGGESSTION_INITIAL, ACTION_STATES } from "../constants/stateManagement";

export function wordGrid(state = SEARCH_SUGGESSTION_INITIAL, action) {
    if (action.type !== FETCH_WORD_GRID)
        return state;
    switch (action.state) {
        case ACTION_STATES.IN_PROGRESS:
            return {
                isFetching: true,
                shouldUpdate: true
            };
        case ACTION_STATES.COMPLETE:
            return {
                isFetching: false,
                shouldUpdate: false,
                data: action.data
            };
        case ACTION_STATES.FAILURE:
            return {
                isFetching: false,
                shouldUpdate: true,
                error: action.error
            };
        default:
            return state;
    }
}