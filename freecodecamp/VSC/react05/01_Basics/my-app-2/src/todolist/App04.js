import React, { Component } from 'react';

import Todoitem from './Todoitem';

import todoitems from './todoitems'

class App extends Component {
    constructor() {
        super()
        this.state={
            todoitems: todoitems
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updated = prevState.todoitems.map(todoitem => {
                if (todoitem.id === id) {
                    todoitem.completed = !todoitem.completed
                }
                return todoitem
            })
            return (
                todoitems: updated
            )
        })
    }

    render() {
        const todoItemComponents = this.state.todoitems.map(item =>
            <Todoitem key={item.id} item={item} handleChange={this.handleChange}></Todoitem>)
        return (
        <div style={body}>
            <div style={todo_list}>
                <h2 style={todo_list_items}>TO-DO-LIST</h2>
                {todoItemComponents}
            </div>
        </div>
        )
    }
}

/* Styling */
const body = {
    margin: "0",
    padding: "0",
    backgroundColor: "#f2f2f2",
    height: "850px"
}

const todo_list = {
    backgroundColor: "white",
    width: "30%",
    height: "600px",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #efefef",
    padding: "30px",
    boxShadow: "10px 10px 8px #888888",
    position: "absolute",
    top: "60px",
    left: "600px"
}

const todo_list_items = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "28px",
    color: "#4dc3ff",
    backgroundColor: "#e6e6e6",
    width: "30%",
}

export default App