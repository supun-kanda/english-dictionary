// constants
import { SEARCH_SUGGESSTION, SEARCH_SUGGESSTION_INITIAL, ACTION_STATES } from "../constants/stateManagement";

export function search(state = SEARCH_SUGGESSTION_INITIAL, action) {
    if (action.type !== SEARCH_SUGGESSTION)
        return state;
    switch (action.state) {
        case ACTION_STATES.IN_PROGRESS:
            return {
                ...state,
                searchSuggestions: {
                    isFetching: true,
                    shouldUpdate: true
                }
            };
        case ACTION_STATES.COMPLETE:
            return {
                ...state,
                searchSuggestions: {
                    isFetching: false,
                    shouldUpdate: false,
                    data: action.data
                }
            };
        case ACTION_STATES.FAILURE:
            return {
                ...state,
                searchSuggestions: {
                    isFetching: false,
                    shouldUpdate: true,
                    error: action.error
                }
            };
        default:
            return state;
    }
}