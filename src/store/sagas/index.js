import {fork} from 'redux-saga/effects'
import {addFlow,removeItemFlow} from "./todo";

export default function* () {
    yield fork(addFlow)
    yield fork(removeItemFlow)
}
