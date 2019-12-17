import {fork} from 'redux-saga/effects'
import {addFlow} from "./todo";

export default function* () {
    yield fork(addFlow)
}
