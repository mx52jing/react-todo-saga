import {fork} from 'redux-saga/effects'
import {addFlow,removeItemFlow,toggleFlow} from "./todo";

export default function* () {
    yield fork(addFlow)
    yield fork(removeItemFlow)
    yield fork(toggleFlow)
}
