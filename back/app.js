import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {userRouter} from './routes/index.js';
import {getData} from './parser/parser.js'

const app = express();
app.use(bodyParser.json());
app.use('/', userRouter);


// Получение информации о задаче (требуется авторизация)
app.post('/requests/', authenticateToken, async (req, res) => {
  const search_name = req.body.search_name
  const  user_id = req.body.user_id
  const result = await getData(search_name)
  console.log(result)
});
// Функция для проверки авторизации
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token == null) return res.status(401).json({ error: 'Требуется авторизация' });

  jwt.verify(token, 'secret', (err, user) => {
    if (err) return res.status(403).json({ error: 'Ошибка авторизации' });
    req.user = user;
    next();
  });
}


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});