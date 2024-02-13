import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {userRouter} from './routes/index.js';

const app = express();
app.use(bodyParser.json());
app.use('/', userRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});