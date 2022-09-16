import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import data from './data'

function App() {
  const travel = data.map(list => {
    return (
      <Card 
        key={list.id}
        {...list}
      />
    )
  })

  return (
    <div className="App">
        <Nav />
        <div>
          {travel}
        </div>
    </div>
  )
}

export default App
