import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import recipes from "./data/v0.107b"

const getTotalNeeded = (itemName, needed) => {

}

function App() {
  const [state, setState] = useState({ toMake: "default", amount: 0 });
  const handleChange = e => {
    setState(state => {
      return { ...state, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className='App'>
      <select onChange={ e => handleChange(e) } value={ state.toMake } name="toMake">
        <option value='default' disabled>
          Select Item
        </option>
        {
          Object.entries(recipes).map(item => {
            return <option value={ item[0] }>{ item[1].name }</option>
          })
        })
      }
      </select >
      <input type='number' />
    </div >
  )
}

export default App
