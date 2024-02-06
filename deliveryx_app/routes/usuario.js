const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const { insertUser, verifyUserCredentials, gerarRelatorioUsuario } = require('../controllers/userController')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/registrarUsuario', async (req, res) => {
  let data = req.body
  data.type = 2

  const resultQuery = await insertUser(data)

  res.send(JSON.stringify(resultQuery))
})

router.post('/loginUsuario', async (req, res) => {
  let data = req.body

  const user = await verifyUserCredentials(data)

  res.send(JSON.stringify(user))
})

router.get('/relatorioUsuario', async (req, res) => {
  await gerarRelatorioUsuario(req.query.userEmail)
  res.send("true")
})

router.post('/relatorioUsuario', async (req, res) => {
  filters = []
  console.log(req.body)

  await gerarRelatorioUsuario(req.body)
  res.send("true")
})

module.exports = router

