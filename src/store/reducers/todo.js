const initState = {
    todoList: []
}

export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    TOGGLE_ITEM: 'TOGGLE_ITEM',
    UPDATE_LIST: 'UPDATE_LIST',
    ERROR: 'ERROR'
}

export const actions = {
    add_item: (value) => {
        return {type: actionTypes.ADD_ITEM, value}
    },
    remove_item: id => {
        return {type: actionTypes.REMOVE_ITEM, id}
    },
    toggle_item: id => {
        return {type: actionTypes.TOGGLE_ITEM, id}
    }
}

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_LIST:
            return {
              todoList: action.data
            }
        default:
            return state
    }
}
