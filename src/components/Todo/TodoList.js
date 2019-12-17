import React, {memo, useCallback} from 'react'
import {connect} from 'react-redux'
import {Button, Checkbox} from 'antd'
import {actions} from "../../store/reducers/todo"

const TodoItem = ({id, value, completed, handleDelete, handleToggle}) => {
    const handleClick = () => {
        handleDelete && handleDelete(id)
    }
    const handleToggleChange = () => {
        handleToggle && handleToggle(id)
    }
    return (
        <div className="todo-item">
            <Checkbox
                onChange={handleToggleChange}
                checked={completed}/>
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
    const {todoList,remove_item, toggle_item} = props
    const handleDelete = useCallback(id => {
        remove_item && remove_item(id)
    }, [])
    const handleToggle = useCallback(id => {
        toggle_item && toggle_item(id)
    }, [])
    return (
        <div className="todo-list">
            {
                !!todoList.length ?
                    todoList.map(item => (
                        <TodoItem
                            handleToggle={handleToggle}
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
