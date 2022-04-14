import React from 'react'
import './css/styles.css'

function SeekCep({ events }) {
  if (!events || events.length === 0) return null
  return (
    <>
      <h1 className="text-center mx-auto text-primary">CEP Localizado:</h1>
      <ul className="list-group">
        {events.map((item) => (
          <li className="list-group-item" key={item.cep}>
            <span>CEP: {item.cep} </span>
            <span>Logradouro: {item.logradouro} </span>
            <span>Bairro: {item.bairro} </span>
            <span>Município: {item.localidade} </span>
            <span>UF: {item.uf}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SeekCep
