import React, { useState } from 'react'
import TodoList from './Todolist'
function TodoApp() {
    /* todos - list of todos
        setTodos - function to update todos list. 
        'Todo1 and 'Todo2' are examples defaulting useState.
        Initial state should be an empty array (of Todos)
        */
    const [todos, setTodos] = useState([])
    // const [todos, setTodos] = useState([{id: 1, name: 'Todo1', completed: false}])
    // const [todos, setTodos] = useState(['Todo1', 'Todo2'])
    return (
        <>
            <TodoList todos={todos}/>
            <input type="text" />
            <button>Add Todo</button>    
            <button>Clear Completed</button>
            <div>0 left Todos</div>
        </>

    )
}
export default TodoApp