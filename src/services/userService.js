import pool from '../config/databases/mysql_db';

export class UserService {
    static async getAllUsers() {
        const results = await pool.query('SELECT * FROM users');
        return results;
    }
}