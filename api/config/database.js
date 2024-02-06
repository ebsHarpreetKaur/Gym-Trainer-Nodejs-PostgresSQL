const { Sequelize } = require('sequelize');

module.exports = new Sequelize('Mind_Growth', 'postgres', 'ebullientsoft1', {
    host: 'localhost',
    dialect: 'postgres'
  });


  








// const { Client } = require('pg');


// // PostgreSQL database connection
// const connectionString = 'postgresql://postgres:ebullientsoft1@localhost:5432/Mind_Growth';
// const client = new Client({
//     connectionString: connectionString,
// });


// client.connect()
//     .then(() => {
//         console.log('Connected to PostgreSQL database');
//     })
//     .catch((err) => {
//         console.error('Error connecting to PostgreSQL database', err);
//     });


// module.exports = client;
