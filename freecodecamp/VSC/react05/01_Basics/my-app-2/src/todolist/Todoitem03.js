import React from 'react';

function Todoitem (props) {
    const completedStyle = {
        fontStyle : "italic",
        color: "#cdcdcd",
        textDecoration : "line-through"
    }

    return (
    <div style={todoitem_content}>
        <input type="checkbox" 
            checked={props.item.completed}
            onChange={()=> props.handleChange(props.item.id)}>
        </input>
        <p style={props.item.completed?completedStyle:null}>{props.item.task}</p>
    </div>
    )
}

const todoitem_content = {
    display: "flex",
    justifyContent: "flex_start",
    alignItems: "center",
    padding: "30px 20px 0",
    width: "70%",
    borderBottom: "1px solid #cecece",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "100",
    fontSize: "15px",
    color: "#333333"
}

export default Todoitem