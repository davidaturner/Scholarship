import React from 'react'
import './App.css';

const rowDataHeader = {id: 0, state:'State', population: 'Population', capital: 'Capital'}
const rowData = {
  rows: [
    { id: 1, state: 'Idaho', population: ' ', capital: 'Boise'},
    { id: 2, state: 'Tennesee', population: '6.651 million', capital: 'Nashville'},
    { id: 3, state: 'Maine', population: '1.331 million', capital: 'Augusta'},
    { id: 4, state: 'Wisconsin', population: '5.779 million', capital: 'Madison'}
  ]
}

function tablerow(rowdata) {
  let {state, population, capital } = rowdata
  return (
    <div className="tablegrid">
      <p>{state}</p>
      <p>{population}</p>
      <p>{capital}</p>
    </div>
  )
}

const stateInfo = () => {
  return (
    <div>
      <div className = "strong">
        {tablerow(rowDataHeader)}
      </div>
      {tablerow(rowData.rows[0])}
      {tablerow(rowData.rows[1])}
      {tablerow(rowData.rows[2])}
      {tablerow(rowData.rows[3])}
    </div>
  )
}

function App() {
  return (
    stateInfo()
  )
}

export default App;
