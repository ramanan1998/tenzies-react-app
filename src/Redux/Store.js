import { legacy_createStore, combineReducers } from "redux";
import { DiceReducer, tenziesReducer } from "./Reducer";

const allReducer = combineReducers({
    dice : DiceReducer,
    tenzies : tenziesReducer
})

export const store = legacy_createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());