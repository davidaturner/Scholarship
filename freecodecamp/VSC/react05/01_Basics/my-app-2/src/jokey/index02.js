import React from 'react'
import ReactDOM from 'react-dom'

import Jokey from './jokey/Jokey'
import jokeydata from './jokey/jokeydata'

function App() {
  const jokeycomponents = jokeydata.map(function(joke) {
    return <Jokey key={joke.id} question={joke.question} answer={joke.answer} />
  })

  return (
    <div>
      {jokeycomponents}
    </div>   
  );
}

ReactDOM.render(<App />, document.getElementById('root'))