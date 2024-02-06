const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const { insertUser, verifyUserCredentials } = require('../controllers/userController')
const { getAllShippingsToRoute, updateRequest, autorize, criarRota, getRoutesWithCouriers, getRoutesWithoutCouriers, getCouriersInArea, atribuirEntregador, getAllShippings } = require('../controllers/adminController')
const { calcularPreco } = require('../controllers/requestController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/registrarAdmin', async (req, res) => {
  let data = req.body
  data.type = 1

  const resultQuery = await insertUser(data)
  res.send(JSON.stringify(resultQuery))
})

router.post('/loginAdmin', async (req, res) => {
  let data = req.body

  const user = await verifyUserCredentials(data)
  res.send(JSON.stringify(user))
})

router.get('/pacotesProntos', async (req, res) => {
  const shoppings = await getAllShippingsToRoute()
  res.json(shoppings)
})

router.get('/consultaRotas', async (req, res) => {
  let routes
  if(req.query.courier){
    routes = await getRoutesWithCouriers(req.query.courier, req.query.unico)
  }
  else{
    routes = await getRoutesWithoutCouriers()
  }

  res.json(routes)
})

router.get('/consultarFilial', async (req, res) => {
  const shoppings = await getAllShippings()
    
  res.json(JSON.stringify(shoppings))
})

router.post('/atualizarSolicitacao', async (req, res) => {
  let data = req.body

  const shoppingPrice = calcularPreco(data)
  data.preco = shoppingPrice
  await updateRequest(data)

  res.send(JSON.stringify({preco: shoppingPrice}))
})

router.get('/autorizarPedido', async (req, res) => {
  const success = await autorize(req.query.shoppingId)
  res.json(success)
})

router.get('/consultarEntregador', async (req, res) => {
  const result = await getCouriersInArea(req.query.array)
  res.json(result)
})

router.post('/criarRota', async (req, res) => {
  let data = req.body

  const success = await criarRota(data)
  res.send(success)
})

router.post('/atribuirEntregador', async (req, res) => {
  let data = req.body

  const success = await atribuirEntregador(data)
  res.send(success)
})

module.exports = router