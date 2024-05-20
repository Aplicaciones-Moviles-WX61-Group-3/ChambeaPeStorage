import mysql from 'mysql2';

import database from './keys';

const pool = mysql.createPool(database.database);

export default pool;