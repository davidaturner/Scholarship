import React from 'react';

import Todoitem from './Todoitem';

function App() {
    let todo_list = {
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
    return (
        <div style={body}>
            <div style={todo_list}>
                <h2 style={{
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "28px",
                    color: "#4dc3ff",
                    backgroundColor: "#e6e6e6",
                    width: "30%",
                }}>TO-DO-LIST</h2>
                <Todoitem />
                <Todoitem />
                <Todoitem />
                <Todoitem />
            </div>
        </div>
    )
}

const body = {
    margin: "0",
    padding: "0",
    backgroundColor: "#f2f2f2",
    height: "850px"
}
export default App