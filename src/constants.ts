import dotenv = require('dotenv');

dotenv.config();
export const PORT = process.env.PORT ?? 8000;
