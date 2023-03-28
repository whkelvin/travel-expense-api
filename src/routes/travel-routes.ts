import * as travelController from '../controllers/travel-controller';
import express = require('express');

const router = express.Router();

/* eslint-disable-next-line @typescript-eslint/no-misused-promises */
router.post('', travelController.postItem);

export default router;
