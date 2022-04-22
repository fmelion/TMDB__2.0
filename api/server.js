const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('tiny'));

app.use('/api', routes);

app.listen(3001, () => console.log(`Listening on 3001`));
