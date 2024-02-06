module.exports = {
    sendRequest,
    getLocations,
    getShipping,
    calcularPreco,
    getAllShippingOfUser
}

const { adaptPacoteToShipping, adaptShippingToPacote } = require('../models/adapter')
const { createShipping } = require('../models/generic_queries')
const { getLocationsQuery, getShippingQueryQuery, getShippingQueryInspection, getShippingQueryRoute, getIdFromEmail, getShippingInRoute, getAllShippingOfUserQuery  } = require('../models/specific_queries')
const { DateTime } = require('luxon');

async function sendRequest(data) {
    // Set the time zone to Brasilia/Brazil
    const timeZone = 'America/Sao_Paulo';
    
    // Get the current date and time in the specified time zone
    const currentDate = DateTime.now().setZone(timeZone);

    // Format the current date and time as a string in 'YYYY-MM-DD HH:MI:SS' format
    const formattedTimestamp = currentDate.toFormat('yyyy-MM-dd HH:mm:ss');
    console.log(formattedTimestamp);

    data.id = await getIdFromEmail(data.email);
    data.ready = false;
    data.entregue = false;
    data.dataCadastro = formattedTimestamp;
    const shipping = adaptPacoteToShipping(data);
    const shippingId = await createShipping(shipping);

    return parseInt(shippingId);
}
async function getLocations() {
    return await getLocationsQuery()
}

async function getShipping(id, type) {
    let shipping

    switch (type) {
        case 'inspection':
            shipping = await getShippingQueryInspection(id)
            break

        case 'track':
            shipping = await getShippingQueryQuery(id)
            if(shipping.length)
                shipping[0].emRota = (await getShippingInRoute(id))[0].exists

            break

        case 'route':
            shipping = await getShippingQueryRoute(id)
            break
    }

    if (!shipping.length)
        return []
    return adaptShippingToPacote(shipping[0], type)
}

function calcularPreco(pacote) {
    const citiesTax = 20
    const stateTax = 50
    const countryTax = 200
    let distanceTax = 0;

    if (pacote.destino.idPais !== pacote.origem.idPais) {
        distanceTax = countryTax
    } else if (pacote.destino.idEstado !== pacote.origem.idEstado) {
        distanceTax = stateTax
    } else if (pacote.destino.idCidade !== pacote.origem.idCidade) {
        distanceTax = citiesTax
    }

    return (pacote.altura * 0.02) + (pacote.peso * 0.0025) + (pacote.largura * 0.02) + (pacote.comprimento * 0.02) + distanceTax
}

async function getAllShippingOfUser(email) {
    const userId = await getIdFromEmail(email)
    const packages = await getAllShippingOfUserQuery(userId)

    return packages.map((package) => adaptShippingToPacote(package, 'query'))
}