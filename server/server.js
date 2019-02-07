const express = require('express');
const path = require('path');
const morgan = require('morgan');
const db = require('./db/db.js');

const app = express();
const port = process.env.PORT || 3040;
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(morgan('default'));

app.listen(port, () => { console.log(`Listening on port ${port}`); });
