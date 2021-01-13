import React from 'react';

function Todoitem() {
    let todo_item = {
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
    return (
        <div style={todo_item}>
            <input type="checkbox"></input>
            <p style={{ paddingLeft: "5px" }}>Placeholder text</p>
        </div>
    )
}

export default Todoitem