module.exports = {
  acceptRoute,
  refuseRoute,
  deliverShipping,
  atualizarFilialAtual
}


const { deleteCourierRoute, updateIsOpen, updateFinished, removeShippingFromRoutes, updateLocationOfShippingOfRoute } = require('../models/specific_queries')

async function acceptRoute(idRoute){
  return await updateIsOpen(idRoute)
}

async function refuseRoute(idRoute){
  return await deleteCourierRoute(idRoute)
}

async function deliverShipping(idShipping){
  let success = await updateFinished(idShipping)
  success = success && await removeShippingFromRoutes(idShipping)
  return success 
}

async function atualizarFilialAtual(shippings, filialId){
  return await updateLocationOfShippingOfRoute(shippings, filialId)
}