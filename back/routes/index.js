import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';

export const userRouter = Router();

userRouter.post('/register', AuthController.authUser);
userRouter.post('/login', AuthController.loginUser);
