import React, { useState } from 'react'
import './App.css'
import SeekCep from './SeekCep'

function App() {
  const [events, setEvents] = useState([])

  const toArray = (obj) => {
    const array = [obj]
    return array
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    fetch(`http://localhost:3002/?seeking=${data.seeking}`)
      .then((response) => response.json())
      .then((data) => {
        const arr = toArray(data)
        console.log(arr)
        setEvents(arr)
      })
      .catch((error) => console.error)
  }
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <h1 className="text-center mx-auto text-danger">Buscar CEP</h1>
        <div className="form-group">
          <input
            type="text"
            name="seeking"
            className="form-control"
            placeholder="Digite o CEP"
          />
        </div>
        <button
          type="submit"
          name="SeekCEP"
          className=" text-center btn btn-primary m-2"
        >
          Buscar
        </button>
      </form>
      <SeekCep events={events} />
    </div>
  )
}

export default App
