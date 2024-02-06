const express = require('express')
const app = express()

const dotenv = require('dotenv').config()

const pedidoPacoteRouter = require('./routes/pedidoPacote')
const usuarioRouter = require('./routes/usuario')
const authRouter = require('./routes/auth')
const adminRouter = require('./routes/admin')
const courierRouter = require('./routes/entregador')


app.use(authRouter)
app.use(pedidoPacoteRouter)
app.use(usuarioRouter)
app.use(adminRouter)
app.use(courierRouter)

app.listen(5000, () => { console.log("Server started on port 5000")})