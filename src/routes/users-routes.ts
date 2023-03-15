import * as usersController from '../controllers/users-controller';
import express from 'express';

const router = express.Router();

/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
router.post('', usersController.postUser);

export default router;
