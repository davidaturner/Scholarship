import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  // const date = new Date();
  const date = new Date(2021, 1, 9, 7); // YYYY, MM, DD, HH
  const hours = date.getHours();
  let timeOfDay;
  // Dynamic styling!
  const todstyle = {
    fontSize: "30px",
    width: "250px"
  }

  if (hours < 12) {
    timeOfDay = "morning"
    todstyle.color = "#2eb82e"
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "afternoon"
    todstyle.color = "#ff8c00"
    todstyle.backgroundColor = "#ffffb3"
  } else {
    timeOfDay = "night"
    todstyle.color = "#ff0000"
  }
  return (
    <h1 style={todstyle}>Good {timeOfDay}!</h1>
  )
}

// Styling
const greeting = {
  color: "#ff8c00",
  backgroundColor: "#ffffb3",
  width: "250px"
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));

