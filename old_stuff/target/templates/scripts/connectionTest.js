const { Pool } = require('pg');
 
/**
 * Function to get data from a PostgreSQL table.
 *
 * @param {string} tableName - The name of the table to retrieve data from.
 * @returns {Promise<Array>} A promise that resolves to an array of objects representing the rows of the table.
 * @throws {Error} Throws an error if there is an issue connecting to the database or executing the query.
 */
async function getDataFromTable(tableName) {
    // Create a new instance of the Pool class from the pg module
    const pool = new Pool();
 
    try {
        // Acquire a client from the pool
        const client = await pool.connect();
 
        try {
            // Execute the query to retrieve data from the table
            const result = await client.query(`SELECT * FROM ${tableName}`);
 
            // Return the rows of the table
            return result.rows;
        } finally {
            // Release the client back to the pool
            client.release();
        }
    } catch (error) {
        throw new Error(`Error retrieving data from table: ${error.message}`);
    } finally {
        // End the pool to release all resources
        pool.end();
    }
}
 
// Usage Example for getDataFromTable
 
// Example: Retrieve data from a table named "employees"
getDataFromTable('login')
    .then((data) => {
        console.log('Data from table:');
        console.log(data);
    })
    .catch((error) => {
        console.error('Error retrieving data:', error);
    });