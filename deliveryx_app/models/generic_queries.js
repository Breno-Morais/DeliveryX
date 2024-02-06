const { Client } = require('pg');
module.exports = {
  runQuery,
  runSelectQuery,
  runInsertQuery,
  createShipping
}

const clientBreno = {
  user: 'postgres',
  host: 'localhost',
  database: 'deliveryx',
  password: 'admin',
  port: 5432, // the default PostgreSQL port
}

const clientJade = {
  user: 'jade',
  host: 'localhost',
  database: 'postgres',
  password: 'jade',
  port: 5432, // the default PostgreSQL port
}

const clientGiu = {
  user: 'postgres',
  host: 'localhost',
  database: 'deliveryx',
  password: 'giu',
  port: 5432, // the default PostgreSQL port
}

const currentClient = clientBreno;

const shippingExample = {
  Location_destiny_id: 1, 
  Location_origin_id: 2, 
  Location_current_id: 2, 
  User_id: 1,  
  Package_Weight: 5, 
  Package_Height: 4, 
  Package_Depth: 3,  
  Package_Width: 6, 
  Package_Price: 200, 
  Ready_to_deliver: true,
  Finished: false,
  Recipient_Email: 'zezinho@gmail.com',
  Registration_date: '2022-10-26 10:00:00'
}

async function runQuery(aQuery) {
  const client = new Client(currentClient);

  try {
    await client.connect();
    const result = await client.query(aQuery);
    console.log('Query results:', result.rows);
  } catch (error) {
    console.error('Error executing query:', error);
  } finally {
    await client.end();
  }
}

async function runInsertQuery(aQuery) {
  const client = new Client(currentClient);

  try {
    await client.connect();
    const result = await client.query(aQuery);
    return true
  } catch (error) {
    console.error('Error executing query:', error);
    return false
  } finally {
    await client.end();
  }
}

async function runSelectQuery(aQuery) {
  const client = new Client(currentClient);

  try {
    await client.connect();
    const result = await client.query(aQuery);
    return result.rows;
  } catch (error) {
    console.error('Error executing query:', error);
    return -1;
  } finally {
    await client.end();
  }
}


const shippingAttributes = [
  'Package_Weight', 
  'Package_Height', 
  'Package_Depth',  
  'Package_Width', 
  'Package_Price', 
  'Finished', 
  'Ready_to_deliver', 
  'User_id',  
  'Location_origin_id', 
  'Location_destiny_id', 
  'Location_current_id', 
  'Recipient_Email',
  'Registration_date'
]

let condensedShippingAttributes = ""
for( attribute of shippingAttributes){
  condensedShippingAttributes += (attribute + ", ")
}
condensedShippingAttributes = condensedShippingAttributes.substring(0, condensedShippingAttributes.length -2) + ") VALUES ( "
async function createShipping(shipping) {
    var query = "INSERT INTO Shippings(" + condensedShippingAttributes
    for( attribute of shippingAttributes){
        query = query + shipping[attribute] + "," ;
    }
    query = query.substring(0, query.length-1);
    query += ") RETURNING Shipping_id;"

    console.log("Query: ", query)
    const result = await runSelectQuery(query);
    return result[0].shipping_id;
}
