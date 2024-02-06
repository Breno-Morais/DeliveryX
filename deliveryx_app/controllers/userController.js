module.exports = {
  verificarUsuario,
  insertUser,
  getUser,
  verifyUserCredentials,
  getUserVerify,
  gerarRelatorioUsuario
}


const { getUserQuery, setUserQuery, getUserCredentialsQuery, saveToCSV, getIdFromEmail } = require('../models/specific_queries')
const { adaptUser } = require('../models/adapter.js')
const bcryptjs = require('bcryptjs')

// SALT should be created ONE TIME upon sign up
const numSaltRounds = 1

async function insertUser(user)
{
  user.password = await bcryptjs.hash(user.password, numSaltRounds)
  return await setUserQuery(user)
}

async function verifyUserCredentials(user)
{
  const passwordHashed = await getUserCredentialsQuery(user.email)
  return await bcryptjs.compare(user.password, passwordHashed)
}

async function getUserVerify(user)
{
  if(await verifyUserCredentials(user))
  {
    return await getUser(user.email)
  }
  else 
  {
    return null
  }
}

async function getUser(email)
{
  const users = await getUserQuery(email)
  return adaptUser(users[0])
}

function verificarUsuario(user){
  // Verifica CPF

  return true;
}


async function gerarRelatorioUsuario(email){
  const user_id = await getIdFromEmail(email)
  console.log("user_id = ", user_id)
  await saveToCSV("user_id", user_id, [])
}