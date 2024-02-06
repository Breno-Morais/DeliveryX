const { sendRequest, getLocations, calcularPreco, getShipping, getAllShippingOfUser } = require('../controllers/requestController')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/solicitarPedido', async (req, res) => {
    let data = req.body

    const shoppingPrice = calcularPreco(data)
    data.preco = shoppingPrice
    const shoppingId = await sendRequest(data)

    res.send(JSON.stringify({preco: shoppingPrice, id: shoppingId}))
})

router.get("/localizacoes", async (req, res) => {
    const locals = await getLocations()
    res.json(locals)
}) 

router.get("/consultaPedido", async (req, res) => {
    const shoppingInfo = await getShipping(req.query.shoppingId, req.query.type)
    console.log(shoppingInfo)
    res.json(JSON.stringify(shoppingInfo))
})

router.get("/consultaTodosPedidos", async (req, res) => {
    const shoppings = await getAllShippingOfUser(req.query.userEmail)
    
    res.json(JSON.stringify(shoppings))
})

module.exports = router