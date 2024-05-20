import mysql from 'mysql2';

import database from './keys';

const pool = mysql.createPool(database.database);

pool.getConnection((err, conn) => {
    console.log('Connected to the database');
});

export default pool;