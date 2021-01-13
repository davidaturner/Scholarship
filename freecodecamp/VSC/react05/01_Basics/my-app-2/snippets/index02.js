import React from 'react';
import ReactDOM from 'react-dom';

// functional component
function MyList() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}
ReactDOM.render(
  <MyList />,
  document.getElementById('root'));

