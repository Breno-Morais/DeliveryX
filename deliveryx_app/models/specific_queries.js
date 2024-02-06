const fs = require('fs');
const path = require('path');
const { parseAsync } = require('json2csv');
module.exports = {
  getLocationsQuery,
  getShippingQueryQuery,
  getShippingQueryRoute,
  getUserQuery,
  setUserQuery,
  getUserCredentialsQuery,
  getIdFromEmail,
  getAllShippingsReadyToDeliver,
  getAllShippingsQuery,
  getShippingQueryInspection,
  updateShipping,
  updateReadyToDeliver,
  insertRoute,
  getLocationsAndShippingsRoutes,
  getCouriersInAreaQuery,
  updateRouteCourier,
  getLocationsAndShippingsRoutesWith,
  getLocationsAndShippingsRoutesWithout,
  getShippingInRoute,
  deleteCourierRoute,
  updateIsOpen,
  getIfCourierHasRoute,
  getAllShippingOfUserQuery,
  getIfCourierHasRouteClosed,
  getClosedRouteOfCourier,
  getLocationById,
  updateFinished,
  removeShippingFromRoutes,
  updateLocationOfShippingOfRoute,
  updateSendDate,
  saveToCSV
}

const { runSelectQuery, runInsertQuery } = require('./generic_queries')

async function getLocationsQuery() {
  const rows = await runSelectQuery('SELECT * FROM LOCATIONS')
  return rows
}

async function getIdFromEmail(email) {
  const query = 'SELECT User_id FROM Users WHERE Email = \'' + email + '\';'
  const user = await runSelectQuery(query)
  console.log(user)
  if(user.length)
    return user[0].user_id
  else return null
}

async function getUserQuery(email) {
  const query = 'SELECT * FROM Users WHERE Email = \'' + email + '\';'
  const user = await runSelectQuery(query)
  return user
}

async function getUserCredentialsQuery(email) {
  const query = 'SELECT User_password FROM Users WHERE Email = \'' + email + '\';'
  const users = await runSelectQuery(query)

  return (users.length) ? users[0].user_password : null
}

async function getShippingQueryQuery(id) {
  const query = 'SELECT User_name, Package_price, destiny.Location_name as destiny_name, origin.Location_name as origin_name, currentL.Location_name as current_name, Ready_to_deliver, Finished ' +
    'FROM SHIPPINGS ' +
    'JOIN Users USING (User_id) ' +
    'JOIN Locations destiny ON (Location_destiny_id = destiny.Location_id) ' +
    'JOIN Locations origin ON (Location_origin_id = origin.Location_id) ' +
    'JOIN Locations currentL ON (Location_current_id = currentL.Location_id) ' +
    'WHERE Shipping_id = ' + id;

  const shipping = await runSelectQuery(query)
  return shipping
}

async function getShippingQueryInspection(id) {
  const query = 'SELECT shipping_id, email, origin.location_name as origin_location_name, destiny.location_name as destiny_location_name, package_height, package_depth, package_width, package_weight, package_price, recipient_email ' +
    'FROM SHIPPINGS ' +
    'JOIN Users USING (User_id) ' +
    'JOIN Locations destiny ON (Location_destiny_id = destiny.Location_id) ' +
    'JOIN Locations origin ON (Location_origin_id = origin.Location_id) ' +
    'JOIN Locations currentL ON (Location_current_id = currentL.Location_id) ' +
    'WHERE Shipping_id = ' + id + ' AND Ready_to_deliver = false AND Finished = false';

  const shipping = await runSelectQuery(query)
  return shipping
}

async function getShippingQueryRoute(id) {
  const query = 'SELECT location_origin_id, location_destiny_id, shipping_id FROM Shippings WHERE shipping_id = ' + id

  const shipping = await runSelectQuery(query)
  return shipping
}

async function getAllShippingsQuery() {
  const query = 'SELECT Package_Weight, Package_Height, Package_Depth, Package_Width, Registration_date, Receive_date, Location_name FROM Shippings S ' + 
  'JOIN Locations L ON S.Location_destiny_id = L.Location_id'

  const shippings = await runSelectQuery(query)
  return shippings
}

async function setUserQuery(user) {
  const query = 'INSERT INTO Users(User_name, CPF, Email, User_password, Phone_number, User_type)' +
    'VALUES (\'' + user.name + '\', \'' + user.CPF + '\', \'' + user.email + '\', \'' + user.password + '\', \'' + user.telephone + '\', ' + user.type + ')'

  return await runInsertQuery(query)
}

async function getAllShippingsReadyToDeliver() {
  const query = 'SELECT O.Location_name as Origin_Name, D.Location_name as Destiny_Name, Package_Width, Package_Height, Package_Weight, Package_Depth, Shipping_id ' +
    'FROM Locations O ' +
    'JOIN Shippings S ON (O.Location_id=S.Location_origin_id) ' +
    'JOIN Locations D ON (D.Location_id=S.Location_destiny_id) ' +
    'WHERE S.Ready_to_deliver=TRUE;';
  const data = await runSelectQuery(query)
  return data
}

async function updateShipping(shipping) {
  const query = 'UPDATE Shippings ' +
    'SET Location_destiny_id = ' + shipping.Location_destiny_id + ', ' +
    'Location_origin_id = ' + shipping.Location_origin_id + ', ' +
    'Location_current_id = ' + shipping.Location_current_id + ', ' +
    'User_id = ' + shipping.User_id + ', ' +
    'Package_Weight = ' + shipping.Package_Weight + ', ' +
    'Package_Height = ' + shipping.Package_Height + ', ' +
    'Package_Depth =  ' + shipping.Package_Depth + ', ' +
    'Package_Width = ' + shipping.Package_Width + ', ' +
    'Package_Price = ' + shipping.Package_Price + ', ' +
    'Ready_to_deliver = ' + shipping.Ready_to_deliver + ', ' +
    'Finished = ' + shipping.Finished + ', ' +
    'Recipient_Email = ' + shipping.Recipient_Email + ' ' +
    'WHERE Shipping_id = ' + shipping.shipping_id;


  return await runInsertQuery(query)
}

async function updateReadyToDeliver(id, state) {
  const query = 'UPDATE Shippings SET Ready_to_deliver = ' + state + ' WHERE Shipping_id = ' + id

  return await runInsertQuery(query)
}

async function updateSendDate(id) {
  const query = 'UPDATE Shippings SET Send_date = (to_timestamp(' + Date.now() + '/1000.0)) WHERE Shipping_id = ' + id

  return await runInsertQuery(query)
}

async function insertRoute(shippings) {
  // Insere o primeiro item da rota, pega o id do rota para usar nas outras partes da rota
  const inicialQuery = 'INSERT INTO Routes(Location_id, Shipping_id, Is_Delivery, Is_Open, Is_Finished) ' +
    'VALUES  (' + shippings[0].idFilial + ', ' + shippings[0].id + ', ' + shippings[0].entrega + ', true, false' +
    ') RETURNING Route_id;'
  const routeId = (await runSelectQuery(inicialQuery))[0].route_id

  let result = true

  // Insere os outros itens da rota com o mesmo id de rota
  shippings.slice(1).forEach(async (shipping) => {
    const query = 'INSERT INTO Routes(Route_id, Location_id, Shipping_id, Is_Delivery, Is_Open, Is_Finished) ' +
      'VALUES  (' + routeId + ', ' + shipping.idFilial + ', ' + shipping.id + ', ' + shipping.entrega + ', true, false' +
      ');'

    result = result && await runInsertQuery(query)
  })

  return result
}

async function getLocationsAndShippingsRoutes() {
  const query = 'SELECT Route_id as id, ARRAY_AGG(DISTINCT Location_name) as filiais, ARRAY_AGG(DISTINCT Shipping_id) as entregas ' +
    'FROM Routes JOIN Locations USING(Location_id) ' +
    'WHERE Is_Finished = FALSE ' +
    'GROUP BY route_id ORDER BY route_id'
  return await runSelectQuery(query)
}

async function getLocationsAndShippingsRoutesWith(id) {
  const query = 'SELECT Route_id as id, ARRAY_AGG(DISTINCT Location_name) as filiais, ARRAY_AGG(DISTINCT Shipping_id) as entregas ' +
    'FROM Routes JOIN Locations USING(Location_id) ' +
    'WHERE Courier_id = ' + id + ' AND Is_Finished = FALSE ' +
    'GROUP BY route_id ORDER BY route_id'

  return await runSelectQuery(query)
}

async function getLocationsAndShippingsRoutesWithout() {
  const query = 'SELECT Route_id as id, ARRAY_AGG(DISTINCT Location_name) as filiais, ARRAY_AGG(DISTINCT Shipping_id) as entregas ' +
    'FROM Routes JOIN Locations USING(Location_id) ' +
    'WHERE Courier_id IS NULL AND Is_Finished = FALSE ' +
    'GROUP BY route_id ORDER BY route_id'
  return await runSelectQuery(query)
}

async function getLocationById(id) {
  const query = 'SELECT * FROM Locations WHERE Location_id = ' + id
  
  return await runSelectQuery(query)
}

async function getClosedRouteOfCourier(id) {
  const query =  'SELECT Route_id, ARRAY_AGG(DISTINCT Location_id) as filiais, ' +
	'ARRAY_AGG(DISTINCT Shipping_id) as entregas ' +
  'FROM Routes ' +
  'WHERE Courier_id = ' + id + ' AND Is_Open = false AND Is_Finished = FALSE GROUP BY Route_id'

  return await runSelectQuery(query)
}

async function getCouriersInAreaQuery(filiais) {
  const queryArray = filiais.map((filial) => '\'' + filial + '\'').toString()
  const query = 'SELECT User_id, User_name, Email, Phone_number ' +
    'FROM UserLocations ' +
    'JOIN Users USING(User_id) ' +
    'JOIN Locations USING(Location_id) ' +
    'WHERE location_name = ANY(ARRAY[' + queryArray + ']) ' +
    'GROUP BY User_id, User_name, Email, Phone_number;'

  return await runSelectQuery(query)
}

async function updateRouteCourier(userId, routeId) {
  const query = 'UPDATE Routes SET Courier_id = ' + userId + ' WHERE Route_id = ' + routeId + ';'

  return await runInsertQuery(query)
}

async function getShippingInRoute(id) {
  const query = 'SELECT EXISTS(SELECT 1 FROM Routes WHERE Shipping_id = ' + id + ' AND Courier_id IS NOT NULL AND Is_Finished = FALSE);'

  return await runSelectQuery(query)
}

async function deleteCourierRoute(idRoute) {
  const query = 'UPDATE Routes SET Courier_id = NULL WHERE Route_id = ' + idRoute

  return await runInsertQuery(query)
}

async function updateIsOpen(idRoute) {
  const query = 'UPDATE Routes SET Is_Open = false WHERE Route_id = ' + idRoute

  return await runInsertQuery(query)
}

async function getIfCourierHasRoute(id) {
  const query = 'SELECT EXISTS(SELECT 1 FROM Routes WHERE Is_Open = true AND Courier_id = ' + id + ');'

  return await runSelectQuery(query)
}

async function getIfCourierHasRouteClosed(id) {
  const query = 'SELECT EXISTS(SELECT 1 FROM Routes WHERE Is_Open = false AND Courier_id = ' + id + ' AND Is_Finished = FALSE);'

  return await runSelectQuery(query)
}

async function getAllShippingOfUserQuery(id) {
  const query = 'SELECT Package_Weight, Package_Height, Package_Depth, Package_Width, Registration_date, Receive_date, Location_name FROM Shippings S ' + 
    'JOIN Locations L ON S.Location_destiny_id = L.Location_id ' +
    'JOIN Users U ON S.Recipient_Email = U.Email ' +
    'WHERE S.User_id = 1 OR U.User_id = ' + id + ';'

  return await runSelectQuery(query)
}

async function getAllShippingOfUserQuery(id) {
  const query = 'SELECT Package_Weight, Package_Height, Package_Depth, Package_Width, Registration_date, Receive_date, Location_name FROM Shippings S ' + 
    'JOIN Locations L ON S.Location_destiny_id = L.Location_id ' +
    'JOIN Users U ON S.Recipient_Email = U.Email ' +
    'WHERE S.User_id = 1 OR U.User_id = ' + id + ';'

  return await runSelectQuery(query)
}

async function updateFinished(id){
  const query = 'UPDATE Shippings SET Finished = true, Ready_To_Deliver = false, Receive_date = (to_timestamp(' + Date.now() + '/1000.0)) WHERE Shipping_id = ' + id + ';'

  return await runInsertQuery(query)
}

async function removeShippingFromRoutes(id){
  const query = 'UPDATE Routes SET Is_Finished = true WHERE Shipping_id = ' + id + ';'

  return await runInsertQuery(query)
}

async function updateLocationOfShippingOfRoute(shippings, filialId){
  const queryArray = shippings.toString()
  const query = 'UPDATE Shippings SET location_current_id = ' + filialId + ' WHERE Shipping_id = ANY(ARRAY[' + queryArray + ']);'

  return await runInsertQuery(query)
}

// ======================== Consultas ===============================


// i. Usuários Externos podem buscar todos os envios e recebimentos de
// pacotes realizados. Os campos resultantes da pesquisa são Dimensão,
// Peso, Data de Entrega, Data de Cadastro e Endereço de Destino. Ele
// pode usar um campo de texto livre para filtrar por um endereço. O
// resultado é exibido no formato de lista.

// 1. Selecionar todos os dados solicitados a partir do id do usuário
async function getAllShippingsByUserID(user_id){
  const query = 'SELECT * FROM Shippings WHERE user_id = ' + user_id + ';'
  return await runSelectQuery(query)
}


// 2. Para cada envio, verificar se o endereço digitado é substring do endereço completo
async function getAllShippingsById(user_id) {
  try {
    const shipping = await getAllShippingsByUserID(user_id);
    //console.log(shipping)
  } catch (error) {
    //console.error(error);
  }
}


async function getFullLocation(location_id){
  const query = 'SELECT * FROM Locations WHERE location_id= ' + location_id + ';'
  return await runSelectQuery(query)
}

async function getCondensedLocation(location_id) {
  try {
    const location = await getFullLocation(location_id);
    fullString = ""
    for (value of Object.values(location[0])){
      fullString += value + " "
    }
    return fullString;
  } catch (error) {
    console.error(error);
  }
}

getCondensedLocation(2);


// SELECT 
//     Package_Weight,
//     Package_Height,
//     Package_Depth,
//     Package_Width,
//     Registration_date, Receive_date,
//     Location_id, 
// FROM Shippings
// JOIN Locations ON Shippings.Location_destiny_id = Locations.Location_id
// WHERE User_id = 1;

// ii. Gerenciadores podem fazer uma busca por todos os pacotes recebidos
// pela DeliveryX e vê-los em uma lista com os campos: Status, Data de
// Envio, Data de Entrega, Código de Entrega, Endereço de Envio,
// Endereço de Entrega e Filial. O resultado é exibido no formato de lista.


// iii. Entregadores podem buscar entre os pacotes de sua rota ativa. Eles
// devem poder ver os campos de Endereço, Tipo (Entrega ou Coleta) e
// Código de Entrega e Dimensões do Pacote. O resultado é exibido no
// formato de lista.






// ========================= Relatórios =============================

// i. Usuários externos devem poder gerar relatórios para seus envios e
// recebimentos. Ele deverá poder informar filtros de Data de Início, Data
// de Fim, Endereço de Coleta, Endereço de Entrega, Tipo (Entrega ou
// Coleta). O relatório deverá ser gerado como uma lista em formato CSV.

function writeQueryWithFilters(query, filters){
  for (filter of filters){
    query += " AND " + filter
  }
  query += ';'
  return query;
}

async function getUserReportDataQuery(user_id, filters){
  query = 'SELECT * FROM Shippings WHERE User_id = ' + user_id
  query = writeQueryWithFilters(query, filters)
  return await runSelectQuery(query)
}


// ii. Um gerenciador pode gerar um relatório com todos os pacotes
// recebidos e enviados por uma filial. Poderá definir filtros como Tipo,
// Data e Entregador Responsável. O relatório deverá ser informado como
// uma lista em formato CSV

async function getAdminReportDataQuery(Location_id, filters){
  query = 'SELECT * FROM Shippings WHERE Location_origin_id= ' + Location_id + ' OR Location_destiny_id= ' + Location_id;
  query = writeQueryWithFilters(query, filters)
  return await runSelectQuery(query)
}


// iii. Entregadores podem gerar um relatório completo para cada rota
// realizada. Ele deverá selecionar uma rota através de um campo de
// data. O relatório deverá ser gerado como uma lista em formato CSV.

async function getCourrierReportDataQuery(Route_id, filters){
  query = "SELECT * FROM Routes WHERE Route_id = " + Route_id ;
  query = writeQueryWithFilters(query, filters)
  return await runSelectQuery(query)
}


async function saveToCSV(attribute, value, filters) {
  try {
    switch (attribute.toLowerCase()){
      case "user_id" :
        rows = await getUserReportDataQuery(value, filters)
        break;
      case "location_id" :
        rows = await getAdminReportDataQuery(value, filters)
        break;
      case "route_id" :
        rows = await getCourrierReportDataQuery(value, filters)
        break;
      }
      console.log("Rows: ", rows)

    // Convert the result data to CSV format
    const csvData = await parseAsync(rows, { fields: Object.keys(rows[0])});

    // Write the CSV data to a file
    const filePath = path.join(__dirname, 'resultado.csv');
    fs.writeFileSync(filePath, csvData);

    console.log('CSV file saved:', filePath);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}