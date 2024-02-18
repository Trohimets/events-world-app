import { Auth } from '../models/users.js';


export class AuthController {
	static async authUser(req, res) {
		const { username, password } = req.body;

		if (!username || !password) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}
		try {
		await Auth.registerUser(username, password)
		res.status(201).json({ message: 'Пользователь зарегистрирован' });
		} 
		catch (error) {
		console.error('Ошибка при регистрации:', error);
		res.status(500).json({ error: 'Ошибка при регистрации' });
	  }
	}

	static async loginUser(req, res) {
		const { username, password } = req.body;
		if (!username || !password) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}
		await Auth.loginUser(req, res)	
}
}
