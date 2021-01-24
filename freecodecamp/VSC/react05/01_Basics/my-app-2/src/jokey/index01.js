import React from 'react'
import ReactDOM from 'react-dom'

import Jokey from './jokey/Jokey'

function App() {
  return (
    <div>
    <Jokey 
      question="sdfjj ekrkjwll" answer="eerjjej"
    />
    <Jokey 
      question="ggjjdk rllee" answer="ttjeiit"
    />    
    <Jokey 
      question="ggoetthhe ddrre" answer="ggiis tthher  tti"
    />    
    <Jokey 
      answer="eehh"
    />    
    <Jokey 
      question="ethhek ee" answer="tiieot"
    />
    </div>   
  );
}

ReactDOM.render(<App />, document.getElementById('root'))