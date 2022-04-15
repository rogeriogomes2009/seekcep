const { Prisma, PrismaClient } = require ('@prisma/client')
const express = require('express')
const Cors = require('cors')
const Correio = require('node-correios')
const correio = new Correio
const prisma = new PrismaClient()
const app = express()

const PORT = 3002

app.use(Cors())

app.listen(PORT, () => console.log('Listening on port', PORT))

app.get('/', async (req, res) => {
  const {seeking} = req.query
  const postData = await prisma.cep.findFirst({
    where: { cep: seeking },
  })
  console.log(postData)
  const result = await correio.consultaCEP({ cep: seeking })
  await prisma.cep.create({
    data: {
      cep: result.cep,
      logradouro: result.logradouro,
     bairro: result.bairro,
     municipio: result.municipio,
     uf: result.uf
    }
  })
  console.log('testando result')
      res.send(result)
      
})  
