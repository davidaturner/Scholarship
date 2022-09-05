import React, { useState, useRef } from 'react'
import TodoList from './Todolist'
/* npm i uuidv4 */
import { v4 as uuid}  from 'uuid'

function TodoApp() {
    /* todos - list of todos
        setTodos - function to update todos list. 
        'Todo1 and 'Todo2' are examples defaulting useState.
        Initial state should be an empty array (of Todos)
        */
    const [todos, setTodos] = useState([])
    // const [todos, setTodos] = useState([{id: 1, name: 'Todo1', completed: false}])
    // const [todos, setTodos] = useState(['Todo1', 'Todo2'])
    const todoNameRef = useRef()

    function handleAddTodoClick(e) {
        const name = todoNameRef.current.value
        if (name === "") return
        setTodos(previousTodos => {
            return [...previousTodos, {id:uuid(), name: name, completed:false}]
            // return [...previousTodos, {id:2, name: name, completed:false}]
        })
        // console.log(name)
        todoNameRef.current.value = null
    }

    return (
        <>
            <TodoList todos={todos}/>
            <input ref={todoNameRef} type="text" />
            <button onClick={handleAddTodoClick}>Add Todo</button>    
            <button>Clear Completed</button>
            <div>0 left Todos</div>
        </>

    )
}
export default TodoApp