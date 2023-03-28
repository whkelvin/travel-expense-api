import express = require('express');
import { PORT } from './constants';
import routes from './routes/index';
import bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running on port ${PORT}`);
});
