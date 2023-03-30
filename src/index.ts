import express from 'express';
import { PORT } from './constants';
import routes from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use(
  cors({
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
    credentials: true,
  })
);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.header('Access-Control-Allow-Headers');
  res.header('Access-Control-Allow-Credentials');
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  next();
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT}`);
});
