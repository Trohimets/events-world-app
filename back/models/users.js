import { pool } from '../database/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export class Auth {
	static async registerUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
    await pool.query(query, [username, hashedPassword]);
	}

	static async loginUser(req, res) {
        const { username, password } = req.body;
        const query = 'SELECT * FROM users WHERE username = $1';
        const result = await pool.query(query, [username]);
        const user = result.rows[0];
        if (user) {
            try {
              if (await bcrypt.compare(password, user.password)) {
                const id =user.id
                const token = jwt.sign({ id: user.id, username: user.username }, 'secret', { expiresIn: '1h' });
                res.status(200).json({ token, id });
              } else {
                res.status(401).json({ error: 'Неправильное имя пользователя или пароль' });
              }
            } catch (error) {
              console.error('Ошибка при входе:', error);
              res.status(500).json({ error: 'Ошибка при входе' });
            }
          } else {
            res.status(401).json({ error: 'Неправильное имя пользователя или пароль' });
          }
		
  }
}
