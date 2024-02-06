module.exports = {
  getAllShippingsToRoute,
  updateRequest,
  autorize,
  criarRota,
  getAllRoutes,
  getRoutesWithCouriers,
  getRoutesWithoutCouriers,
  getCouriersInArea,
  atribuirEntregador,
  gerarRelatorioAdmin,
  getAllShippings
}
const { adaptPacoteToShipping, adaptUser, adaptShippingToPacote } = require('../models/adapter')
const { getAllShippingsReadyToDeliver, updateShipping, updateReadyToDeliver, insertRoute,
  getLocationsAndShippingsRoutes, getLocationsAndShippingsRoutesWith, getLocationsAndShippingsRoutesWithout,
  getCouriersInAreaQuery, updateRouteCourier, getIfCourierHasRoute, getIfCourierHasRouteClosed, getClosedRouteOfCourier,
  updateSendDate, getLocationById, getShippingQueryInspection, saveToCSV, getIdFromEmail, getAllShippingsQuery 
} = require('../models/specific_queries')
const { getShipping } = require('./requestController')
const { getUser } = require('./userController')

async function getAllShippingsToRoute(){
  const shippings = await getAllShippingsReadyToDeliver()
  return shippings
}

async function updateRequest(data)
{
    const shipping = adaptPacoteToShipping(data)
    shipping.Ready_to_deliver = false
    shipping.Finished = false
    shipping.shipping_id = data.id

    return await updateShipping(shipping)
}

async function autorize(id)
{
  return await updateReadyToDeliver(id, true)
}

async function criarRota(shippingIds)
{
  // Pega os ids das filiais de origem e destino de cada shipping,
  // então divide em diferentes etapas da entregue
  let shippings = await Promise.all(shippingIds.map( async (shippingId) => {
    const shipping = await getShipping(shippingId, 'route')
    
    return [{idFilial: shipping.idOrigem, id: shipping.id, entrega: false}, {idFilial: shipping.idDestino, id: shipping.id, entrega: true}]
  }))
  // Transforma em um array unidimensional
  shippings = shippings.flat()

  // Insere as rotas no banco de dados
  let result = await insertRoute(shippings)

  // Atualiza todos os pacotes
  for(id of shippingIds)
  {
    await updateReadyToDeliver(id, false)
    await updateSendDate(id)
  }

  return result
}


async function getAllRoutes()
{
  const routes = await getLocationsAndShippingsRoutes()
  return routes
}

async function getRoutesWithCouriers(email, unico)
{
  const user = await getUser(email)

  if(unico)
  {
    const check = (await getIfCourierHasRouteClosed(user.id))[0].exists
    if(check){
      // (await getShippingQueryInspection(id)[0]
      const filiaisEntregas = (await getClosedRouteOfCourier(user.id))[0]

      filiaisEntregas.entregas = await Promise.all(filiaisEntregas.entregas.map( async (id) => {
        return {...(await getShippingQueryInspection(id))[0], estado: ''}
      }))
      filiaisEntregas.filiais = await Promise.all(filiaisEntregas.filiais.map( async (id) => (await getLocationById(id))[0]))

      return filiaisEntregas
    } else {
      return []
    }
  } else {
    const check = (await getIfCourierHasRoute(user.id))[0].exists
    if(check)
      return await getLocationsAndShippingsRoutesWith(user.id)
    else
      return []
  }
}

async function getRoutesWithoutCouriers()
{
  const routes = await getLocationsAndShippingsRoutesWithout()
  return routes
}

async function getCouriersInArea(filiais)
{
  const entregadores = await getCouriersInAreaQuery(filiais)
  return entregadores.map((entregador) => adaptUser(entregador))
}

async function atribuirEntregador(data)
{
  return await updateRouteCourier(data.userId, data.routeId)
}

async function gerarRelatorioAdmin(email){
  const user_id = await getIdFromEmail(email)
  console.log("user_id = ", user_id)
  await saveToCSV("user_id", user_id, [])
}

async function getAllShippings() {
  const packages = await getAllShippingsQuery()

  return packages.map((package) => adaptShippingToPacote(package, 'query'))
}