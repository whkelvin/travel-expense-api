/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import travelRouter from './travel-routes';

const router = express.Router();

router.use('/add', travelRouter);

export default router;
