/* eslint-disable @typescript-eslint/no-unused-vars */
import express = require('express');
import travelRouter from './travel-routes';

const router = express.Router();

router.use('/item', travelRouter);

export default router;
