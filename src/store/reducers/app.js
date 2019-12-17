const initState = {
    isFetching: false,
    msg: {
        type: 0, /*0=>成功 1=>失败*/
        content: ''
    }
}

export const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',
    SET_MSG: 'SET_MSG'
}

export const actions = {
    clear_msg: () => {
        return {
            type: actionTypes.SET_MSG,
            msg: {type: 0, content: ''}
        }
    }
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {...state, isFetching: true}
        case actionTypes.FETCH_END:
            return {...state, isFetching: false}
        case actionTypes.SET_MSG:
            return {...state, msg: action.msg}
        default:
            return state
    }
}