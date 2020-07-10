// core libraries
import { combineReducers } from "redux";

// reducers
import { search } from "./search";
import { selectedWord } from "./selectedWord";
import { wordGrid } from './wordGrid'

export default combineReducers(
    {
        search,
        selectedWord,
        wordGrid
    }
);
