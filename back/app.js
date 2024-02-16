import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {userRouter} from './routes/index.js';
import {getData, filterObjects} from './parser/parser.js'
import { pool } from './database/index.js';

const app = express();
app.use(bodyParser.json());
app.use('/', userRouter);


// Отправка поискового запроса, получение и запись в БД результата (требуется авторизация)
app.post('/requests/', authenticateToken, async (req, res) => {
  const search_name = req.body.search_name
  const  user_id = req.body.user_id
  const parseData = await getData(search_name)
  const filterData = filterObjects(parseData)
  const jsonData = JSON.stringify(filterData);
  console.log(filterData)
  await pool.query('insert into requests(user_id, query, results) values($1, $2, $3)', [
    user_id,
    search_name,
    jsonData
  ]);
  res.status(200).send(filterData);
});

app.post('/history', authenticateToken, async (req, res) => {
  const { user_id, offset } = req.body;
  const result = await pool.query('select query, results from requests where user_id = $1' +
  ' order by id desc limit $2', [
    user_id,
    offset
  ]);
  const jsonData = JSON.stringify(result.rows);

  // Отправка данных в формате JSON без экранирования
  res.status(200).send(jsonData);
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