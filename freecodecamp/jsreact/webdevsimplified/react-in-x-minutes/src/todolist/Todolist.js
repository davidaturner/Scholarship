import React from 'react'
import Todo from './Todo'
export default function TodoList( {todos} ) {
    return(
        todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
        })
        // todos.map(todo => {
        //     return <Todo key={todo} todo={todo}/>
        // })
        // Missing key to determine what todo to display. Will display ALL.
        // todos.map(todo => {
        //     return <Todo todo={todo} />
        // })
    )
}