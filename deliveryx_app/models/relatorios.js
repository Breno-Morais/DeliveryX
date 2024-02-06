const fs = require('fs');
const path = require('path');
const { parseAsync } = require('json2csv');
const { Client } = require('pg');

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

const currentClient = clientBreno;

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



async function getUserReportData(user_id, filters) {
  try {
    const rows = await getUserReportDataQuery(user_id, filters);

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

getUserReportData(2, []);







