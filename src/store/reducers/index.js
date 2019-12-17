import {combineReducers} from 'redux'
import {reducer as todo} from './todo'
import {reducer as app} from "./app";

export default combineReducers({
    todo,
    app
})
