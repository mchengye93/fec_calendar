const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const distDir = path.join(__dirname, '../client/dist');

app.use(express.static(distDir));

app.use(bodyParser.json());

app.listen(port, () => console.log('Listening on Port:', port));
