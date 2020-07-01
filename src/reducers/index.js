// core libraries
import { combineReducers } from "redux";

// reducers
import { search } from "./search";
import { selectedWord } from "./selectedWord";

export default combineReducers(
    {
        search,
        selectedWord
    }
);
