const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const { insertUser, verifyUserCredentials } = require('../controllers/userController')
const { acceptRoute, refuseRoute, deliverShipping, atualizarFilialAtual } = require('../controllers/courierController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/registrarEntregador', async (req, res) => {
  let data = req.body
  data.type = 3

  const resultQuery = await insertUser(data)

  res.send(JSON.stringify(resultQuery))
})

router.post('/loginEntregador', async (req, res) => {
  let data = req.body

  const user = await verifyUserCredentials(data)

  res.send(JSON.stringify(user))
})

router.post('/escolher', async (req, res) => {
  let data = req.body

  if (data.escolha)
    await res.send({ sucess: acceptRoute(data.idRoute)})
  else
    await res.send({ sucess: refuseRoute(data.idRoute)})
})

router.get('/entregar', async (req, res) => {
  const success = await deliverShipping(req.query.id)

  res.json(success)
})

router.post('/atualizarLocal', async (req, res) => {
  let data = req.body
  const success = await atualizarFilialAtual(data.shippings, data.filialId) 
  
  res.json(success)
})

module.exports = router
