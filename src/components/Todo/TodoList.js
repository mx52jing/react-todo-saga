import React, {memo, useCallback} from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import {actions} from "../../store/reducers/todo"

const TodoItem = ({id, value, completed, handleDelete}) => {
    const handleClick = () => {
        handleDelete && handleDelete(id)
    }
    return (
        <div className="todo-item">
            <span className="item-value">{value}</span>
            <Button
                onClick={handleClick}
                className="item-btn">
                删除
            </Button>
        </div>
    )
}

const TodoList = memo(props => {
    console.log('todo list props', props);
    const {todoList,remove_item} = props
    const handleDelete = useCallback(id => {
        remove_item && remove_item(id)
    }, [])
    return (
        <div className="todo-list">
            {
                !!todoList.length ?
                    todoList.map(item => (
                        <TodoItem
                            handleDelete={handleDelete}
                            key={item.id}
                            {...item}/>
                    )) : <span className="no-sing">暂无事项</span>
            }
        </div>
    )
})

export default connect(
    state => state.todo,
    actions
)(TodoList)
