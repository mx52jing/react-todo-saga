import {take, call, put, select} from 'redux-saga/effects'
import uuid from 'uuid'
import {actionTypes as TodoTypes} from "../reducers/todo";
import {actionTypes as AppTypes} from '../reducers/app'

const delay = (ms = 1000) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .5) {
                resolve()
            } else {
                reject('出错了')
            }
        }, ms)
    }))
}

/* 添加待办事项*/
function* addItem(value) {
    try {
        if (!value) {
            yield put({
                type: AppTypes.SET_MSG,
                msg: {
                    type: 1,
                    content: '不能添加空的待办事项'
                }
            })
        } else {
            yield put({type: AppTypes.FETCH_START})
            yield call(delay, 1000)
            const data = yield select(state => state.todo),
                {todoList} = data
            return [
                ...todoList,
                {
                    id: uuid.v4(),
                    value,
                    completed: false
                }
            ]
        }
    } catch (e) {
        yield put({
            type: AppTypes.SET_MSG,
            msg: {
                type: 1,
                content: '因为某些原因添加失败'
            }
        })
    }finally {
        yield put({type: AppTypes.FETCH_END})
    }
}

export function* addFlow() {
    while (true) {
        const request = yield take(TodoTypes.ADD_ITEM),
            lists = yield call(addItem, request.value)
        if (!!lists) {
            yield put({
                type: TodoTypes.UPDATE_LIST,
                data: lists
            })
        }
    }
}