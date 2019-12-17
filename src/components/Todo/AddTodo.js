import React, {useState} from 'react'
import {Input} from 'antd';
import {connect} from 'react-redux'
import {actions} from "../../store/reducers/todo"

const {Search} = Input;

const AddTodo = props => {
    const [todoValue, handleTodoValue] = useState('')
    const handleChange = e => {
        handleTodoValue(e.target.value)
    }
    const handleAddItem = _ => {
        const {add_item} = props
        add_item && add_item(todoValue)
        handleTodoValue('')
    }
    return (
        <div className="add-todo">
            <Search
                onChange={handleChange}
                placeholder="请填写待办事项"
                enterButton="点击添加"
                onSearch={handleAddItem}
                value={todoValue}
            />
        </div>
    )
}

export default connect(
    null,
    actions
)(AddTodo)