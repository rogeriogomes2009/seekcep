const express = require('express')
const Cors = require('cors')
const Correio = require('node-correios')
const correio = new Correio
const app = express()

const PORT = 3002

app.use(Cors())

app.listen(PORT, () => console.log('Listening on port', PORT))

app.get('/', (req, res) => {
  const {seeking} = req.query
 
  correio.consultaCEP({ cep: seeking })
    .then(result => {
      res.send(result)
      console.log(result)
    })
    .catch (error => {
      console.log(error)
  })
})