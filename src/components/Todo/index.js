import React, {memo} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

import './index.scss'

const Todo = _ => {
    return (
        <div className="todo-wrap">
            <AddTodo />
            <TodoList />
        </div>
    )
}

export default memo(Todo)