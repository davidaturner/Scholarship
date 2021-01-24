import React from 'react'
import ReactDOM from 'react-dom'

import sproducts from './sproducts/sproductdata'

import SProduct from './sproducts/SProduct'

function App() {
  const productsComponent = sproducts.map(item =>
  <SProduct key={item.id} product={item}/>
  )
  return(
    <div>
      {productsComponent}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))