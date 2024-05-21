import mysql from 'mysql2';

import database from './keys.js';

const pool = mysql.createPool(database.database);

export default pool;