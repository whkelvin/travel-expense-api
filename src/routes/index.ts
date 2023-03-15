import express, { Response } from 'express';
import usersRouter from './users-routes';

const router = express.Router();

router.use('/user', usersRouter);

export default router;
