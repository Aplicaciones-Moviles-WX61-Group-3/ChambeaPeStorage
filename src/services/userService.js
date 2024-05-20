import pool from '../config/databases/mysql_db.js';

export class UserService {
    async getAllUsers() {
        const [rows] = await pool.promise().query("SELECT * FROM users");
        return rows;
    }
}